import Home from './Pages/Home'
import MainCourse from './Pages/MainCourse'
import CoursesCategory from './Pages/CoursesCategory'

let routes = [
    { path: '/', element: <Home /> },
    { path: '/main-course/:CourseID', element: <MainCourse /> },
    { path: '/course/:catName', element: <CoursesCategory /> },
]


export default routes