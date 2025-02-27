import React from "react";

function Pagination(props) {

    let{onPrevProp, pageNumProp, onNextProp} = props

    return(
        <div className="flex justify-center my-4">
            <div onClick={onPrevProp} className="border-2 border-blue-400 border-r-0 rounded-l-xl p-1">
                Prev
            </div>

            <div className="border-2 border-blue-400 p-1">
                {pageNumProp}
            </div>

            <div onClick={onNextProp} className="border-2 border-blue-400 border-l-0 rounded-r-xl p-1">
                Next
            </div>
        </div>
    )
}


export default Pagination