import React from 'react'
import Table from './components/Table.jsx'
import Agendamento from './components/Agendamento.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx'

function App() {


  return (
   
    <Router>   
      <Header/> 
      <Routes> 
         
      <Route path="/" element={<Agendamento />} />
        <Route path="/horarios" element={<Table />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>

    </Router>
  )
}

export default App
