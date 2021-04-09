# Global Maintainers Summit

## Add new maintainers or projects to current maintainers

### Step 1

Go to `content/home.json` file.

To add a new maintainer just add to the `maintainers` array a new `maintainer` object providing the speaker name, their GitHub profile handler and a list with the projects they maintain.

To add a new project, find the maintainer in the array and just add a new `project` object to the projects array, providing the project name and GitHub repo URL for each project.

```json
{
  "speaker": "Siân Griffin",
  "handler": "sgrif",
  "projects": [
    {
      "name": "Diesel",
      "url": "https://github.com/diesel-rs/diesel"
    }
  ]
}
```

### Step 2

For each new **project** added, there should be the correspondent logo in `assets/img/badges` in order to be able to render the project in the floating cards.

The logo filename must be as follows:

- One file with normal quality named `logo_[project-name].png`
- Another bigger file with better quality named `logo_[project-name]@2x.png`

E.g. for the previous json, we should add the two following files:

- `logo_diesel.png`
- `logo_diesel@2x.png`

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
