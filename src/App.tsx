import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import Profile from './pages/Profile'
import Products from './pages/Products'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<SingleProduct />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
