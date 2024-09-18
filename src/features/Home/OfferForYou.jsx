import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

function OfferForYou() {
  const {
    banners = [],
    isLoading,
  } = useSelector((state) => state.adminDashboard);
  return (
    <section className="mt-8 overflow-hidden">
      <h1 className="font-medium text-lg">Offer for you</h1>
      {isLoading ? (
        <Loader className={"h-40 w-full"} />
      ) : (
        <div className="offer_img h-36 md:h-40  flex  gap-x-5 mt-2 overflow-auto">
          {banners?.map((bner, index) => {
            return (
              <img key={index} className="max-w-80" src={bner.Img} alt={bner} />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default OfferForYou;
