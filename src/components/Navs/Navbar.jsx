import patternImage from "../../assets/images/pattern1.png";
import Map from "../../assets/ui/Map";
import MenuSvg from "../../assets/ui/MenuSvg";
import SearchSvg from "../../assets/ui/SearchSvg";
import SideBar from "./SideBar";

function Navbar() {
  return (
    <section className="fixed right-0 left-0 top-0 z-20 ">
      <header
        className="bg-cover w-full h-28 bg-primary rounded-b-[2rem] relative"
        style={{ backgroundImage: `url(${patternImage})` }}
      >
        <nav className="h-full w-full flex items-center bg-primary opacity-60 relative rounded-b-[2rem]"></nav>
        <div className=" absolute top-0 right-0 w-full pt-4 px-2 md:px-24 lg:px-48">
          <div className="flex items-center">
            <Map />
            <div className="ml-2 text-white flex items-center justify-between w-full">
              <span className="leading-4">
                <h1 className="font-bold text-lg">Ladhidh</h1>
                <p className="font-medium text-slate-50 text-sm ">
                  Rkpuram sector-b near chawla circle....
                </p>
              </span>
              <div className="border p-2 rounded-lg">
                <MenuSvg Component={SideBar} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center absolute bottom-0 m-auto w-full translate-y-1/2 px-2 md:px-24 lg:px-48  ">
          <div className="border-2 w-full rounded-xl flex items-center p-2 bg-white focus-within:border-primary-light">
            <SearchSvg />
            <input
              type="text"
              className=" focus:outline-none w-full ml-4"
              placeholder="Type product name to search"
            ></input>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
