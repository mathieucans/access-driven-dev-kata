// for useful documentation, please refer to https://testing-library.com/docs/queries/about/

import { render, screen } from '@testing-library/react'

const __REPLACE_ME__ = 'replace me to make this test pass'

describe('some small exercices to get familliar with testing library', () => {
  beforeEach(() => {
    render(
      <div>
        <header><button aria-label="Close">X</button></header>
        <h1>Kick start for testing library</h1>

        <h2>make all test pass</h2>

        <button>Close</button>
      </div>,
    )
  })

  describe('getByRole', () => {

    it('works with html role and accessible text', () => {
      const element = screen.getByRole('heading', { level: 1, name: __REPLACE_ME__ })
      expect(element).toBeVisible()
    })

    it('fails with exception when element is not found', async () => {
      expect(() =>
        // Modify options to not find the element and make this test pass
        screen.getByRole('heading', {
          level: 2,
          name: 'make all test pass',
        }),
      ).toThrow()
    })

    it('fails when more than one element is found', async () => {
      let exception : Error | undefined = undefined
      try {
        screen.getByRole(__REPLACE_ME__, { name: 'close' })
      } catch (e) {
        exception = e as Error
      }
      expect(exception?.message).toContain(
        `Unable to find an accessible element with the role \"button\" and name \"close\"`,
      )
    })
  })
})
