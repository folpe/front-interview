import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Blog from '../pages/Blog'

describe('Enzyme tests', () => {
  test('should render Blog according to snapshot', () => {
    const wrapper = mount(<Blog></Blog>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
