# Intro to Redux

## Today's 🔥 GIFs

![todays hottest club gif](https://media.giphy.com/media/29LTG8tQpoEkIeOnIO/giphy.gif)

## Objectives

- Understand, at a high level, what the following parts of redux are, and how they fit together:
  - redux store
  - reducers
  - actions & action creators
  - dispatch
  - selectors
- Use thunks to allow for asynchronous workflows to update the redux store

## Why?

This lab is designed to give you an introduction to some of the most commonly used workflows in redux: fetching data from an API and storing it in a redux store, and then using data from the redux store in your application.

As you learn redux and global state management more broadly, you may be thinking: "couldn't I just store all of this information in my components' state?" The answer is mostly yes. You absolutely could. As applications grow in complexity, however, global state management tools like Redux help to keep your application organized, which in turn improves maintainability and scalability. 

Redux is one such global state management tool. It is a library that helps manage the state of your application as it grows in complexity. It aims to manage updates to your application by adhering to 3 principles:
- having one single source of truth (the redux “store”)
- having your state be read-only
- only allowing state to be modified via pure functions (redux “reducers”).

Its aim is to make state mutations predictable to allow developers the ability to reason more clearly about the various interactions within an application.

# Key Vocab

- `store` - global readonly state. Due to state's readonly nature, reducers are the only way you should be mutating state.
- `reducers` - pure functions whose responsibility is to process actions and manipulate the store's state.
- `actions` - following the Flux Standard Action (FSA)[https://github.com/redux-utilities/flux-standard-action] pattern, actions are **objects** that communicate to redux on what is happening. Reducers will interpret these action objects and decide what should be done.
- `action creators` - are the functions to create the those actions.
- `dispatch` - the function which is required to communicate with the redux store. This is really the only way you should be sending actions to the store.
- `selectors` - getter functions to retrieve specific data from redux. This is the primary way you should be retrieving data from the store. If you need to transform or compute the data, you can leverage memoization of selectors to reduce selectors with heavy operations.
- `thunk` - is a middleware which allows your action creators to return **functions** rather than **objects**. The middleware will recognize that what is being dispatched is an function rather than an object, it will execute and await that function then pass along the return value to the reducer (or next middleware).

## Directions

This lab has been tested in VSCode. You're welcome to run it elsewhere if you like, but the instructions are written with the assumption that you're operating on your code in the VSCode IDE.

## Getting Started:

1. Clone this repository down to your local environment and navigate to the root directory. Run `npm install` and then `npm start` to ensure you can preview your app.
2. We suggest download the redux devtools browser extension to ease debugging and viewing the store. [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) || [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools)
3. Head to the [Giphy Developer Site](https://developers.giphy.com) and sign up for an account. Then head to the [dashboard](https://developers.giphy.com/dashboard/) and press the **+** icon in the **Your Apps** section to generate a new API key. When selecting a type of key, go ahead and choose API and continue creating your API key. You'll know you're ready to start the lab when your dashboard looks like:

   ![api generated screenshot](api_key_generated.jpg)

4. Take some time to explore the app as it currently exists. Notice that it currently renders 5 gifs, which are coming from `src/data/sample_data.ts`. For this lab, we'll work to move our data fetching and storage from the data file to a redux store.

## Guidance:

1. **Add your first action, reducer, selector** - Our app currently holds an active state for our cards. However as our application grows, deeply nested components will need to possible use this state. This would be a good candidate to think about lifting this local state into global state since it will pertain to the entire application. Refactor the `App.tsx` component to no longer have local state for the active card and add a key in the gifs reducer to hold the active id value. Leverage actions to update that value and selectors to grab that value.

2. **Add Sample Data to Redux Store** - to start this lab, we'll be working with the sample data file. The goal of this step is to take the data stored in the `src/data/sample_data.ts` file and store it in our redux store. Notice that in `index.tsx`, we have already added in the initial Redux store instantiation with the `configureStore` function and then wrapped our `App` component in the `Provider` component from `react-redux`.

   ![redux store setup](redux_setup.png)

    You'll need to work in the `actions.ts`, `reducer.ts`, and `types.ts` files to add the data from `sample_data.ts` to the redux store. You'll know you were successful when you can see the initial state in the `State` tab of the Redux dev tools in your browser.

3. **Incorporate stored data into the app** - Now that you have the sample data in your redux store, we'll need to use the data from the redux store. In the `App.tsx` file, use the `useSelector` hook to pull in the data from your redux store. Visually, nothing in your app should change. Check to make sure that you're using the redux store exclusively by removing all direct references to the sample data file from your `App.tsx` file.

4. **Fetch Data from API and add to Redux Store** - The final step is to substitute the sample data for actual data from the Giphy API, you will need to update your initial state to be an empty array of data rather than the sample data. We can now start fetching out data. Fetching data from an API requires us to manage asynchronous workflows with Redux for the first time in our work so far. To do this, you'll need to use `redux-thunk`. For more information about how Thunks work, we recommend checking out the [Redux documentation on async logic](https://redux.js.org/tutorials/essentials/part-5-async-logic). For this exercise, you'll need to use the API key you generated, and use the "trending" API endpoint. Dispatch a thunk which dispatches the pending, success, and failure status representing the phases of the API. **Hint:** there is a `utils.ts` file inside of data directory to help you get started with the API.

5. **Incorporate Redux Toolkit** - Now that you've seen how each piece of redux functions, refactor to utilize Redux Toolkit, specifically the [configureStore](https://redux-toolkit.js.org/api/configureStore) and [createSlice](https://redux-toolkit.js.org/api/createSlice) features. If you have time, you can also explore other features like [createAPI](https://redux-toolkit.js.org/rtk-query/api/createApi), [createSelector](https://redux-toolkit.js.org/api/createSelector), and [createEntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter) as useful patterns.

## Extensions
Once you are done with the core exercises above, you are welcome to choose any of the below extensions:
1. Improve the page with custom CSS.
2. The Giphy API has a number of different endpoints. We're using the "trending" endpoint above, but see if you can give the user the option to choose which endpoint you fetch from, and update the Redux store accordingly. 
3. Add a search bar and allow the user to search for gifs around a theme. 

## Final Thoughts

Redux is designed to manage large, complex apps, and is itself quite complex. It will take time to get used to using it. Redux uses quite a bit of boilerplate logic, which means that the general structure and patterns will remain familiar application-to-application. - it's okay if you don't understand everything right away, and are pattern-matching for a little while!
