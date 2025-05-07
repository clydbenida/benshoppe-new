import './App.css'
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import rootRouter from './routers/RootRouter.tsx'
import { store } from './redux/store.ts'
import { GIGYA_API_KEY, GIGYA_DATA_CENTER } from './config/envVariables.ts'

const gigyaScript = document.createElement('script');

gigyaScript.setAttribute(
  'src',
  `https://cdns.${GIGYA_DATA_CENTER}/js/gigya.js?apikey=${GIGYA_API_KEY}`
)
gigyaScript.setAttribute(
  'type',
  'text/javascript',
)
document.head.appendChild(gigyaScript);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={rootRouter} />
    </Provider>
  </StrictMode>,
)
