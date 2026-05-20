(function () {
  "use strict";

  // ---------- State ----------
  const STORE_KEY = "janet.v1";
  const LANG_KEY = "janet.lang";

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || { progress: {}, karma: 0 };
    } catch (e) {
      return { progress: {}, karma: 0 };
    }
  }
  function saveState() {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  }
  function loadLang() {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "en" || stored === "fr") return stored;
    return (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  let state = loadState();
  let lang = loadLang();

  // ---------- i18n helpers ----------
  function t(key, vars) {
    const dict = window.JANET_I18N[lang] || window.JANET_I18N.en;
    let str = dict[key] || key;
    if (vars) Object.keys(vars).forEach((k) => (str = str.replace("{" + k + "}", vars[k])));
    return str;
  }
  function pick(field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[lang] || field.en || field.fr || "";
  }

  // ---------- Router ----------
  function parseRoute() {
    const h = location.hash || "#/";
    if (h === "#/about" || h === "#/about/") return { name: "about" };
    const m = h.match(/^#\/course\/([^/]+)$/);
    if (m) return { name: "course", id: m[1] };
    return { name: "home" };
  }

  window.addEventListener("hashchange", render);
  window.addEventListener("popstate", render);

  // ---------- Rendering ----------
  function render() {
    document.documentElement.lang = lang;
    const langSel = document.getElementById("lang-select");
    if (langSel && langSel.value !== lang) langSel.value = lang;
    document.getElementById("karma-count").textContent = state.karma || 0;

    const route = parseRoute();
    const view = document.getElementById("view");
    view.innerHTML = "";
    if (route.name === "course") {
      const course = window.JANET_COURSES[route.id];
      if (!course) {
        location.hash = "#/";
        return;
      }
      renderCourse(view, course);
    } else if (route.name === "about") {
      renderAbout(view);
    } else {
      renderHome(view);
    }
  }

  function renderAbout(view) {
    const tpl = document.getElementById("tpl-about");
    view.appendChild(tpl.content.cloneNode(true));
    view.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    view.querySelector("[data-action='back']").addEventListener("click", () => {
      location.hash = "#/";
    });
  }

  function renderHome(view) {
    const tpl = document.getElementById("tpl-home");
    view.appendChild(tpl.content.cloneNode(true));
    view.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });

    const grid = view.querySelector("#course-grid");
    const order = window.JANET_COURSE_ORDER || Object.keys(window.JANET_COURSES);
    order.forEach((id) => {
      const c = window.JANET_COURSES[id];
      if (!c) return;
      const done = !!(state.progress[id] && state.progress[id].completed);
      const card = document.createElement("button");
      card.className = "course-card";
      card.dataset.done = done;
      card.type = "button";
      card.innerHTML = `
        <div class="emoji">${c.emoji || "✨"}</div>
        <h3>${escapeHtml(pick(c.title))}</h3>
        <p>${escapeHtml(pick(c.description))}</p>
        <div class="meta">
          <span>${t("course.duration", { n: c.duration || 5 })}</span>
          <span class="pts">${t("course.karma", { n: c.karma || 30 })}</span>
        </div>
      `;
      card.addEventListener("click", () => {
        location.hash = "#/course/" + id;
      });
      grid.appendChild(card);
    });
  }

  // ---------- Chat rendering ----------
  function renderCourse(view, course) {
    const tpl = document.getElementById("tpl-course");
    view.appendChild(tpl.content.cloneNode(true));
    view.querySelector("#chat-emoji").textContent = course.emoji || "✨";
    view.querySelector("#chat-name").textContent = "Janet";
    view.querySelector("[data-action='back']").addEventListener("click", () => {
      location.hash = "#/";
    });
    runChat(course);
  }

  function runChat(course) {
    const messagesEl = document.getElementById("messages");
    const choicesEl = document.getElementById("choices");
    let cancelled = false;
    let history = []; // for replay

    // Reset on navigating away
    const cleanup = () => {
      cancelled = true;
      window.removeEventListener("hashchange", cleanup);
    };
    window.addEventListener("hashchange", cleanup);

    function addBubble(kind, text, opts) {
      const as = opts && opts.as;
      const row = document.createElement("div");
      row.className = "bubble-row " + kind + (as ? " " + as : "");
      const avatar = document.createElement("div");
      avatar.className = "bubble-avatar";
      if (kind === "user") avatar.textContent = "•";
      else if (as === "bad") avatar.textContent = "B";
      else avatar.textContent = "";
      // Hide avatar if previous row was the same kind+as (chat-grouping)
      const prev = messagesEl.lastElementChild;
      const sameGroup =
        prev &&
        prev.classList.contains("bubble-row") &&
        prev.classList.contains(kind) &&
        (as ? prev.classList.contains(as) : !prev.classList.contains("bad")) &&
        kind !== "system";
      if (sameGroup) {
        prev.querySelector(".bubble-avatar")?.classList.add("hidden");
      }
      const b = document.createElement("div");
      b.className = "bubble";
      if (opts && opts.html) b.innerHTML = text;
      else b.innerHTML = formatText(text);
      row.appendChild(avatar);
      row.appendChild(b);
      messagesEl.appendChild(row);
      scrollToEnd();
      return b;
    }

    function addTyping(as) {
      const row = document.createElement("div");
      row.className = "bubble-row bot" + (as ? " " + as : "");
      const avatar = document.createElement("div");
      avatar.className = "bubble-avatar";
      if (as === "bad") avatar.textContent = "B";
      else avatar.textContent = "";
      const prev = messagesEl.lastElementChild;
      const sameGroup =
        prev &&
        prev.classList.contains("bubble-row") &&
        prev.classList.contains("bot") &&
        (as ? prev.classList.contains(as) : !prev.classList.contains("bad"));
      if (sameGroup) {
        prev.querySelector(".bubble-avatar")?.classList.add("hidden");
        avatar.classList.add("hidden");
      }
      const b = document.createElement("div");
      b.className = "bubble typing";
      b.innerHTML = "<span></span><span></span><span></span>";
      row.appendChild(avatar);
      row.appendChild(b);
      messagesEl.appendChild(row);
      scrollToEnd();
      return row;
    }

    function addSystemBubble(text) {
      const row = document.createElement("div");
      row.className = "bubble-row system";
      const b = document.createElement("div");
      b.className = "bubble";
      b.innerHTML = formatText(text);
      row.appendChild(b);
      messagesEl.appendChild(row);
      scrollToEnd();
    }

    function playChime() {
      try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        const ctx = new Ctx();
        const t0 = ctx.currentTime;
        // Two-note ding (E5 then G5), soft sine, ~0.5s total
        [659.25, 783.99].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.value = freq;
          osc.connect(gain).connect(ctx.destination);
          const start = t0 + i * 0.09;
          gain.gain.setValueAtTime(0, start);
          gain.gain.linearRampToValueAtTime(0.1, start + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.55);
          osc.start(start);
          osc.stop(start + 0.6);
        });
      } catch (_) {
        /* audio not available — silent fallback */
      }
    }

    function scrollToEnd() {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function sleep(ms) {
      return new Promise((res) => setTimeout(res, ms));
    }

    function typingTime(text) {
      // Pacing tuned for comfortable reading, slightly brisker than before.
      // Roughly: 45ms per character, clamped to a 500ms..1900ms window.
      const t = Math.min(1900, Math.max(500, Math.round(text.length * 45)));
      return t;
    }

    function readingTime(text) {
      // Pause AFTER a message lands, so the reader can absorb it before
      // the typing indicator for the next one appears.
      // ~22ms per char, clamped to a 350ms..1100ms window.
      return Math.min(1100, Math.max(350, Math.round(text.length * 22)));
    }

    async function showBotLine(text, as) {
      if (cancelled) return;
      const typing = addTyping(as);
      await sleep(typingTime(text));
      if (cancelled) return;
      typing.remove();
      addBubble("bot", text, { as });
      await sleep(readingTime(text));
    }

    // A bot entry can be a plain { en, fr } object or { en, fr, as: "bad" }.
    function normalizeBot(item) {
      if (!item) return null;
      const text = pick(item);
      if (!text) return null;
      return { text, as: item.as || null };
    }

    function clearChoices() {
      choicesEl.innerHTML = "";
    }

    function renderChoices(choices) {
      clearChoices();
      choices.forEach((c, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "choice" + (i === 0 ? " primary" : "");
        btn.textContent = pick(c.label);
        btn.addEventListener(
          "click",
          () => {
            clearChoices();
            addBubble("user", pick(c.label));
            // Optional bot reaction inline (before going to next node)
            const reaction = c.reaction ? pick(c.reaction) : null;
            history.push({ type: "user", text: pick(c.label) });
            if (reaction) {
              showBotLine(reaction).then(() => walkTo(c.next));
            } else {
              walkTo(c.next);
            }
          },
          { once: true }
        );
        choicesEl.appendChild(btn);
      });
    }

    async function walkTo(nodeId) {
      if (cancelled) return;
      if (!nodeId) {
        finishCourse();
        return;
      }
      const node = course.nodes[nodeId];
      if (!node) {
        console.warn("Missing node", nodeId);
        finishCourse();
        return;
      }
      // Persist current node
      state.progress[course.id] = state.progress[course.id] || {};
      state.progress[course.id].currentNode = nodeId;
      saveState();

      const lines = (node.bot || []).map(normalizeBot).filter(Boolean);
      for (const line of lines) {
        await showBotLine(line.text, line.as);
        if (cancelled) return;
      }
      if (node.end) {
        finishCourse();
        return;
      }
      if (node.next) {
        // Auto-continue
        walkTo(node.next);
        return;
      }
      if (node.choices && node.choices.length) {
        renderChoices(node.choices);
        return;
      }
      // No outgoing edges → finish
      finishCourse();
    }

    function finishCourse() {
      clearChoices();
      const already = !!(state.progress[course.id] && state.progress[course.id].completed);
      state.progress[course.id] = { completed: true, currentNode: null };
      if (!already) {
        state.karma = (state.karma || 0) + (course.karma || 0);
      }
      saveState();
      document.getElementById("karma-count").textContent = state.karma;

      const banner = document.createElement("div");
      banner.className = "end-banner";
      banner.innerHTML = `
        <h2>${escapeHtml(t("end.title"))}</h2>
        <p>${escapeHtml(t("end.karma", { n: already ? 0 : course.karma || 0 }))}</p>
      `;
      messagesEl.appendChild(banner);
      scrollToEnd();

      const back = document.createElement("button");
      back.type = "button";
      back.className = "choice primary";
      back.textContent = t("end.back");
      back.addEventListener("click", () => {
        location.hash = "#/";
      });
      const replay = document.createElement("button");
      replay.type = "button";
      replay.className = "choice";
      replay.textContent = t("course.replay");
      replay.addEventListener("click", () => {
        messagesEl.innerHTML = "";
        walkTo(course.startNode || "start");
      });
      choicesEl.appendChild(back);
      choicesEl.appendChild(replay);
    }

    // Summon ritual: a tiny chime + an italic "Janet appears" system line,
    // before the first real bubble lands. Replays don't re-summon — only the
    // first walk in this view does.
    playChime();
    addSystemBubble(t("chat.summon"));

    // Kick off
    walkTo(course.startNode || "start");
  }

  // ---------- Utilities ----------
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Lightweight inline formatter:
  // - `code` → <code>
  // - *bold* (slack-style) → <strong>
  // - _italic_ → <em>
  // - [text](url) → <a>
  // - \n → preserved via white-space: pre-wrap
  function formatText(raw) {
    let s = escapeHtml(raw);
    // Links first so their content isn't re-formatted as bold/italic accidentally
    s = s.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, function (_, label, url) {
      return '<a href="' + url + '" target="_blank" rel="noopener">' + label + "</a>";
    });
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/(^|[\s(])\*([^*\n]+)\*(?=$|[\s.,!?:;)])/g, "$1<strong>$2</strong>");
    s = s.replace(/(^|[\s(])_([^_\n]+)_(?=$|[\s.,!?:;)])/g, "$1<em>$2</em>");
    return s;
  }

  // ---------- Topbar wiring ----------
  document.getElementById("lang-select").addEventListener("change", (e) => {
    lang = e.target.value;
    localStorage.setItem(LANG_KEY, lang);
    render();
  });
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm(t("reset.confirm"))) {
      state = { progress: {}, karma: 0 };
      saveState();
      location.hash = "#/";
      render();
    }
  });

  // ---------- Boot ----------
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
