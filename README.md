# Global Maintainers Summit

## Add new speaker or projects to current speakers

### Step 1

Go to `content/home.json` file.

To add a new speaker just add to the `maintainers` array a new `maintainer` object providing the speaker name, their GitHub profile handler and a list with the projects they maintain.

To add a new project, find the maintainer in the array and just add a new `project` object to the projects array, providing the project name, GitHub repo URL and the name of the badge file (optional) for each project.

```json
{
  "speaker": "Siân Griffin",
  "handler": "sgrif",
  "projects": [
    {
      "name": "Diesel",
      "url": "https://github.com/diesel-rs/diesel",
      "badge": "logo_diesel.png"
    }
  ]
}
```

### Step 2

If you want to add the badge for a new **project** added project (the logo), then add the file to `assets/img/badges`. If there is no logo provided, then it won't be displayed as a floating card, just in the maintainers list.

If you don't want to provide a logo for the project, then simply leave the badge property empty, e.g.:

```json
{
  "speaker": "Siân Griffin",
  "handler": "sgrif",
  "projects": [
    {
      "name": "Diesel",
      "url": "https://github.com/diesel-rs/diesel",
      "badge": ""
    }
  ]
}
```

---

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
