import Home from './Pages/Home'
import MainCourse from './Pages/MainCourse'


let routes = [
    { path: '/', element: <Home /> },
    { path: '/main-course/:CourseID', element: <MainCourse /> },
]


export default routes