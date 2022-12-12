import { useContext } from "react";
import { AppContext } from "./render";

function Results() {
    const { productsCartResult, count } = useContext(AppContext);

    if (count === 0) return <></>;
    return (
        <div>
            {productsCartResult}
        </div>
    )
}

export default Results