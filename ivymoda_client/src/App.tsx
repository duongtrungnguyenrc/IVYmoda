import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Categories from './screens/Categories';


function App() {
  window.addEventListener("offline", () => {
    alert("No internet!")
  })
  return (
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path='/categories' element={<Categories/>}/>
    </Routes>
  )
}

export default App;
