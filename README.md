# Bavan Bali — Portfolio

A lightweight, responsive portfolio built with plain HTML, CSS, and JavaScript. It has no build step, database, or backend.

## Run locally in VS Code

1. Open this folder in VS Code.
2. Open `index.html` in a browser, or use the **Live Server** extension and choose **Open with Live Server**.
3. The Google Fonts import is optional; the site uses a sans-serif fallback if you are offline.

## Customize

- **Hero artwork:** The hero uses a CSS-drawn monogram and orbital grid, with no photo or external image. Edit the initials and labels in the `.profile-art` block in `index.html` if you want to personalize the artwork further.
- **CV:** The hero button downloads `assets/Bavan-Bali-CV.pdf`. Replace it with an updated PDF when needed. The editable `assets/Bavan-Bali-Resume.txt` is a text draft and is not linked as the download.
- **Projects:** Edit the `projects` array near the top of `script.js`. Add real `github` and `demo` URLs when available; the corresponding buttons remain disabled until a URL is supplied.
- **Skills:** Edit the `skills` array in `script.js` as skills change.
- **Social/contact links:** Replace `your.email@example.com`, the generic GitHub and LinkedIn URLs, and the profile link labels in `index.html` with your real details.
- **Education:** Update the date placeholder in the Education section of `index.html` when you want to publish your dates. Academic scores are intentionally omitted until supplied.
- **Experience, certifications, achievements:** Add only verified items in the placeholder section in `index.html`; no experience or credentials have been invented.
- **Theme and layout:** Change colors, spacing, and breakpoints through the custom properties and media queries in `styles.css`.

## Contact form

The form performs browser-side required-field and format validation only. It does **not** send, email, or store submissions. To receive messages, connect a form provider such as Formspree or Netlify Forms, or add your own server endpoint; update the submit handler in `script.js` and the form markup in `index.html` to match that service. Do not display a sent-success message until delivery is actually configured and confirmed.

## Publish for free

- **GitHub Pages:** Push this folder to a GitHub repository, then in **Settings → Pages** select the deployment branch and root folder. The root `index.html` is the entry point.
- **Netlify:** Import the repository or drag this folder into Netlify's manual deploy area. No build command is needed; use the repository root as the publish directory.
- **Vercel:** Import the repository and choose the static/Other framework preset. Leave the build command empty and set the output directory to `.`.

Before publishing, replace placeholder links and email, review the resume, and verify every project URL. This site is static and does not require secrets or environment variables.
