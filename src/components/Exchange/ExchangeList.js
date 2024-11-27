"use client"
import React, {useState} from 'react';
import ExchangeItem from "@/components/Exchange/ExchangeItem";
import {Input} from "@/components/ui/input";

const ExchangeList = ({list}) => {
    const [renderExchanges, setRenderExchanges] = useState(list.slice(0,3));

    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value.toUpperCase());
        if(!value)
            return setRenderExchanges(list.slice(0,3));

        const filterd = list.filter(exchange => exchange.name.toUpperCase().includes(value.toUpperCase()))
        setRenderExchanges(filterd.slice(0,3));
    }
    return (
        <div >
            <Input type={"text"} placeholder={"Exchange name"} onChange={handleChange} className={"mt-2 focus"} />
            <div className="flex flex-wrap justify-center ">
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
