import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import './App.css';
import Header from './components/Header';
import firebase from 'firebase/compat/app'
import Home from './components/Home'
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
