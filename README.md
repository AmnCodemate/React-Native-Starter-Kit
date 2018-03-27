#Features
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
| [EsLint](https://eslint.org/) / Code Style Guide | We're using [Airbnb's](https://github.com/airbnb/javascript) JS/React Style Guide with ESLint linting. |
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

#Installing indiviual dependencies
## Redux and Thunk Middleware
  $ npm install --save redux
  $ npm install --save react-redux
  $ npm install --save redux-thunk

## Redux Devtools [Use with Debug Js Remotely]
  $ npm install --save-dev remote-redux-devtools
  $ npm install --save-dev remotedev-rn-debugger

  Add command to your project's package.json:
  ```
  "scripts": {
  "postinstall": "remotedev-debugger [options]"
  }
  ```

## Redux Persist
  $ npm install --save redux-persist

## Axios
  $ npm install --save axios  

## React-Navigation
  $ npm install --save react-navigation

## React-Native SVG icon helper
  $ npm install react-native-svg --save
  $ react-native link react-native-svg   

## React-Native SVG Icon component creator
  $ npm i react-native-svg-icon --save

## Reactive   
# Clear cache
  $ npm cache clean --force & npm install & npm start -- --reset-cache    

