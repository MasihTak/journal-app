# journal-app

A simple yet awesome journal app written in Vue3 and Vuex with authentication functionality!

## Project setup

You need to create a `.env` file and add your own secret keys such as the API key to make sure the app working completely

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Requirements

*Structure*
- [ ] Backend: Design & create your backend application server
    - [ ] Set up your backend boilerplate (e.g. database URI)
    - [ ] Create the note schema
    - [ ] Create the backend routes (e.g. GET, POST)
- [x] Frontend: Identify and create the main components of your frontend application
  (e.g. Header, Note input area, list of previously entered notes, dialog or area
  to update previously entered notes)

*Style*
- [x] You may use any style you choose. However, it should be consistent (e.g.
  font, font size, color scheme, layout, etc.).

*Functionality*
- Backend: Implement user authentication
    - [x] Add a signup route to allow users to create an app account (e.g. user
      name & password) for themselves
    - [x] Add a login route to allow users who have completed the signup process
      to login to the application
- Frontend: Implement the necessary functionality for each component. Users
  must be able to:
    - [ ] signup to create an app-specific account
    - [ ] login to use the app
    - [ ] post a new notes to the list of previously entered notes
    - [ ] modify previously added notes
    - [x] delete previously entered notes
- Frontend: Miscellaneous functionality
    - [ ] Use the API exposed by the app Backend to deliver functionality to
      your users
    - [x] Frontend: Application secrets and user credentials should not be stored or
      left exposed in the browser

*Other*
- [x] Your repo needs to have a robust `README.md` (See [Keys to a Well-Written Readme](https://medium.com/chingu/keys-to-a-well-written-readme-55c53d34fe6d))
- [ ] Before submitting make sure that there are no errors in the developer console
- Anticipate and handle any edge cases
    - [ ] Does entering random data, such as a mix of alphbetic, numeric, and
      special characters in the search input result in an error?
    - [x] What is displayed if the search location is not found?
- [x] The app should be responsive across multiple devices (e.g. phone, tablet,
  laptop, and desktop computers)
