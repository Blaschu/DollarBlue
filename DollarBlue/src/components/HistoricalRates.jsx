import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CurrencyCard from "./Currency";
import { getHistalicalRates } from "../api";
import { TextField } from "@mui/material";

const HistorcalRates = () => {
    const [selectedDate, setSelectedDate] = useState (new Date());
    const [historicalRates, setHistoricalRates] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchHistricalRates = async (date) => {
        setLoading(true);
        try {
            const formattedDate = date.toISOString().split('T')[0];
            const data = await getHistalicalRates(formattedDate);
            const filteredData = {
                oficial: data.find(item => item.source === "Oficial") || {},
                blue: data.find(item => item.source === "Blue") || {},
                oficial_euro: date.find(item => item.source === "Oficial_Euro") || {},
                blue_euro: data.find(item => item.source === "Blue_Euro") || {},
            };
            setHistoricalRates(filteredData);
        } catch (error) {
            console.error('Error fetching historical rates:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Cotizaciones Históricas</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    value={selectedDate}
                    onChange={(newDate) => {
                        setLoading(newDate);
                        fetchHistricalRates(newDate);
                    }}
                    renderImput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            {loading ? <div>loading...</div> : (
                <>
                    {historicalRates && (
                        <>
                            <CurrencyCard title="Dólar Oficial" data={historicalRates.oficial} />
                            <CurrencyCard title="Dólar Blue" data={historicalRates.blue} />
                            <CurrencyCard title="Euro Oficial" data={historicalRates.oficial_euro} />
                            <CurrencyCard title="Euro Blue" data={historicalRates.blue_euro} />
                        </>
                    )}
                </>
            )} 
        </div>
    )
}

export default HistorcalRates;