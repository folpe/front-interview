import { all } from 'redux-saga/effects'

import 'regenerator-runtime/runtime'

import { blogPostsSagas } from '../reducers/blogPosts'

function* rootSaga() {
  yield all([...blogPostsSagas])
}

export default rootSaga
