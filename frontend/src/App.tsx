
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listado from './components/Listado';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';




function App() {
 

  return (
    <div>
      <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Listado/>}/>
        <Route path='/addUser' element={<AddUser/>}/>
        <Route path='/editUser/:id' element={<EditUser/>}/>
        <Route path='/viewUser/:id' element={<ViewUser/>}/>
      </Routes>
      </Router>
     
      
     
    </div>
  )
}

export default App
