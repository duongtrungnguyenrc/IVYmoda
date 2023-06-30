import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home, Categories, Product } from './screens';


function App() {
  window.addEventListener("offline", () => {
    alert("No internet!")
  })
  return (
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route  path="/product" element={<Product/>}/>
    </Routes>
  )
}

export default App;
