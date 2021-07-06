
import './App.css';
import react, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
// import Autocomplete from '@material-ui/lab/Autocomplete';


function App() {
  const [search, setSearch] = useState("")


  return (
    <div className="App">
      <h1>Autocomplete Dropdown App!</h1>
      <TextField size="small" id="outlined-basic" label="Search..." variant="outlined" onChange={(event) => setSearch(event.target.value)}></TextField>
      <Button size="medium" variant="contained" >Search</Button>

    </div>
  );
}

export default App;
