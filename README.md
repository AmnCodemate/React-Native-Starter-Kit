## Features
 - Redux with Redux Thunk
 - React-Navigation
 - Redux Dev tools integrated in "Debug JS Remotely"
 - Network call using Axios

## Getting Started

1. Check the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)
1. Clone this project
1. Run `npm install` from root directory
1. Run `react-native start` for the packager running
1. Start your platform `react-native run-android` or  `react-native run-ios` (or which fancy output you want to).


## Technologies


| Tech | Summary |
| --- | --- |
| [Axios](https://www.npmjs.com/package/react-native-axios) | Network request helper. |
| [React-Navigation](https://reactnavigation.org) | Learn once, navigate anywhere  |
| [Redux](https://github.com/reactjs/react-redux) | Redux is a predictable state container for JavaScript apps. |
| [ImmutableJS](https://facebook.github.io/immutable-js/) | Immutable persistent data collections for Javascript which increase efficiency and simplicity. |
| [Styled Components](https://www.styled-components.com/) | Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. |
| [Babel](https://babeljs.io/) | Use next generation JavaScript, today. |
| [EsLint](https://eslint.org/) | We're using [Airbnb's](https://github.com/airbnb/javascript) JS/React Style Guide with ESLint linting. |
| [React-Native SVG](https://github.com/react-native-community/react-native-svg) | It provides a SVG interface to react native on both iOS and Android. |
| [React-Native SVG Icon](https://github.com/stowball/react-native-svg-icon) | A simple, but flexible SVG icon component for React Native. |
| [Redux Persist](https://github.com/rt2zz/redux-persist) | Data Caching / Offline. |

## Understanding the File Structure

- `/android` - The native Android stuff
- `/ios` - The native iOS stuff
- `/src` - Contains the React-Native Stuff
  - `/actions` - dispatched actions triggered by the UI for state manipulations in redux
  - `/api` - Contain apis   
  - `/assets` - Images, fonts, colors...
  - `/components` - Dumb-components
  - `/configs` - Application configs like api, ...
  - `/constants` - Languages, keywords, wordings...
  - `/reducers` - Returning states from Redux
  - `/routers` - React-Navigation screens flow
  - `/screen` - Containers that are screens are here
  - `/stores` - Where your state happens
    - `combineReducers` - Combining all your reducers from every container
    - `configureStore` - applying your MiddleWares to the state
  - `/utils` - Utility folder
  - `root.js` - Main app is here

##Installing indiviual dependencies
Redux and Thunk Middleware <br />
  $ npm install --save redux <br />
  $ npm install --save react-redux <br />
  $ npm install --save redux-thunk <br />

Redux Devtools [Use with Debug Js Remotely] <br />
  $ npm install --save-dev remote-redux-devtools <br />
  $ npm install --save-dev remotedev-rn-debugger <br />

  Add command to your project's package.json:
  ```
  "scripts": {
  "postinstall": "remotedev-debugger [options]"
  }
  ```

Redux Persist <br />
  $ npm install --save redux-persist <br />

Axios <br />
  $ npm install --save axios <br />

React-Navigation <br />
  $ npm install --save react-navigation <br />

React-Native SVG icon helper <br />
  $ npm install react-native-svg --save <br />
  $ react-native link react-native-svg <br />

React-Native SVG Icon component creator <br />
  $ npm i react-native-svg-icon --save <br />

## React-Native important client command
Clear cache <br />
  $ npm cache clean --force & npm install & npm start -- --reset-cache <br />

## Using Git with React-Native
  $ cd { projec_name } <br />
  $ git init <br />
  $ git add . <br />
  $ git commit -m "initial commit"  <br />

  Create a repository in Github and copy the repo URL <br />
  $ git remote add origin { repo_url } <br />
  $ git push -u origin master <br />