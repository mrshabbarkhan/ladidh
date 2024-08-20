function CheckOutFooter() {
    return (
      <div className="flex bg-primary items-center justify-between px-4 py-2 text-white my-2 mx-2 rounded-lg">
        <div className="flex gap-2">
          <h1>3 items |</h1>
          <h1 className="font-semibold">&#x20B9;930</h1>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-lg">Checkout</span>
          <span>
            <i className="fa fa-angle-right"></i>
          </span>
        </div>
      </div>
    );
}

export default CheckOutFooter
