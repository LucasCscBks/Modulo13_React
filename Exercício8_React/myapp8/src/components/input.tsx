import { AppContext } from "./render";
import { useContext } from "react";

function Input() {

    const { setPrices } = useContext(AppContext);

    function onChange(event: any) {
        setPrices(event.target.value);
    }

    return (
        <input type="text" placeholder="Numero de parcelas" onChange={onChange}/>
    )
}

export default Input