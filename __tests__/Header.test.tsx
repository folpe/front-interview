import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import '@testing-library/jest-dom/extend-expect'

import Header from '../components/Header'

describe('Enzyme tests', () => {
  test('should render Header according to snapshot', () => {
    const wrapper = mount(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('React testing libray tests', () => {
  test('should render Header with title and 3 links', () => {
    const { getAllByTestId, getByTestId } = render(<Header />)
    const title = getByTestId('title')
    expect(title.textContent.trim()).toBe('Coding test with Nextjs')
    const navlink = getAllByTestId('navlink')
    expect(navlink.length).toBe(3)
  })
})
