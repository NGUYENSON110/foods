import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"


const Navbar = () => {
    return (
        <div className='flex'>
            {/* Left sidebar */}
            <div className='flex'>
                <div>
                    <AiOutlineMenu size={30} />
                </div>
                <h1>
                    Best <span>Eats</span>
                </h1>
            </div>

            <div className='flex'>
                <p>
                    Delivery
                </p>

                <p>
                    Pickup
                </p>

            </div>
        </div>
    )
}

export default Navbar;