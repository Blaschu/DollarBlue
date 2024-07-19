import React, {useEffect, useState} from "react";
import { getExchangeRates } from "../api";
import CurrencyCard from "./CurrencyCard";

const Currency = () => {
    const [exchangeRates, setExchangeRates] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRates = async () => {
            setLoading(true);
            try {
                const data = await getExchangeRates();
                setExchangeRates(data);
            }catch (error) {
                console.error('Error fetching exchange rates:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRates();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Cotización Actual</h1>
            {exchangeRates && (
                <>
                    <CurrencyCard title="Dólar Oficial" date={exchangeRates.oficial} />
                    <CurrencyCard title="Dólar Blue" data={exchangeRates.blue} />
                    <CurrencyCard title="Euro Oficial" data={exchangeRates.oficial} />
                    <CurrencyCard title="Euro Blue" data={exchangeRates.blue_euro} />
                </>
            )}    
        </div>
    );
};

export default Currency;
