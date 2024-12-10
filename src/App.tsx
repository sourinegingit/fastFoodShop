
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

import ProductList from './components/ProductList';

function App() {

  return (
    <div className="flex mx-auto bg-gray-300  flex-wrap gap-14 p-4 md:flex">
      <div className="w-full">
        <Header/>
        <ProductList  />
      <Footer/>

  </div>
</div>
  )
}

export default App
