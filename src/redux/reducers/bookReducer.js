import { GET_BOOKS } from '../actions'
import { initialState } from '../store'

const bookReducer = (state = initialState.book, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        stock: action.payload,
        // from being an empty array, now stock gets filled up!
      }

    default:
      return state
  }
}

export default bookReducer
