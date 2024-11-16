import { BsPatchCheck } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";

function BasketSidebar({ state, clickHandler }) {
  return (
    <div className="w-full mr-8 border-2 mb-8  border-dashed rounded-3xl p-5  ">
      <div className="flex items-center mb-4">
        <TbChecklist className="text-xl mr-2" />
        <p className="text-lg text-zinc-800 font-semibold">Total:</p>
        <span className="ml-3 text-zinc-600">{state.total} $</span>
      </div>
      <div className="flex items-center mb-4">
        <MdOutlineProductionQuantityLimits className="text-xl mr-2" />
        <p className="text-lg text-zinc-800 font-semibold">Quantity:</p>
        <span className="ml-3 text-zinc-600">{state.itemsCounter}</span>
      </div>
      <div className="flex items-center mb-4 ml-0.5">
        <BsPatchCheck className="text-xl mr-2 w-5" />
        <p className="text-lg text-zinc-800 font-semibold">Status:</p>
        <span className="ml-3 text-zinc-600">
          {!state.checkout && "Pending..."}
        </span>
      </div>
      <button
        className=" cursor-pointer flex items-center bg-[#B0D4B8] justify-center py-6 rounded-xl animate-pulse  w-64 "
        onClick={() => clickHandler("CHECKOUT")}
      >
        Checkout
      </button>
    </div>
  );
}

export default BasketSidebar;
