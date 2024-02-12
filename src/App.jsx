import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './CRUD/Home'
import CreateUser from './CRUD/CreateUser'
import User from './CRUD/User'
import Update from './CRUD/Update'

const App = () => {
  return (
    <section>
        <BrowserRouter>
            <Home/>
            <Routes>
              <Route element={<CreateUser/>}  path='/'/>
              <Route element={<User/>}  path='/user'/>
              <Route element={<Update/>} path='/update/:id'/>
            </Routes>
        </BrowserRouter>

    </section>
  )
}

export default App
