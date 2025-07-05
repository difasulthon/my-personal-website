import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Home from '../pages/home'
import About from '../pages/about'
import Experiences from '../pages/experiences'
import Projects from '../pages/projects'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'experiences', element: <Experiences /> },
      { path: 'projects', element: <Projects /> }
    ]
  }
])