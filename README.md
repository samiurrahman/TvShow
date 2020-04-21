# Tv Show Application
This is open TV shows application that allows users to view list of all TV shows and their all details. this application usage API rom "tvmaz" http://www.tvmaze.com/. 

## Installation of vue/cli
This application required Vue cli please install latest version. 

```
npm install -g @vue/cli
```
Note: Please check Vue CLI is successfully installed. by running command: vue --v
if it prints version. you successfully installed Vue Cli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```
### Project Guidelines
* This application using camelCase naming conventions for Method Naming, variable, object declaration,
Example : getResults() , tvShowName etc..

* This application usage samll sase for Folder Naming Convention, Example : views, components.
and for files Pascal case for files exaple: DashBoard.vue, Details.vue

* Vuex Standards: 
    * mutations: ALL_CAPS example: ALL_TV_SHOWS
    * actions: camelCase example: getTvShowDetailsById 
    * state: camelCase ex: tvShow

### Project dependencies
* Vue Material Design Component Framework — [Vuetify.js](https://vuetifyjs.com/en/).
* Axios (Promise based HTTP client for the browser) — [Axios](https://www.npmjs.com/package/axios/).
* Vuex is a state management pattern + library for Vue.js — [Vuex ](https://vuex.vuejs.org/).
* Jest for unit testing — [jest](https://jestjs.io/).
* prettier for single quote & without semi colon
* It usage "rem" as CSS unit, which is related to root font size. we have set 10px as root font size.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
