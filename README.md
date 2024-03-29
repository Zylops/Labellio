<p align="center">
<a href="https://labellio.vercel.app"><img style="width: 80%;" src="https://github.com/Zylops/Labellio/blob/master/static/labellio_white.png"/></a>
</p>

<p align="center">
    <img src="https://img.shields.io/github/license/Zylops/Labellio">
	<a href="https://gitHub.com/Zylops/Labellio/graphs/commit-activity"><img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" /></a>
	<a href="https://gitHub.com/Zylops/Labellio/issues/"><img alt="GitHub Issues" src="https://img.shields.io/github/issues/Zylops/Labellio.svg" /></a>
    <img src="https://img.shields.io/badge/framework-svelte-orange">
	<a href="https://github.com/Zylops/Labellio"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Zylops/Labellio?style=social" /></a>
</p>

<p align="center">
Labellio is a web application developed with SvelteKit, designed to simplify the lives of travelers. It allows users to effortlessly create custom labels that can be attached to luggage boxes and other travel essentials. Recently, the project has been rewritten from Svelte to SvelteKit for enhanced performance and maintainability, and available at <a href="https://labellio.vercel.app">labellio.vercel.app</a>
</p>

---

## Changelog for v2.0.0 📜
- UI is now less overwhelming and neater.
- There is now autocomplete for departure and arrival airport codes, and you can search for them by name.
- Multiple travelers are now supported.
- You can now save traveler information to localstorage, and reuse passengers every session. (makes it more efficient for users who travel often)
- QR codes on labels actually do something now, as every label's QR code redirects to an endpoint to display label information with a way to contact the label owner.
- Label layout is now rendered fully in HTML, no more rasterized canvas elements, easily rendered and adaptable to any print paper size.
- There's a functional progress bar now, which can be used to go back and edit your label from any stage of creation.
- Print dialogue can now be prompted from UI.
- Each added traveler can now have a theme for their labels, for easier identification if printed in color.
- Now available at [`https://labellio.vercel.app`](labellio.vercel.app).
---

## TODO ✅
- [ ] Label reporting and status
- [ ] Local information from both airports(?)
- [ ] Adding transit routes
- [ ] Dark and Light Mode Toggle
- [ ] Add more code comments for documentation

---

## Run Locally 🗄
As of the release of v2, labellio has been rewritten in Sveltekit, ~~although currently it can be fully functional on svelte~~, I have migrated it to sveltekit so as to make room for further improvement. Here's how you can try it out locally:
```bash
git clone https://github.com/Zylops/Labellio.git labellio
cd labellio
npm install
npm run start
 ```
 
 It should now be available at [`localhost:5173`](localhost:5173).

---

## Contributing 🤝
Contributions are always welcome! Just send a Pull Request.

Create a pull request and there's a 99% percent chance ill approve it!

---

## Commit Emoji Key ☺
Check out [CoMigo's gitmoji](https://comigo.gitlab.io/comigoji/#vanilla)!

`> Switched to vanilla comigoji!`

| Emoji | Key                 | Description                                                         |
|:-----:|:-------------------:|:-------------------------------------------------------------------:
| 🔧    | General Improvement | For tweaks, tiny changes, performance improvements, etc.            |
| 🐛    | Bug Fix             | When you squash them pesky bugs.                                    |
| 🔥    | Removal             | When you delete files, dependencies, unneeded features or dead code |
| 🚧    | Work in Progress    | For early non-functional prototypes and drafts                      |
| 💼    | Assets              | For adding data files, images, icons and such                       |
| 📚    | Paperwork           | For docs, licenses, readmes, and all other important stuff          |
| 🌈    | New Feature         | When you add something truly new                                    |
| 🚀    | Release             | When you deploy, tag or release your projects                       |
| 🎢    | Rollback            | When shit happens                                                   |
