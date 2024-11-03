import App from "next/app";
import Link from "next/link";
import React from "react";
export default function Navbar(){
    return(
        <nav className='flex bg-black h-24 text-white'>



            <ul className="flex px-4 nav-links" />
            <img  className="h-10 my-12" src="pakwheels.png"></img>

        <div className="py-16 px-8"><a href="/Used Cars">Used Cars</a></div>
<div className="py-16 px-8"><a href="/New Cars">New Car</a></div>
<div className="py-16 px-8"><a href="/Bikes">Bikes</a></div>
<div className="py-16 px-8"><a href="/Auto Store">Auto Store</a></div>
<div className="py-16 px-8"><a href="/Videos"></a>Videos</div>
<div className="py-16 px-8"><a href="/Forums"></a>Forums</div>
<div className="py-16 px-8"><a href="/Blog"></a>Blog</div>
<div className="py-16 px-8"><a href="/More"></a>More</div>
<button className= "bg-red-800 rounded-lg w-40 h-10 my-12 px-6 mx-6"><a href="/Post an Ad">Post an Ad</a></button>
        </nav>
    )
}