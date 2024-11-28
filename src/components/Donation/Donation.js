import React from 'react';
import {Snippet} from "@nextui-org/snippet";

const Donation = () => {
    return (
        <div className={"p-10 bg-white shadow-2xl"}>
            <h1 className={"text-xl text-center"}>
            Keep our platform alive with your support.</h1>
            <div className="flex flex-wrap gap-4 flex-col">
                <span>TRON TRC(20)</span>
                <Snippet size="lg" symbol={""}>TCg2uGBhVcjZeCrCPc5gmCtvGzsjTA9gZd</Snippet>

                Ethereum (ERC20)
                <Snippet size="lg" symbol={""}>0x71d2a351fda853e0e0d18f2b6740c1335cebbec2</Snippet>
            </div>
        </div>
    );
};

export default Donation;