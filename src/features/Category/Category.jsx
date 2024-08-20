function Category({ children, heading }) {
  return (
    <section>
      {heading && <h1 className="font-medium text-lg">{heading}</h1>}
      <div className="categories_img p_text grid grid-cols-3 gap-y-8 sm:px-4 mt-4 ">
        {children}
      </div>
    </section>
  );
}

export default Category;
