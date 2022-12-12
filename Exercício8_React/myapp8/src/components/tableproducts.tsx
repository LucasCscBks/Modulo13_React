import { useContext } from "react";
import { AppContext } from "./render";

function TableProducts() {

    const { totalValue, prices2, totalPrices, verify } = useContext(AppContext);

    function TableHead() {
        return(
            <tr>
                <th>Valor total</th>
                <th>Total em parcelas</th>
                <th>Valor total = Total em parcelas ?</th>
            </tr>
        )
    }

    function TableBody() {
        return(
            <tr>
                <td>{totalValue}</td>
                <td>{prices2} parcelas de {totalPrices}</td>
                <td>{verify}</td>
            </tr>
        )
    }

    return (
    <table>
        <thead>
            <TableHead />
            <TableBody />
        </thead>
    </table>
    )
}

export default TableProducts