# Twournal

Welcome! The below information is regarding Twournal, it's purpose, functionality, and file structure to help navigate through the application.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Purpose

Twournal's purpose and mission is to alleviate or expand on the Twitter platform detailed thoughts *not* in a thread. This application will allow you to exapand into a deeper thought process and have a logical response in 1,000 characters. Currently in V1, Twitter's API is not connected and Twournal acts as a self filled jounraling application to expand.

## Functionality

Upon initial start of the app it will start with a login/register screen prompting user input into the form. Once logged in or registered that user is assigned a token to gain access to the main feed.

Once logged in, you'll see a side bar with the application title, an expand button, an add tweet button, and finally a logout button.

The expand button once clicked renders a modal with a form to input your Twournal entry with various fields with the Post button at the bottom. Once the fields are filled out and Post is clicked, that specific Twournal entry will render to the page on refresh.

The Add a Tweet button functions very similarly and renders the said tweet to the mian Twournal Feed.

The logout button once clicked clears the token, rendering you back to the Auth page.

On the Feed itself the Twournal and Tweet entries render on refresh once submitted and display *all* Twournals and Tweets that user entered.

On the individual Twournal's there's an edit button (functionality still in progress) and a delete button. Once the delete button is clicked it will deleted all created Twounral's for that user. The tweet Delete button functions the same.

## Navigating File Structure

- src 
    - components
        - Auth
            - Auth.jsx - parent component for below components
            - Register.jsx - form that submits and posts user to db and assigns token
            - Login.jsx - form that logs in a user by connecting to the db and assigns token
        - MainPage
            - Feed
                - Tweets
                    - Tweets.jsx - map over array of Tweets in the db
                - Twournals
                    - Twournals.jsx - map over array of Twournals in the db
                - Feed.jsx - where Tweets/Twournals render and holds fetch Fx
            - Sidebar
                - Expand
                    - Expand.jsx - modal holding a form that post's new Twournal to db and Feed
                - Logout
                    - Logout.jsx - passes a Fx to clear token
                - Tweet
                    - Tweet.jsx - modal holding a form that post's new Tweet to db and Feed
                - Sidebar.jsx - all child components render
            - MainPage.jsx - where the Feed and Sidebar render
    - helpers
        - environment.js - for heroku deployment helper js file for proper deployment routing
    - App.js - main application file that utilizes react router rendering componenets
    - index.js - consolidation of render elements and App.js

## Deployed Heroku link

Here is [Twournal](https://ketch-twournal-client.herokuapp.com/)

## Future Implementation

V2 has some exciting features coming including the actual Twitter API integration and connection of a Twitter account. Once that connection has been made the user input will only be the said Twournal and the Twournal will tie to the Tweet in the DOM rendering an actuall Feed of other User's Twournals tied to tweets directly from the source (Twitter).