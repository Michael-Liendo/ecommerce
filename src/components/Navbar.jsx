import SearchForm from './SearchForm';
import Cart from './Cart';

export default function Navbar() {
  return (
    <div className="z-50 shadow-md bg-white flex fixed w-[100%] justify-between text-xl pt-6 pb-3 px-7">
      <SearchForm />
      <div className="absolute left-[48%]">
        <h1>LOGO</h1>
      </div>
      <Cart />
    </div>
  );
}
