import React from "react";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center mt-12">
            <div className="w-10 h-10 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
        </div>
    )
}

export default Spinner;