import { combineReducers } from 'redux'

import blogPosts from './blogPosts'

const freeUpReducer = combineReducers({
  blogPosts,
})

export default freeUpReducer
