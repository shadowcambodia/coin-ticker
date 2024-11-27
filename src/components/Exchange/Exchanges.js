import React,  from 'react';
import {API_URL} from "@/constant/Constant";
import ExchangeList from "@/components/Exchange/ExchangeList";

const fetchExchanges = async () => {
        const res = await fetch(`${API_URL}/scanner/exchanges`)
    if(!res.ok)
        throw new Error('Failed to fetch data');
    return res.json();

}

const Exchanges = async () => {
    const data =await fetchExchanges();
    let exchanges =data.data;
    return (
        <ExchangeList list={exchanges}/>
    );
};

export default Exchanges;
