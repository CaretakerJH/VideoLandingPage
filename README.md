Video-Landing-Page  - Created by Julian Herr


SPECIFIC INSTRUCTIONS:

1. Install Node.js
2. Install NPM via CMD Terminal [command: npm install -g npm]
8. Using the command line, run these three commands in order to get the dependancies organized:
[
[npm install axios],
[npm install --save react-router-dom],
[npm install --save react-hls-player --legacy-peer-deps]
]

3. Open visual studio code
4. Open VideoLandingPage-main in the editor
5. Open a terminal, type [cd VideoLandingPage-main]
6. Use the command line, type [npm start]
7. This should automatically open up http://localhost:3000/ in your web browser - if not, manually open the URL up

INSTRUCTIONS TO NAVIGATE APP:

1. You are able to scroll through the showreels with (SHIFT + Scroll)
2. When clicking on a showreel item and it redirects you to the browser player - once completed watching please press F5/Refresh. This would be changed via a button etc.

_____________________________________________________________________________________________________________________

In order to expand the system to millions of users, I would firstly add an authentication system which would allow to have userspecific instances of the App,
Adding this would in turn require us to add security measures to prevent data loss/exploitation - I would also streamline the efficiency of the data extraction from the end points in order to reduce resources required to do so - whether this be by making better functions to call the information.
And making it more modular to allow for one/two function to do the bread and butter work and just input variables such as data links etc. This will reduce repeated code.
Logging on each page would be necessary to be able to see more effectively where and why the code is breaking down at specific points of interest.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.