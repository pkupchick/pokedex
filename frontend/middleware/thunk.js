function thunk(store) { // when we call `createStore` we can pass `store` here
  
  return function (next) { // the next piece of middleware or reducer that receives the action if it is not a function
    
    return function (action) { // the action hits the middleware and then gets checked based on middleware code
      
      if (typeof action === "function") { 
        
        return action(store.dispatch, store.getState); // this is looking to be invoked with `dispatch` & `state` and fire off an async request
      }
      
      return next(action); 
      // action is not a fn (will be POJO as long as action creators are correct), so go to next middleware or reducer
    };
  };
}

export default thunk;