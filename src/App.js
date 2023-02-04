import axios from "axios";
import React, {useState} from 'react';
import ListDetails from "./components/ListDetails";
import './index.css';

function App() {
  const [keyWord, setKeyWord] = useState("");

  const [result, setResult] = useState(null);

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";


  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      setResult(res.data[0]);
      console.log('res data [0] ', res.data[0]);
    } catch (e) {
      console.log(e)
    }
  }

  function handleClear() {
    setKeyWord('');
    setResult(null);
  }

  const  updateData = async (value) => {
    setKeyWord(value)
    const res = await axios.get(`${api}/${keyWord}`);
      setResult(res.data[0]);
      console.log('res data [0] changed ', res.data[0]);
  }

  return (
    <div className="App">
      <input value={keyWord} onChange={(e) => setKeyWord(e.target.value) }/>

      <button className="button" type="submit" onClick={handleSearch}>
        Search
      </button>

      <button className="button" type="submit" disabled={!result} onClick={handleClear}>
        Clear
      </button>

      {result && <ListDetails
         updateData={updateData}
         word={result.word}
         phonetics={result.phonetics}
         meanings={result.meanings}
        />}
    </div>
  );
}

export default App;
