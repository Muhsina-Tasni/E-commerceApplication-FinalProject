// import {BrowserRouter, Routes} from "react-router-dom"
// import './App.css'

// function App() {


//   return (
    
//       <BrowserRouter>
//       <Routes>
//         {/* <Route></Route> */}
//       </Routes>
//       </BrowserRouter>
   
//   )
// }

// export default App


import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>

    </div>
  )
}

export default App

