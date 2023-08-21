import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home, Categories, Product, Cart, Login } from './screens';
import CheckLogin from './services/CheckLogin';

function App() {
  window.addEventListener("offline", () => {
    alert("No internet!")
  })

  // setInterval(async () => {
  //   let login = await CheckLogin();
  //   console.log(login);
    
  //   if(!login) {
  //     alert("session expried");
  //     location.href = "../login";
  //   }
  // }, 30000)

  return (
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path='/categories' element={<Categories/>}/>
      <Route  path="/product" element={<Product/>}/>
      <Route  path="/cart" element={<Cart/>}/>
      <Route  path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default App;
