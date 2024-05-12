import React from 'react'

import routes from "./routes";
import { useRoutes } from "react-router-dom";
export default function App() {
  let router = useRoutes(routes)


  return (
    <div className='transition-all bg-gray-100 dark:bg-dark-900 h-full '>
      {router}
    </div>
  )
}
