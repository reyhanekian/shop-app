import { shortenText } from "../helper/helper";

function SideList({ data: { image, price, title } }) {
  return (
    <div className="flex bg-[#A4C3A2] mb-1 w-full my-1 mx- px-4 py-2 rounded-lg items-center gap-3">
      <img className="w-12 h-12 bg-transparent" src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <h2 className= " bg-[#EAE7D6] px-4 rounded-lg" >{price} $</h2>
    </div>
  );
}

export default SideList;
