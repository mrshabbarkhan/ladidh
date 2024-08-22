import { Tranding_Products } from "../../utils/utils"
import Card from "../Cart/Card"

function TrendProducts() {
      const navigateToProductList = "/product-details";
    return (
        <section className="mb-20">
            <h1 className="text-lg font-medium mb-3 mt-2">Product on Trend</h1>
            <div className="flex gap-5 overflow-x-auto w-full ">
                {Tranding_Products.map((dts,index) => {
                    return <Card
                        key={index}
                        img={dts.img}
                        pack={dts.pack}
                        tittle={dts.tittle}
                        price={dts.price}
                        oldPrice={dts.oldPrice}
                        redirect={navigateToProductList}
                    />
                })}
            </div>
        </section>
    )
}

export default TrendProducts
