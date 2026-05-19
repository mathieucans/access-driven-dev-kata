import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import App from '../App'

describe('App', () => {
  it('renders properly', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    expect(await screen.findByText('You did it!')).toBeVisible()
  })
})
