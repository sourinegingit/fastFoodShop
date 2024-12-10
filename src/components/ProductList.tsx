import { Product } from "../cartItem";

const products: Product[] = [
  { id: 1, name: ' برگر گوشت', description: 'برگر گوشت با سوس پپرونی و پنیر', price: 120000, imageUrl: '../src/assets/burger1.jpg' },
  { id: 2, name: 'پیتزا مارگاریتا', description: 'پیتزا با گوجه و پنیر', price: 100000, imageUrl: '../src/assets/pizza2.jpg' },
  { id: 3, name: 'پیتزا قارچ', description: 'پیتزا قارچ و پنیر', price: 110000, imageUrl: "../src/assets/pizza1.jpg" },
  { id: 4, name: ' سیب زمینی با ادویه', description: ' سیب زمینی تازه با ادویه   ', price: 85000, imageUrl: '../src/assets/frenchfries1.jpg' },
  { id: 5, name: 'پیتزا مارگاریتا', description: 'پیتزا مارگاریتا  با سس پنیر', price: 70000, imageUrl: '../src/assets/pizza3.jpg' },
  { id: 6, name: ' سیب زمینی سرخ شده', description: ' سیب زمینی سرخ شده  تازه', price: 95000, imageUrl: '../src/assets/frenchfries3.jpg' },
  { id: 7, name: ' سیب ویژه', description: ' سیب ویژه خوشمزه', price: 50000, imageUrl: '../src/assets/frenchfries2.jpg' },
  { id: 8, name: 'برگر', description: 'برگر کلاسیک', price: 30000, imageUrl: '../src/assets/burger2.jpg' },

  { id: 9, name: 'برگر مرغ', description: 'برگر مرغ تازه با نان خانگی', price: 90000, imageUrl: '../src/assets/burger3.jpg' },
];
type ProductListProps = {
    addToCart: (product: Product) => void;
  };

const ProductList = ({ addToCart }: ProductListProps) => {
  return (
    <div className="flex flex-wrap gap-6 p-4 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full sm:w-80 md:w-72 lg:w-64 bg-gray-500 flex flex-col items-center p-4 rounded-lg shadow-lg"
        >
          <img src={product.imageUrl} alt={product.name} />
          <h3 className="font-semibold text-lg mt-4">{product.name}</h3>
          <h6 className="font-semibold text-md text-gray-300 mt-2">{product.description}</h6>
          <div className="flex justify-between items-center w-full mt-4">
            <p className="font-semibold text-xl">{product.price} تومان</p>
            <button
                          onClick={() => { addToCart(product); }}

              className="bg-orange-500 text-white py-2 px-4 rounded-md mt-2 sm:mt-0"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
