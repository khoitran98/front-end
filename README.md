# Project Description

## Setting Up

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## How to use:
* The user needs to enter a 10-digit phone number to the first input field. After hitting submit, a random 6-digit access code will be sent to the user's phone number (assumming that the the phone number is accurate).
* The user needs to enter the sent access code and submit again to verify the phone number.
* If the access code matches the one generated in the database, the process finishes successfully and the user can choose to reset from the beginning.
* If the code does not match, the user can choose to either keep trying with different access code untill success or refresh the page to enter a new phone number.

## Technology Used:
* Front-End: React.
* Back-End: Node, Express, Twilio, Firebase, Heroku.

The backend server is live and running on https://pacific-falls-13049.herokuapp.com.

