import { useEffect, useState } from "react";

const productsArray = [{Name: "Teclado gamer",Price: 150.00,quantity: 5},
{Name: "Mouse gamer",Price: 123.00,quantity: 2},{Name: "Headset Maverick",Price: 345.50,quantity: 8},
{Name: "Memoria Ram Dell",Price: 240.00,quantity: 11}]

let result:any = [];

function useCustomHooks() {
    let [productsCart, setProductsCart] = useState({});
    let [productsCartResult, setProductsCartResult] = useState({});
    let [count, setCount] = useState(0);
    let [prices, setPrices] = useState(0);
    let [prices2, setPrices2] = useState(0);
    let [totalPrices, setTotalPrices] = useState(0);
    let [totalValue, setTotalValue] = useState(0);
    let [verify, setVerify] = useState("false");

    function addProducts() {
        if (count < productsArray.length) {
            result.push(productsArray[count])
            setProductsCart(result)
            if (count === 3) {
                setCount(count + 1)
            }
        }
        if (count < productsArray.length -1) {
            setCount(count + 1)
        }
        for (let i=0; i < result.length; i++) {
            setProductsCartResult(
            <div>
                <p>Adicionado: {result[i]["Name"]}</p>
                <p>Valor:{result[i]["Price"]}</p>
                <p>Quantidade: {result[i]['quantity']}</p>
            </div>
            )
        }
    }
    let soma = 0;

    useEffect( () => {
        for (let i=0; i < result.length; i++) {
            soma += result[i]["Price"] * result[i]["quantity"]
            setTotalValue(soma);
        }
        setTotalPrices(totalValue/prices)
        setPrices2(prices)
        if (totalValue === soma) {setVerify("true")}
    })

    function showProducts() {
        console.log(productsCart)
    }
    
    return {addProducts, productsCart, showProducts, totalValue, prices, setPrices,
         totalPrices, setTotalPrices, prices2, count, productsCartResult, verify}
}

export default useCustomHooks