import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import App from '../App.vue'

describe('App', () => {
  it('renders properly', async () => {
    render(App)
    expect(await screen.findByText('You did it!')).toBeVisible()
  })
})
