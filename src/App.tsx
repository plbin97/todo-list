import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { Task } from './pages/Task'

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/task' element={<Task />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
