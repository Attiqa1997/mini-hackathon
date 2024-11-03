import Link from "next/link"
Link
import React from "react"
export default function form(){ 
    return( 
        <div className=" bg-blue-50">
            <h1 className="text-3xl py-10 mt-7 font-semibold text-center upper-case">
                Enter your details
            </h1>
            <div>
                <form className=" mt-10 flex  flex-col gap-5 justify-center items-center border ">
                <input type="text" className="w-2/5 border gap-5 p-2 rounded-md my-3 "
                placeholder="Enter your name"/>
                <input type="email" className="w-2/5 border gap-5 p-2 rounded-md my-3"
                placeholder="Enter your email"/>
                <input type="number" className="w-2/5 border gap-5 p-2 rounded-md my-3"
                placeholder=" Card Number"/>
                <input type="text" className="w-2/5 border gap-5 p-2 rounded-md my-3"
                placeholder="Enter your Address"/>
                <Link href="/thankyou">
                <button className="py-2 px-7 rounded-lg bg-blue-800 text-white mt-5">Place your order</button>
                </Link>
                </form>
            </div>
        </div>

    )



}