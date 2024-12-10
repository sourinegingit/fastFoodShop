
import { useState } from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

import ProductList from './components/ProductList';
import { CartItem, Product, User } from './cartItem';
import { toast } from 'react-toastify';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {

    // Load cart from localStorage
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [user, setUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Add to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      let updatedCart;
      if (existingProduct) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      // Save cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Display toast notification
      toast.success(`${product.name} به سبد خرید اضافه شد!`);

      return updatedCart;
    });
  };

  // Remove from cart
  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("با موفقیت حذف شد");
  };

  // Update quantity
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleCheckout = () => {
    setShowModal(true);
  };
  return (
    <div className="flex mx-auto bg-gray-300  flex-wrap gap-14 p-4 md:flex">
      <div className="w-full">
        <Header/>
       
        <ProductList addToCart={addToCart}  />
         <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          handleCheckout={handleCheckout}
        />
      <Footer/>

  </div>
</div>
  )
}

export default App
