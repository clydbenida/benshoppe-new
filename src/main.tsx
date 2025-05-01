import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './App.css'
import './index.css'
import rootRouter from './routers/RootRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rootRouter} />
  </StrictMode>,
)
