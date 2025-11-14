import { useState } from "react";
import { Activity } from "react";
import ItemList from "./ItemList.js";

const RestaurantCategory = (props)=>{
    const {data, showItems, setShowIndex, setHideIndex} = props;
    // const [showList, setShowList] = useState(false);
    const handleClick = ()=>{
        // setShowItems(!showItems);
        if(!showItems){
            setShowIndex()
        }
        else{
            setHideIndex()
        }
    }
    return(
        <div>
            <div className="w-9/12 bg-gray-100 mx-auto my-4 p-4 shadow-lg">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    <h1 className="text-lg font-medium">{data?.title} ({data?.itemCards?.length})</h1>
                    {showItems ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                </div>
                <Activity mode={showItems ? 'visible' : 'hidden'}>
                    <ItemList items={data.itemCards}/>
                </Activity>
            </div>
        </div>
    )
}

export default RestaurantCategory;