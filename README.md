# breau-angular-seed

Based on angular-seed project

## includes:
    • PureCSS grid system [PureCSS]: https://purecss.io
    • Include Media for easy responsive layout [include-media]: http://include-media.com/
    • Gulp Tasks including:
        browser-sync [browsersync] https://www.browsersync.io/
        sass-gulp [gulp-sass] https://www.npmjs.com/package/gulp-sass


## Getting Started

To get you started you can simply clone the breau-angular-seed repository and install the dependencies (npm install):

### Prerequisites

You need git to clone the breau-angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code.  The tools help
manage and test the application.

* Get the tools we depend upon via `npm`, the [node package manager][npm].
* Get the angular code via `bower`, a [client-side code package manager][bower].

NPM is preconfigured to automatically run `bower` so simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
breau-angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application and turn on Gulp tasks

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
gulp serve
```
Your browser will automatically launch the site at http://localhost:3000

## Directory Layout

```
app/
  index.html               --> app layout file (the main html template file of the app)
  styles/                  --> Styles folder
    scss/                  --> SASS folder
      app.scss             --> Main project SASS file includes @import statement for include-media
      include-media.scss  --> Prebuilt responsive utility with breakpoints
    css/                   --> compiled CSS folder
      app.css              --> default stylesheet
  views/                   --> all of the source files for the application
    view1.html             --> the partial template
    view2.html             --> the partial template
  scripts/
    app.js                 --> main application module
    routes.js              --> ngRoute for entire app

```
