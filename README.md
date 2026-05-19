# Janet

A small, static website where **Janet** walks you through the basics of online
security in short, branching chats. No backend, no tracking, no build step.
Pure HTML, CSS and vanilla JavaScript.

Janet is a fan tribute to the information-assistant character from the NBC
sitcom _The Good Place_ — she is cheerful, gently omniscient, and very, very
patient with humans. See [Who is Janet?](#who-is-janet) below.

## What's in the box

- **17 bilingual courses** (English & French): passwords, two-factor auth,
  phishing, spear-phishing, impersonation scams (work + family), malware, data
  breaches, personal data, smishing, ransomware, digital footprint, LinkedIn,
  tailgating, mobile phones, vacations, software updates, plus a short
  ground-rules intro.
- **Branching chat engine**: each lesson is a graph of bubbles and choices.
  Right answers, wrong answers, and a karma counter.
- **Persists locally**: progress, completed-course checkmarks, karma points and
  the chosen language all live in `localStorage`. There is no server.
- **Language switch** in the top bar (EN ⇄ FR).
- **GitHub Pages-ready**: drop the folder on Pages and you're done.

## Run it locally

```bash
python3 -m http.server 8765
# then open http://localhost:8765/
```

Any static-file server works. If you double-click `index.html` directly,
the `file://` origin may block some browsers from loading the JS modules —
running a real server is safest.

## Deploy on GitHub Pages

1. Push this repo to GitHub.
2. Repo **Settings → Pages**.
3. Source: **Deploy from branch** → `main` / `/ (root)`.
4. Visit `https://<your-username>.github.io/<repo-name>/`.

No build, no CI, no config file needed.

## Project layout

```
.
├── index.html                  # SPA entry + templates
├── styles.css                  # All styling
├── janet.png                   # Avatar
├── js/
│   ├── app.js                  # Router, chat engine, localStorage
│   ├── i18n.js                 # UI strings (EN/FR)
│   └── courses/
│       ├── index.js            # Course order
│       └── <course_id>.js      # One file per course
```

Each course file self-registers into `window.JANET_COURSES`. The order in
`js/courses/index.js` controls how courses appear on the home grid.

## Add or edit a course

A course is a small graph. Open any file in `js/courses/` for a working
example, or use this template:

```js
window.JANET_COURSES = window.JANET_COURSES || {};
window.JANET_COURSES.my_course = {
  id: "my_course",
  emoji: "🌟",
  duration: 4,                  // shown on the card, in minutes
  karma: 40,                    // awarded once on first completion
  title:       { en: "My course",          fr: "Mon cours" },
  description: { en: "One sentence hook.", fr: "Une phrase d'accroche." },
  startNode: "start",
  nodes: {
    start: {
      bot: [
        { en: "Hi there!",         fr: "Salut !" },
        { en: "Ready for this?",   fr: "Prêt·e ?" }
      ],
      choices: [
        { label: { en: "Yes",  fr: "Oui"  }, next: "yes_branch" },
        { label: { en: "Nope", fr: "Non" }, next: "no_branch"  }
      ]
    },
    yes_branch: {
      bot: [{ en: "Excellent.", fr: "Parfait." }],
      next: "outro"                            // auto-advance, no choice shown
    },
    no_branch: {
      bot: [{ en: "Janet respects that.", fr: "Janet respecte ça." }],
      next: "outro"
    },
    outro: {
      bot: [{ en: "All done!", fr: "C'est fini !" }],
      end: true                                // ends the course
    }
  }
};
```

Then list its id in `js/courses/index.js` and add a `<script>` tag for the
file in `index.html`. That's it.

### Node fields

| Field | Type | Meaning |
| --- | --- | --- |
| `bot` | `[{en, fr}]` | Bubbles Janet says, in order |
| `choices` | `[{label, next, reaction?}]` | User reply buttons. `reaction` is an optional inline bot line shown after the user picks. |
| `next` | `string` | Auto-advance to this node when there are no choices |
| `end` | `bool` | Marks the final node and awards karma |

### Inline formatting in bubbles

- `*bold*`, `_italic_`, `` `code` ``
- `[label](https://link)` for outbound links

## What's stored locally

Two `localStorage` keys, both safe to inspect or delete:

- `janet.v1` — `{ progress: { courseId: { completed, currentNode } }, karma }`
- `janet.lang` — `"en"` or `"fr"`

The reset button in the top bar (⟲) clears both after confirmation.

## Who is Janet?

[Janet](https://en.wikipedia.org/wiki/Janet_(The_Good_Place)) is a character
from the NBC sitcom _The Good Place_, created by Michael Schur and broadcast
between 2016 and 2020. She is played by D'Arcy Carden. In the show she is an
artificial being — a cheerful, all-knowing assistant who helps the residents
of a peculiar afterlife neighborhood. The cheerful-and-informed tone is
borrowed here because security advice goes down easier when it's delivered
with kindness.

The about page inside the app (`#/about`) carries the same attribution for
visitors.

## License & attribution

This project is an **unofficial fan tribute**. _The Good Place_, its
characters, dialogue and trademarks belong to their respective rights
holders. The code in this repository is yours to fork, copy, and adapt —
consider it MIT-licensed unless a `LICENSE` file says otherwise.

The course content is original writing, inspired in spirit by widely-used
security curricula but not copied from any specific source.
