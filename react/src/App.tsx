import { Routes } from 'react-router'
import { routes } from './router'

function App() {
  return (
    <>
      <h1>You did it!</h1>
      <p>
        Visit{' '}
        <a href="https://react.dev/" target="_blank" rel="noopener">
          react.dev
        </a>{' '}
        to read the documentation
      </p>
      <Routes>{routes}</Routes>
    </>
  )
}

export default App
