# React Native AsyncStorage Bug: Data Access Before Loading

This repository demonstrates a common bug in React Native applications when working with AsyncStorage: accessing data before it has finished loading asynchronously.  The bug leads to unexpected behavior or crashes.  The solution demonstrates how to properly handle the asynchronous nature of AsyncStorage using Promises or async/await.

## Bug Description

The `AsyncStorageBug.js` file illustrates how directly accessing AsyncStorage data within `componentDidMount` can result in undefined values, leading to errors or unexpected behavior.  The application attempts to render a username before the AsyncStorage data is fully retrieved.

## Solution

The `AsyncStorageSolution.js` file shows how to correctly handle asynchronous data retrieval from AsyncStorage using async/await. This approach ensures that the data is loaded before the component attempts to render it, preventing crashes and unexpected behavior.