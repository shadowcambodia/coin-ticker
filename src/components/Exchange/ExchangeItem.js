"use client"
import React from 'react';
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {API_URL} from "@/constant/Constant";

const ExchangeItem =({className,name,imgUrl}) =>{

    const exportTicker = (exchange,symbolType) => {
        window.location.href =`${API_URL}/scanner/export/${name}_${symbolType}`;
    }

    return (
        <Card className={className}>
            <CardHeader>{name}</CardHeader>
            <CardContent>
                <img src={`${API_URL}${imgUrl}`} alt={`${name}`} width={400} height={400}  />
            </CardContent>
            <CardFooter>
                <div className={"flex gap-2"}>
                    <Button color="" onClick={()=>exportTicker(name,'SPOT')}>SPOT</Button>
                    <Button color="primary" onClick={()=>exportTicker(name,'PERPETUAL')}>PERPETUAL</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ExchangeItem;
