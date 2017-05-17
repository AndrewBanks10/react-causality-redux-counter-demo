At npm, type the following.

## npm start 

If that fails for some reason then do the following 3 commands.

## npm install

## npm run build

## webpack-dev-server 

After it is complete, pull up chrome on localhost:8080 to see the demo.


Causality-redux is an extension to redux that significantly reduces redux and react-redux coding.

## Benefits of causality-redux
- You can define multiple partitions within the redux store. This way, one partition can be associated exclusively with a causality chain of a UI component and its business logic. This also allows you to have shared partitions that can be used to change the state of such things as a UI busy loader than can be shared by different causality chains.
- To implement causality, causality-redux exposes two main concepts, changers which initiate a cause and subscribers that subscribe as an effect to the cause. The programming steps taken by the subscriber as a result of the cause is the effect.
- Specific keys within a partition can be targeted by a subscriber of state changes. So, the subscriber is not called unless one of the targets is changed.
- The subscriber is called with the targeted keys/values that changed as an argument so that it does not need to call getState to figure out if the state changes apply to the subscriber.
- In most cases changers/dispatchers do not need to be defined or coded. They are automatically generated by causality-redux.
- In most cases reducers do not need to be defined or coded. They are automatically generated by causality-redux.           
- Type checking of arguments is performed for most changers in order to catch coding errors early.
- Connecting changers and partition values to react components takes only one line of code. mapStateToProps and mapDispatchToProps definitions are no longer needed.
- React PropType definitions are not needed because causality-redux does all of the type checking of arguments and automatically validates functions that are set to props in react components.
- Business logic functions do not need to be passed down the react UI tree as props. A react component simply binds to a changer string name that causes a state change in which business logic subscribes to the change and implements the causality chain. So a react component can be a fully functional business logic/UI unit without any dependencies on the containing react UI tree.
- UI components do not need to import business logic functions or reference them since the components bind to changer string names instead of business functions. So, neither the business logic nor the UI components need to import anything about the other.
- Causality-redux is very small only 4K gzipped.

If you are using react, see [Github react-causality-redux](https://github.com/AndrewBanks10/react-causality-redux) for the react extension to causality-redux.

## Documentation

You can find documentation at <https://cazec.com/causalityredux/causalityredux.html>

## Demos with source code.
- [General Demo](https://cazec.com/causalityredux/causalityreduxdemo.html)
- Todo Demo - React demo that provides the same functionality as 100 redux lines of code in just 8 lines. [Todo Demo](https://cazec.com/causalityredux/todo.htm)
- Counter Demo - Show a counter example and also how to access external business logic without any import of the business functions or injecting react props from the top down. [Counter Demo](https://cazec.com/causalityredux/countertest.html)

## NPM links

[npm causality-redux](https://www.npmjs.com/package/causality-redux)

[npm causality-redux react extension](https://www.npmjs.com/package/react-causality-redux)

## Github links

[Github causality-redux](https://github.com/AndrewBanks10/causality-redux)

[Github causality-redux react extension](https://github.com/AndrewBanks10/react-causality-redux)






