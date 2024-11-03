import Link from "next/link"
Link
import Image from "next/image"

const Suzukialto =()=>{
    return(
        <div className="bg-blue-100 items-center text-center justify-center h-screen">
            <h1 className="text-center justify-center underline font-semibold text-2xl py-10">
                Suzuki_Alto 2024 Price in Pakistan, Images, Reviews & Specs
            </h1>

            <Image 
                className="justify-center h-60 w-70 mx-auto my-18"
                src="/Suzuki_Alto.png"
                alt=""
                width={280} 
                height={200}/>

    <div className="bg-blue-100 flex flex-col items-center text-center px-4 py-4">
        <h2 className="font-normal text-2xl mb-4">Vehicle Description</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nihil quae unde optio, non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat laborum. 
        Deleniti quaerat aperiam optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nihil quae unde optio, non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat laborum. 
        Deleniti quaerat aperiam optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Fugit assumenda nihil quae unde optio, non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat laborum. Deleniti quaerat aperiam optio.
        
        <p className="text-green-600 text-2xl font-semibold">PKR 23, 00, 000 lacs</p>
        <Link href="/form">
            <button className="bg-blue-800 text-white py-2 px-6 my-6 w-38 h-10 rounded-md">
                Make Payment
            </button>
        </Link>
    </div>
    </div>

);
};

        

export default Suzukialto