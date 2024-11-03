import app from "next/app";
import Link from "next/link";
import link from "next/link";
import React from "react";

export default function Thankyou (){
return(
    <div>
        <div className="justify-center items-center flex flex-col py-56 ">
            <h1 className="text-6xl font-extrabold text-blue-700  ">Thank you for shopping!!!</h1>
            <p className=" text-black text-2xl py-4"> Your order will be delivered in 3 business days </p>
        </div>
    </div>
)
}
