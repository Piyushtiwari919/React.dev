import { MEDIA_URL } from "../utils/constants.js"
const ItemList = ({items}) =>{
    console.log(items)
    return(
        <div>
            {items.map((item)=>{
                return(
                    <div key={item.card.info.id} className="m-4 p-2 flex justify-between border-b-amber-200 border-b-2">
                        <div className="flex flex-col items-start w-9/12">
                            <span>{item.card.info.name}</span>
                            <span>Rs. {item.card.info.defaultPrice/100 || Number.parseInt(item.card.info.price/100) || 0}</span> {/* Do some tweeks in production - NaN*/}
                            {/*<span> {item.card.info.description || ""}</span>*/}
                        </div>
                        <div className="relative mb-4">
                            <img src={MEDIA_URL+item.card.info.imageId} className="w-28 rounded-lg"/>
                            <button className="border-cyan-600 border-2 top-22 right-5 text-white bg-orange-600 py-1 px-4 absolute rounded-xl cursor-pointer">Add</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;