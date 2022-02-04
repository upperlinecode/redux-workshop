# Intro to Redux

## Today's 🔥 GIFs

![todays hottest club gif](https://media.giphy.com/media/29LTG8tQpoEkIeOnIO/giphy.gif)

## Objectives

-

## Why?

This lab is designed to give you an introduction to some of the most commonly used workflows in redux: fetching data from an API and storing it in a redux store, and then using data from the redux store in your application. You'll need to use these same workflows in your onboarding project.

As you learn redux and global state management more broadly, you may be thinking: "couldn't I just store all of this information in my components' state?" The answer is mostly yes. You absolutely could. As applications grow in complexity, however, global state management tools like Redux help to keep your application organized, which in turn improves maintainability and scalability.

Redux is one such global state management tool. It is a library that helps manage the state of your application as it grows in complexity. It aims to manage updates to your application by adhering to 3 principles:

- having one single source of truth (the redux “store”)
- making state read-only
- only allowing state to be modified via pure functions (redux “reducers”).

Its aim is to make state mutations predictable to allow developers the ability to reason more clearly about the various interactions within an application.

As you learn redux and global state management more broadly, you may be thinking: "couldn't I just store all of this information in my components' state?" The answer is mostly yes. You absolutely could. As applications grow in complexity, however, global state management tools like redux

## Directions

This lab has been tested in VSCode. You're welcome to run it elsewhere if you like, but the instructions are written with the assumption that you're operating on your code in the VSCode IDE.

Getting Started:

1. Clone this repository down to your local environment and navigate to the root directory. Run `npm install` and then `npm start` to ensure you can preview your app.
2.

## Guidance

You'll need to work in the `actions.ts`, `reducer.ts`, and `types.ts` files to add the data from data_store.ts to the redux store. You'll know you were succesful when you can see the initial state in the `State` tab of the Redux dev tools in your browser.

1. **Incorporate stored data into the app** - Now that you have the sample data in your redux store, we'll need to use the data from teh redux store. In the `App.tsx` file, use the `useSelector` hook to pull in the data from your redux store. Visually, nothing in your app should change. Check to make sure that you're using the redux store exclusively by removing all direct references to the sample data file from your `App.tsx` file.

1. **Fetch Data from API and add to Redux Store** - The final step is to substitute the sample data for actual data from the Giphy API. Fetching data from an API requires us to manage asynchronous workflows with Redux for the first time in our work so far. To do this, you'll need to use `redux-thunk`. For more information about how Thunks work, we recommend checking out the [Redux documentation on async logic](https://redux.js.org/tutorials/essentials/part-5-async-logic)

## Final Thoughts

Redux is designed to manage large, complex apps, and is itself quite complex. It will take time to get used to using it. Redux uses quite a bit of boilerplate logic, which means that the general structure and patterns will remain familiar application-to-application. - it's okay if you don't understand everything right away, and are pattern-matching for a little while!
