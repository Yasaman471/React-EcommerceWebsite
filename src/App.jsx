import { Outlet } from 'react-router'
import './App.css'
import NavItems from './Components/NavItems'

function App() {
  return (
    <>
      <NavItems />
      <Outlet />
    </>
  )
}

export default App
