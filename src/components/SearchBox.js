const SearchBox = ()=>{
  return(
    <div className="search-box">
      <input type="text" placeholder="What are you looking for?" name="dishes-search"/>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}

export default SearchBox;