import { render, screen } from '@testing-library/angular'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  it('renders properly', async () => {
    await render(AppComponent)
    expect(screen.getByText('You did it!')).toBeVisible()
  })
})
