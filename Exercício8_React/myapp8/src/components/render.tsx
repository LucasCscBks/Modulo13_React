import ButtonAddProduct from "./buttons/addbutton";
import ButtonProducts from "./buttons/showproductsbutton";
import TableProducts from "./tableproducts";
import Input from "./input";
import useCustomHooks from "./hooks/usehooks";
import { createContext } from "react";
import Results from "./results";

export const AppContext = createContext(undefined as any);

function Render() {
    const {addProducts, showProducts,totalValue, prices, setPrices, totalPrices, setTotalPrices, 
    prices2, count,productsCartResult, verify} = useCustomHooks();

    return (
    <AppContext.Provider value={
        {totalValue, prices, setPrices, totalPrices, setTotalPrices, prices2, productsCartResult, 
        count, verify}
        }>
        <ButtonAddProduct func={addProducts}/>
        <ButtonProducts func={showProducts}/>
        <Input />
        <TableProducts />
        <Results />
    </AppContext.Provider>
    )
}

export default Render