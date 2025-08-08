
import React from 'react';

function Navbar() {
    return (
        <div className="fixed bottom-0 w-full bg-black bg-opacity-70 text-white py-3 px-6 flex justify-around z-20">
            <span className="cursor-pointer hover:text-red-500">Home</span>
            <span className="cursor-pointer hover:text-red-500">Sign In</span>
            <span className="cursor-pointer hover:text-red-500">Help</span>
        </div>
    );
}

export default Navbar;
