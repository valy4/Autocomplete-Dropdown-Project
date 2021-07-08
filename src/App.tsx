import "./App.css";
import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@material-ui/core";

function App() {
  const [search, setSearch] = useState("");
  const [items, setListItems] = useState([])
console.log(search)

function getItems(){
  fetch(`http://localhost:3000/suggestions.json`)
  .then((response)=>response.json())
  .then((data)=>{
    setListItems(data)

console.log(data)
  })

}

  return (
    <div className="App">
      <h1>Autocomplete Dropdown App!</h1>
      <TextField
        size="small"
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyPress={getItems}
      ></TextField>
      <Button size="medium" variant="contained">
        Search
      </Button>
    </div>
  );
}

export default App;
