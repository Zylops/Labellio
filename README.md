<p align="center">
<a href="https://labellio.netlify.app"><img style="width: 80%;" src="https://svgshare.com/i/bdH.svg"/></a>
</p>

<p align="center">
    <img src="https://img.shields.io/github/license/Zylops/Labellio">
	<a href="https://GitHub.com/Zylops/Labellio/graphs/commit-activity"><img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" /></a>
	<a href="https://GitHub.com/Zylops/Labellio/issues/"><img alt="GitHub Issues" src="https://img.shields.io/github/issues/Zylops/Labellio.svg" /></a>
    <img src="https://img.shields.io/badge/framework-svelte-orange">
	<a href="https://github.com/Zylops/Labellio"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Zylops/Labellio?style=social" /></a>
</p>

A web app that helps you easily create labels for your baggage while travelling through an airport.

- Bag tags, also known as baggage tags, baggage checks or luggage tickets, have traditionally been used by bus, train, and airline carriers to identify checked luggage to its final destination.

- This is useful to aid the passenger in identifying their bag among similar bags at the destination baggage carousel;

- Can be used as proof—still requested at a few airports—that the passenger is not removing someone else's bag from the baggage reclaim hall;

- As a means for the passenger and carrier to identify and trace a specific bag that has gone astray and was not delivered at the destination.

---

## TODO ✅
- [ ] Hosting 
- [X] QR Code leads to actual functional route
- [X] Valid QR Codes generated
- [X] Responsiveness
- [ ] Label reporting and status
- [X] Adding multiple passengers
- [ ] Adding transit routes
- [ ] Dark and Light Mode Toggle
- [X] Actually implementing label generation

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
