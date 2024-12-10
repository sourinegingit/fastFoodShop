import { CartItem } from "../cartItem";

type CartProps = {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  handleCheckout: () => void;
};

const Cart = ({ cart, updateQuantity, removeFromCart, handleCheckout }: CartProps) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col bg-gray-300 p-4 mb-4 sm:mb-6 lg:mb-8">
      <p className="font-semibold text-3xl mb-4 ">سبد خرید</p>
      {cart.length === 0 ? (
        <p className="font-semibold text-lg">سبد خرید خالی است.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="flex  flex-col gap-6  sm:flex-row justify-between w-full items-start sm:items-center mt-4">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row  sm:items-center">
              <p className="font-semibold text-lg">{item.name}</p>
              <div className="flex gap-4  items-center justify-between mt-2 sm:mt-0 sm:mx-4">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="font-semibold text-2xl bg-gray-400 rounded-md w-8 h-8 sm:w-10 sm:h-10"
                >
                  +
                </button>
                <p className="font-semibold text-2xl mx-2">{item.quantity}</p>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="font-semibold text-2xl bg-gray-400 rounded-md w-8 h-8 sm:w-10 sm:h-10"
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center gap-40 mt-2 sm:mt-0 sm:ml-4 w-full sm:w-auto">
              <p className="font-semibold text-lg">{item.price * item.quantity} تومان</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="font-semibold text-red-500 sm:ml-4 mt-2 sm:mt-0"
              >
                حذف
              </button>
            </div>
          </div>
        ))
      )}
      <div className="flex justify-between items-center mt-4 sm:mt-6">
        <p className="font-semibold text-lg">جمع کل: {totalPrice} تومان</p>
        <div className="mt-4 sm:mt-0 w-full sm:w-auto">
          <button
            onClick={handleCheckout}
            className="bg-orange-600 text-white p-2 rounded-md w-full sm:w-auto"
          >
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
