"use client"
import React, {useState} from 'react';
import ExchangeItem from "@/components/Exchange/ExchangeItem";
import {Input} from "@nextui-org/input";

const ExchangeList = ({list}) => {
    const [renderExchanges, setRenderExchanges] = useState(list.slice(0,4));

    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value.toUpperCase());
        if(!value)
            return setRenderExchanges(list.slice(0,4));

        const filterd = list.filter(exchange => exchange.name.toUpperCase().includes(value.toUpperCase()))
        setRenderExchanges(filterd.slice(0,4));
    }
    return (
        <div >
            <Input type={"text"} placeholder={"Search for more..."} onChange={handleChange} className={"mt-2 focus"} />
            <div className="flex flex-wrap  ">
                {renderExchanges && renderExchanges.map((item) => (
                    <div key={item.name} className="w-full sm:w-1/2 lg:w-1/4 p-2">
                        <ExchangeItem name={item.name} imgUrl={item.imgUrl}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExchangeList;
