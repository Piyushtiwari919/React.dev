const Shimmer = () =>{
    return(
        <div className="shimmer-container m-4 flex justify-center flex-col">
            <div className="shimmer-search-container mt-6">
                <div className="shimmer-search-box border-amber-700 border-2 w-64 p-4 rounded-xl">
                    <div className="shimmer-design-search w-36 h-3 rounded-2xl bg-[#d9d9d9]"></div>
                </div>
            </div>
            <div className="shimmer-filter-box flex justify-center items-center m-3 p-2">
                <button className="shimmer-filter-btn w-32 p-3 m-3 border-cyan-700 border-2 rounded-lg">
                    <div className="shimmer-design-btn w-22 h-3 rounded-2xl bg-[#d9d9d9]"></div>
                </button>
            </div>
            <div className="shimmer-res-container flex gap-3 my-1 flex-wrap">
                {
                    ["a","b","d","e","f","g","h","i","j","k"].map((element) => {
                        return(
                            <div className="shimmer-res-card h-62 rounded-lg min-w-54 m-2 p-4" key={element}>
                                <img className="shimmer-res-logo h-36 bg-[#d9d9d9] min-w-48 rounded-md mb-2"/>
                                <h3 className="shimmer-res-name w-28 ml-1 h-3 rounded-2xl bg-[#d9d9d9] mt-4 mb-2"></h3>
                                <h4 className="shimmer-res-h4 w-28 ml-1 h-3 rounded-2xl bg-[#d9d9d9] mb-2"></h4>
                                <h4 className="shimmer-res-h4 w-28 ml-1 h-3 rounded-2xl bg-[#d9d9d9] mb-2"></h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shimmer;