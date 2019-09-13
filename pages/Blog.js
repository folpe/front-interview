import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch } from 'react-redux'
import { fetchBlogPosts } from '../reducers/blogPosts'
import axios from 'axios'

import InputBase from '@material-ui/core/InputBase'
import { Card } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}))

const Blog = () => {
  const classes = useStyles()

  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://upply-interview.herokuapp.com/`)
      setBlogPosts(result.data)
    }
    fetchData()
  }, [])

  console.log(blogPosts)

  const blogPostsList = blogPosts.map(post => (
    <Card key={post.id}>
      <div>
        {post.src && (
          <img
            src={`https://upply-interview.herokuapp.com/images/${post.src}`}
          />
        )}
      </div>
      {post.title}
    </Card>
  ))

  return (
    <Layout>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      {blogPostsList}
    </Layout>
  )
}

export default Blog
