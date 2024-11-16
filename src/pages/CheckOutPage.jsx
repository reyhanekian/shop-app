import { FaArrowLeft } from "react-icons/fa";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CheckOutPage() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  if (!state.itemsCounter) {
    return (
      <div className="flex flex-col w-full justify-center items-center ">
        <p className="font-bold text-2xl w-full text-center p-10">
          There is no product
        </p>
        <Link
          to="/products"
          className="flex items-center bg-[#B0D4B8] justify-center py-6 rounded-xl animate-pulse  w-60 "
        >
          <FaArrowLeft className="text-slate-700 mr-2 " />
          <span className="font-semibold">Back to shop</span>
        </Link>
        
      </div>
    );
  }

  return (
    <div className="xl:flex lg:flex md:grid sm:grid items-start p-3">
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;
