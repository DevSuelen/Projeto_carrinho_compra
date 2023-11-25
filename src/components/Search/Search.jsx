// import { useState } from 'react'
import "./Search.css";

function Search() {
  const [count, setCount] = useState("")

  const buscar = (e)=>{
    e.preventDefault();
    alert(search)
  }

  return (
    <form className="d-flex" role="search" onSubmit={buscar}>
      <input
        className="form-control me-2"
        type="search"
        name="search"
        placeholder="Search"
        aria-label="Search"
        value
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
