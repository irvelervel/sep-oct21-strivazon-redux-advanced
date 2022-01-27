// let's create action creators: these are functions meant to return
// the action objects

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

export const addToCartAction = (book) => ({
  type: ADD_TO_CART,
  payload: book,
})

export const removeFromCartAction = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index,
})

export const setUsernameAction = (name) => ({
  type: SET_USERNAME,
  payload: name,
})

// now with redux-thunk you can create much more powerful action creators
// because now you can still do it in the "old" way, so you can still dispatch actions (js objects)
// but now you can also dispatch FUNCTIONS

export const addToCartActionWithThunk = (book) => {
  return async (dispatch, getState) => {
    // now we can return a FUNCTION out of your action creator, not just an object!
    // what does this mean?
    // it means you can do your expensive operations, your fetches, your complex logic
    // and once its completed, you can dispatch the result
    console.log('this book has been added with redux-thunk')
    console.log("here's my state currently", getState())
    // for example, we could even do an async fetch here...
    setTimeout(() => {
      dispatch({
        type: ADD_TO_CART,
        payload: book,
      })
    }, 1000)
  }
}
