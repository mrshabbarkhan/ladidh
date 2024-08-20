import { OfferBanners } from "../../utils/utils";

function OfferForYou() {
    return (
      <section className="mt-8 overflow-hidden">
        <h1 className="font-medium text-lg">Offer for you</h1>
        <div className="offer_img h-36 md:h-40 flex  gap-x-5 mt-2 overflow-auto">
          {OfferBanners.map((bner,index) => {
           return <img key={index} src={bner} alt={bner} />
         })}
        </div>
      </section>
    );
}

export default OfferForYou
