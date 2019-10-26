# MoviePoster

This app was developed to query the already existing ***OMDB*** (*The Open Movie Database*) ***API***, which is a *RESTful web service* to obtain movie information. It was try out the functional component approach of the **React framework** and to obtain some more knowledge on *React Hooks* and the *Context API*.

## Setup

To use this project, you firstly need to generate an API key on the [OMDB API's website]([https://omdbapi.com/apikey.aspx](https://omdbapi.com/apikey.aspx)).

When you obtain a new API key, change the environment variable, namely:

    REACT_APP_OMDB_API_KEY=INSERT_API_KEY_HERE
Change the *INSERT_API_KEY_HERE* to your newly obtained API key.

> **NOTE:** Do not forget to rename the ***.env.example*** to ***.env.local*** in order to be able to access the API key through the React.app

## Start the app

Firstly run the `yarn install` command (if you are using **yarn**), to resolve the needed dependencies, or if you are using **npm**, the `npm install`.

To start the app, simply run `yarn start` (if you are using **yarn**), or `npm start` (if you are using **npm**). This starts a local web development server, which enables hot-reload and a lot of useful features.

## Building the app

Builds the app for production to the `build` folder.<br />
It correctly bundles React in **production mode** and *optimizes the build for the best performance*.

The build is minified and the filenames include the hashes.<br />
**Your app is ready to be deployed!**

## License

This code is published under the MIT License.
