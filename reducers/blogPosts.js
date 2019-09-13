import { put, takeLatest } from 'redux-saga/effects'

import 'regenerator-runtime/runtime'

// Types d’actions
// ---------------
const FETCH_BLOGPOSTS = 'freeup/BlogPosts/FETCH_BLOGPOSTS'
const FETCH_BLOGPOSTS_SUCCEED = 'freeup/BlogPosts/FETCH_BLOGPOSTS_SUCCEED'
const FETCH_BLOGPOSTS_START = 'freeup/BlogPosts/FETCH_BLOGPOSTS_START'
const FETCH_BLOGPOSTS_FAIL = 'freeup/BlogPosts/FETCH_BLOGPOSTS_FAIL'

// Réducteur
// ---------
const BLOGPOSTS_DEFAULT = {
  blogPostsData: [],
  loading: false,
  error: '',
}
export default function reduceBlogPosts(state = BLOGPOSTS_DEFAULT, action) {
  switch (action.type) {
    case FETCH_BLOGPOSTS_START: {
      return {
        blogPostsData: [],
        loading: true,
        error: '',
      }
    }
    case FETCH_BLOGPOSTS_SUCCEED: {
      return {
        blogPostsData: action.payload.blogPosts,
        loading: false,
        error: '',
      }
    }
    case FETCH_BLOGPOSTS_FAIL: {
      return {
        blogPostsData: [],
        loading: false,
        error: action.payload.error,
      }
    }

    default:
      return state
  }
}

// Action Creators
// ---------------
export function fetchBlogPostsStart() {
  return { type: FETCH_BLOGPOSTS_START }
}

export function fetchBlogPostsSuccess(blogPosts) {
  return { type: FETCH_BLOGPOSTS_SUCCEED, payload: { blogPosts } }
}

export function fetchBlogPostsError(error) {
  return { type: FETCH_BLOGPOSTS_FAIL, payload: { error } }
}

export function fetchBlogPosts() {
  return { type: FETCH_BLOGPOSTS }
}

export function* fetchBlogPostsAsync() {
  try {
    yield put(fetchBlogPostsStart())
    const blogPostsFetched = yield call(() => {
      return fetch(`https://upply-interview.herokuapp.com/`).then(res =>
        res.json()
      )
    })
    yield put(fetchBlogPostsSuccess(blogPosts))
  } catch (error) {
    yield put(fetchBlogPostsError(error))
  }
}

export const blogPostsSagas = [takeLatest(FETCH_BLOGPOSTS, fetchBlogPostsAsync)]
