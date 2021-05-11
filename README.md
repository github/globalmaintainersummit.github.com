# Global Maintainers Summit

## Add new speaker or projects to current speakers

### Step 1 - Content

1. Go to `content/{year}/shared/maintainers` folder. For example, for year 2021 the full path would be `content/2021/shared/maintainers`.
2. Create a new json file named with the github handler of the maintainer, all in lower case, e.g. for VerteDinde it would be `vertedinde.json`.
3. Copy the content of the `maintainer-template.json` file (is located in the root of the project) and paste it in the file created in the previous step.

All the json properties to fill up in the template are explained below:

- **`handler`**: GitHub handler, e.g. for https://github.com/brandonroberts profile it would be brandonroberts.
- **`featured`**: **THIS CAN ONLY BE EDITED BY THE ORGANIZERS.** Boolean that determines wether the person is displayed in the Home page or not.
- **`profile`**: All the info related to the speaker.
  - **`name`**: Maintainer full name.
  - **`bio`**: A short bio about the maintainer. It should be written with html format using `<p>` for paragraphs and `<a href=\"\" target=\"_blank\">` for links.
  - **`links`**: Social media links related to the speaker. These links will be shown in the maintainers page, in their profile details section.
    - **`platform`**: **The only available values are: ["github", "twitter", "gitlab", "readme", "other"].** Except for the "other" platform, all the rest will be shown with the correspondent platform icon.
    - **`url`**: The actual url. It should include `https://`.
  - **`sponsorLink`**: If the maintainer has a sponsor page, a button will be shown in their maintainer page, in the profile details section pointing to the provided link here.
- **`project`**: All the info related to the project.
  - **`name`**: Project name.
  - **`description`**: A short bio about the project. It should be written with html format using `<p>` for paragraphs and `<a href=\"\" target=\"_blank\">` for links.
  - **`badge`**: The name of the project icon with the extension included, following this pattern `logo_projectname.extension`, e.g.: for node.js project it would be `logo_nodejs.png`.
  - **`url`**: The main project URL. This is the link that will be used in /projects page.
  - **`links`**: Social media links related to the project. These links will be shown in the maintainers page, in their project details section.
    - **`platform`**: **The only available values are: ["github", "twitter", "gitlab", "readme", "other"].** Except for the "other" platform, all the rest will be shown with the correspondent platform icon.
    - **`url`**: The actual url. It should include `https://`
  - **`sponsorLink`**: If the project has a sponsor page, a button will be shown in their maintainer page, in the project details section pointing to the provided link here.
- **`talkTitle`**: The title of the talk.

### Step 2 - Assets

1. For the profile picture of the maintainer, go to `assets/img/maintainers` and add a `.jpg` file named with the github handler all in lower case again, just like it was done for the `.json` file. Taking the same example for VerteDinde it would be `vertedinde.jpg`.
2. For the project icon, add the logo to `assets/img/badges` with the same name that you have given in the "badge" property in the json file.

## Update schedule

1. Go to `content/{year}/page/schedule` folder. For example, for year 2021 the full path would be `content/2021/page/schedule`.
2. There is a file for each day. Find the day you want to update.
3. In the day file you can update the topic titles and the speakers that will be taking part of that topic. To update a speaker you just need to add their GitHub handler. **Take into account that the speaker should exist before adding it to the schedule** (See the "Add new speaker or projects to current speakers" section to learn how to do it.)

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
