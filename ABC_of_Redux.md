# ABC  of Redux
ref: https://dev.to/radiumsharma06/abc-of-redux-5461
### React provides the view - Redux manages its state logic.
### Redux Terminologies
* store : global state provider
* state
* dispatch : setState
* actions
* action creators
```js
{
    type: 'LABEL_VALUE',
    value: 'hello'
}
```
* reducers

***
## Action
放action creators
```js
{
    type: 'LABEL_VALUE',
    value: 'hello'
}
```

## React Component
```js

const changeLabelOnClick = (newLabelValue) => {
  dispatch( changeLabelValue('bye') );    //dispatch一個action

}

//changeLabelValue是一個action which ruturn an new object or an action



const LabelComponent = () => (
 <Label> { state.labelValue } </label>;
 <Button onClick={changeLabelOnClick('bye')}> Click Me </Button>
-------------------↑↑↑↑↑↑↑fn() 加在上面，連結到dispatch
);
```

### dispatch兩種參數
```js
const changeLabelOnClick = (newLabelValue) => {
  dispatch( changeLabelValue('bye') );
  第一種call a fn() as below
-------------↑↑↑↑↑↑↑↑↑↑↑↑
-------------或是直接給一個物件
  dispatch( {
       type: 'LABEL_VALUE',
       labelValue: 'Bye'
    } );

}
```

###

```js
const changeLabelValue = (labelValue) => {
    type: 'LABEL_VALUE',
    labelValue
}
```

### reducers

named way: ____+Reducer
```js
const labelReducer = (state = {}, action) => {
    switch(action.type){
      case 'LABEL_VALUE':{          //this component uses 'labelValue' state of the store
        return action.labelValue;    //returns a new state on getting called
      }
      default:
        return state;

    }
}
```
### component +container

#### Container
```js
//LabelComponent.container.js

import { connect } from 'react-redux';
import { changeLabelValue} from '../../actions';    //dispatch要呼叫的  action creator =>  in order to change state.
import LabelComponent from './LabelComponent';

//mapStateToProps takes data from redux and provides it to our view component which is LabelComponent
const mapStateToProps = (state) => {
  return {
    labelValue: state.labelValue
  }
}
//mapDispatchToProps provides functions as props to view component which can provide data back to containers as callbacks
const mapDispatchToProps = (dispatch) => {
  return {
    changeLabelOnClick: (labelValue) => dispatch(changeLabelValue(labelValue))
  };
};
//After this data is availabel in container we dispatch an action and data flows to reducer -> store and back to view with updated state.
export default connect(mapStateToProps, mapDispatchToProps)(LabelComponent);   //把props綁到 指定的component上面
```

#### component
```js
//LabelComponent.js - Pure Component
// first get the props from container
const LabelComponent = ({labelValue, changeLabelOnClick}) => (    //傳入參數which are controlled by reducer
 <Label> { labelValue } </label>;
 <Button onClick={changeLabelOnClick('bye')}> Click Me </Button>
);
```


### starting point of your react app
```js
import reducers from './reducers';
import App from './components/App';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(reducers);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
```
* createstore binds the entire state(reducers) into a single store and assigns it to a variable(store)
* reducers is nothing but a folder with different reducer files having part of state.
