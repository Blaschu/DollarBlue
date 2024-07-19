import React from "react";

const CurrencyCard = ({ title, data }) => {
    const {value_buy, value_sell, value_avg } = data || {};

    return (
        <div>
            <h3>{title}</h3>
            <p>Promedio: ${value_avg ? value_avg.toFixed(2) : 'N/A'}</p>
            <p>Compra: ${value_buy ?? 'N/A'}</p>
            <p>venta: ${value_sell ?? 'N/A'}</p>
        </div>
    )
}

export default CurrencyCard;