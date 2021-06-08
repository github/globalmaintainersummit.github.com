# Global Maintainers Summit

## 🗣️ Add new speakers

### Step 1 - 📝 Content

1. Go to `content/{year}/shared/maintainers` folder. For example, for year 2021 the full path would be `content/2021/shared/maintainers`.
2. Create a new json file named with the github handler of the maintainer, all in lower case, e.g. for VerteDinde it would be `vertedinde.json`.
3. Copy the content of the `maintainer-template.json` file (is located in the root of the project) and paste it in the file created in the previous step.

All the json properties to fill up in the template are explained below:

- **`handler`**: [_Compulsory_] GitHub handler, e.g. for `https://github.com/brandonroberts` profile it would be `brandonroberts`.
- **`featured`**: [_Compulsory_] **THIS CAN ONLY BE EDITED BY THE ORGANIZERS.** Boolean that determines wether the person is displayed in the Home page or not.
- **`profile`**: [_Compulsory_] All the info related to the speaker.
  - **`name`**: [_Compulsory_] Maintainer full name.
  - **`bio`**: [_Compulsory_] A short bio about the maintainer. It should be written with html format using `<p>` for paragraphs and `<a href=\"\" target=\"_blank\">` for links.
  - **`links`**: [_Optional_] Social media links related to the speaker. These links will be shown in the maintainers page, in their profile details section.
    - **`platform`**: [_Compulsory if you decide to add a link_] **The only available values are: ["github", "twitter", "gitlab", "readme", "other"].** Except for the "other" platform, all the rest will be shown with the correspondent platform icon.
    - **`url`**: [_Compulsory if you decide to add a link_] The actual url. It should include `https://`.
  - **`sponsorLink`**: [_Optional_] If the maintainer has a sponsor page, a button will be shown in their maintainer page, in the profile details section pointing to the provided link here.
- **`project`**: [_Compulsory_] All the info related to the project.
  - **`name`**: [_Compulsory_] Project name.
  - **`description`**: [_Compulsory_] A short bio about the project. It should be written with html format using `<p>` for paragraphs and `<a href=\"\" target=\"_blank\">` for links.
  - **`badge`**: [_Optional, but won't render any badge, so it's highly recommended_] The name of the project icon (which will be added later, instructions are explained in _#Step 3_) with the extension included, following this pattern `logo_projectname.extension`, e.g.: for node.js project it would be `logo_nodejs.png`.
  - **`url`**: [_Compulsory_] The main project URL. This is the link that will be used in /projects page.
  - **`links`**: [_Optional_] Social media links related to the project. These links will be shown in the maintainers page, in their project details section.
    - **`platform`**: [_Compulsory if you decide to add a link_] **The only available values are: ["github", "twitter", "gitlab", "readme", "other"].** Except for the "other" platform, all the rest will be shown with the correspondent platform icon.
    - **`url`**: [_Compulsory if you decide to add a link_] The actual url. It should include `https://`
  - **`sponsorLink`**: [_Optional_] If the project has a sponsor page, a button will be shown in their maintainer page, in the project details section pointing to the provided link here.
- **`talkTitle`**: [_Compulsory_] The title of the talk.

### Step 2 - 📸 Profile image

For the **profile pictures** of the maintainer, go to `assets/img/maintainers` and add a `.jpg` image. The file must be named with the github handler all in lower case again, just like it was done for the `.json` file. **The resolution MUST be 376x420.**

Taking the same example for VerteDinde it would be adding `vertedinde.jpg` picture to the folder.

### Step 3 - 🖼️ Project badge

For the project icon, add the logo to `assets/img/badges` with the same name that you have given in the "badge" property in the json file.

**The resolution MUST be 96x96.**

## 📆 Update schedule

1. Go to `content/{year}/page/schedule` folder. For example, for year 2021 the full path would be `content/2021/page/schedule`.
2. There is a file for each day. Find the day you want to update.
3. In the day file you can update the topic titles and the speakers that will be taking part of that topic. To update a speaker you just need to add their GitHub handler. **Take into account that the speaker should exist before adding it to the schedule** (See the "Add new speaker or projects to current speakers" section to learn how to do it.)

All the json properties to modify the schedule json are explained below:

- **`date`**: [_Compulsory_] The date of that day with the following format "Day ⌁ Month Day, Year"
- **`slots`**: [_Compulsory_] An array with all the slots for that day
  - **`time`**: [_Optional_] If you want the time to be displayed on the left, then add this attribute. If you don't want it to be displayed then don't add it. **It MUST be 24h format, i.e.: for 1:30 pm it has to be 13:30**.
  - **`title`**: [_Compulsory_] This is the label that will be rendered in the slot, so it can be either the topic title (if there are talks) or just the name of the slot, e.g. Kickoff, Close, etc.
  - **`hasDiscussions`**: [_Optional_] If present it will render a Discussions row after the talks with a wavy line above the Discussions word. **It can only be present if the talks property is present as well** (as it doesn't make any sense to have a discussions block without a topic slot).
  - **`break`**: [_Optional_] If present it will render the wave with the "Break"word at the beginning. **It can take just two values: `"short"` or `"long"`.** If not present it will render a single wave after the slot.
  - **`talks`**: [_Optional_] If present, then it means that it's a Topic Slot. It's an array with one object (of just one property) for each talk.
    - **`speakerHandler`**: [_Compulsory if you add talks array_] If the value is an empty String, then it will render "PR Incoming!" both for the talk title and speaker fields. This is what we use to connect with the speaker json file to get the rest of the info, so **it's a MUST that the speaker json file must exist before adding the speaker handler to a talk.** Instructions on how to add speaker are explained at the beginning. **It MUST be all lowercase (just like the json filename).**
