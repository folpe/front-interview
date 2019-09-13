import { combineReducers } from 'redux'

import blogPosts from './blogPosts'

const frontInterview = combineReducers({
  blogPosts,
})

export default frontInterview
