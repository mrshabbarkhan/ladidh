function Categories({img,tittle}) {
    return (
      <div className="flex flex-col items-center">
        <img className="" src={img} alt={img} />
        <p className="font-medium">{tittle}</p>
      </div>
    );
}

export default Categories
