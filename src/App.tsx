import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import ProductList from "./components/ProductList";
import { CartItem, Product, User } from "./cartItem";
import { toast, ToastContainer } from "react-toastify";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";

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
      toast.success(`${product.name} به سبد خرید اضافه شد!`, {
        position: "top-right",  
      });
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

  // Handle order submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newUser = Object.fromEntries(formData.entries()) as unknown as User;

    // Validate the form data
    if (!newUser.name || !newUser.address || !newUser.phone) {
      toast.error("لطفاً همه اطلاعات را پر کنید!");
      return;
    }

    // Update user state with the new user
    setUser(newUser);

    const orderNumber = Math.floor(Math.random() * 10000);
    toast.success(
      `سفارش شما ثبت شد. شماره سفارش: ${orderNumber}  زمان تقریبی تحویل: 30 دقیقه`
    );
    event.currentTarget.reset();
  };
  const handleCheckout = () => {
    setShowModal(true);
  };
  return (
    <div className="flex mx-auto bg-gray-300  flex-wrap gap-14 p-4 md:flex">
      <div className="w-full">
        <Header />

        <ProductList addToCart={addToCart} />
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          handleCheckout={handleCheckout}
        />
           {showModal && (
          <OrderForm
            onSubmit={handleSubmit}
            currentUser={user}
            closeModal={() => setShowModal(false)}
          />
        )}
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeButton={true}
          rtl={true}
          className="toast"
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
