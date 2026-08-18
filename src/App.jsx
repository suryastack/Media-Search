import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className='min-h-screen w-full bg-(--c3) text-white'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/collection' element={<CollectionPage />}/>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
