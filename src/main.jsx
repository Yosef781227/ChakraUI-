import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
//import NavBar from './Component/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ChakraProvider>
          <App />
    </ChakraProvider>
  </React.StrictMode>,
)
