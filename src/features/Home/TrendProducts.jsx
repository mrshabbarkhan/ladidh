import { useSelector } from "react-redux";
import { Tranding_Products } from "../../utils/utils"
import Card from "../Cart/Card"

function TrendProducts() {
    const navigateToProductList = "/product-details";
    const { products } = useSelector((state) => state.adminDashboard);
    return (
        <section className="mb-12">
            <h1 className="text-lg font-medium mb-3 mt-2">Product on Trend</h1>
            <div className="flex gap-5 overflow-x-auto w-full ">
                {products.map((dts,index) => {
                    return <Card
                        key={index}
                        id = {dts.id}
                        img={dts.img}
                        pack={dts.pack}
                        tittle={dts.title}
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
