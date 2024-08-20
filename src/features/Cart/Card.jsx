function Card({ img, pack, tittle, discount, code, price, oldPrice }) {
  return (
    <section className="max-w-[15rem] min-w-[15rem] mb-3 text-wrap rounded-xl pb-2 bg-white shadow-lg">
      <img
        src={img}
        alt={img}
        className="object-cover object-center w-full h-40 rounded-t-xl"
      />
      <div className="px-2 mt-1">
        <p className="text-xs font-medium text-primary-dark">{pack}</p>
        <h1 className="mt-2 text-md text-gray-800 leading-6 font-medium">{tittle}</h1>
        {discount&&<p className="text-xs mt-2 text-orange-500">
          FLAT {discount} off Code: {code}
        </p>}
        <div className="flex justify-between items-center mt-2">
          <span className="flex gap-2 items-center">
            <h1 className="text-xl text-primary-dark font-semibold">&#x20B9; {price}</h1>
            <span className="line-through text-gray-500 font-medium">{oldPrice}</span>
          </span>
          <button className="border border-primary-dark px-2 rounded-lg hover:text-white hover:bg-primary-dark transition">
            Add
          </button>
        </div>
      </div>
    </section>
  );
}

export default Card;
