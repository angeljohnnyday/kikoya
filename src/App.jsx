import { BrowserRouter } from 'react-router-dom'
import routes, { RouterParent } from './routers/routes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <RouterParent routes={routes} />
      </BrowserRouter>
    </>
  )
}

export default App;
