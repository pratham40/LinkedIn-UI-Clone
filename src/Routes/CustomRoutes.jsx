import { Route, Routes } from 'react-router-dom'
import LogIn from '../components/LogIn/LogIn'
import Home from '../components/LogIn/Home'

function CustomRoutes() {
    return (
        <Routes>
           <Route path='/' element={<LogIn/>}/>
           <Route path='/home' element={<Home/>}/>
        </Routes>
    )
}

export default CustomRoutes
