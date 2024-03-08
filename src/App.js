import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';
import { Select } from './Components/Select';

function App() {
  return <> <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/pay' element={<Select />} />
      </Routes>

    </BrowserRouter>
  </>
}

export default App;
