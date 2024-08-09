import { Route, Routes } from 'react-router-dom'
import LogIn from '../LogIn/LogIn'

function CustomRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LogIn/>}/>
        </Routes>
    )
}

export default CustomRoutes
