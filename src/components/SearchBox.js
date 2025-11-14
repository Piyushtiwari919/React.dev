const SearchBox = ()=>{
  return(
    <div className="m-2 p-2 flex items-center border-amber-800 border-2">
      <input type="text" placeholder="What are you looking for?" name="dishes-search"/>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}

export default SearchBox;