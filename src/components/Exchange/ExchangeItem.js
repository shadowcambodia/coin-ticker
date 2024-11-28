"use client"
import React from 'react';
import {API_URL} from "@/constant/Constant";
import {Button} from "@nextui-org/button";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Image} from "@nextui-org/image";

const ExchangeItem =({className,name,imgUrl}) =>{

    const exportTicker = (exchange,symbolType) => {
        window.location.href =`${API_URL}/scanner/export?exchange=${name}&symbolType=${symbolType}`;
    }

    return (
        <Card className={className}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{name}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt={`he`}
                    className="object-cover rounded-xl"
                    src={`${API_URL}${imgUrl}`}
                    // src={`https://nextui.org/images/hero-card-complete.jpeg`}
                    width={400}
                    height={250}

                />
            </CardBody>
            {/*<img src={`${API_URL}${imgUrl}`} alt={`${name}`} width={400} height={400}  />*/}
            <CardFooter>
                <div className={"flex gap-2 justify-end w-full"}>
                    <Button color="primary" variant={"shadow"} onClick={()=>exportTicker(name,'SPOT')}>SPOT</Button>
                    <Button color="primary" variant={"shadow"} onClick={()=>exportTicker(name,'PERPETUAL')}>PERPETUAL</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ExchangeItem;