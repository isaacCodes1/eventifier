import { RouterProvider } from 'react-router-dom'
import { routes } from '../components/fixed/Routes'

const App = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default App