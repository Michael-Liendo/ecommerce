import Image from 'next/image';
import { useShop } from '../context/ShopContext';

export default function ProductCard({ product }) {
  const { setCart, cart, setCartAnimated } = useShop();

  function CartAnimation() {
    setCartAnimated(true);
    setTimeout(() => setCartAnimated(false), 200);
  }

  function addNewItem(productId) {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (product) => product.id === productId
      );
      if (productIndex < 0) {
        return [...prevCart, { ...product, quantity: 1 }];
      } else {
        const newProductArr = prevCart;
        newProductArr[productIndex] = {
          ...product,
          quantity: product.quantity + 1,
        };
        return newProductArr;
      }
    });
    console.log(cart);
    CartAnimation();
  }

  return (
    <a key={product.id}>
      <div className="pb-3 transition duration-300 rounded-lg w-64  hover:shadow-xl">
        <Image
          className="rounded-lg w-full h-56 object-cover"
          src="https://api.lorem.space/image?w=640&h=480&r=400"
          // src={product.images[0]}
          alt={product.title}
          width="1000"
          height="1000"
        />
        <div className="mx-2">
          <h4 className="mt-4 font-medium text-lg text-[#444e5e]">
            {product.title}
          </h4>
          <small className="block text-sm font-light text-gray-400">
            {product.category.name}
          </small>
          <div className="flex justify-between ">
            <span className="text-xl text-gray-600 font-medium mt-1">
              ${product.price}
            </span>
            <button
              onClick={() => addNewItem(product.id)}
              type="button"
              className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}
