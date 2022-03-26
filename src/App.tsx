import React from 'react';
import axios from "axios";
import {createRequestToken} from "./API/authAPI";

const history = useHis  

const request = async () => {
    const res = await createRequestToken()
    console.log(res)
}

function App() {
  return (
    <div>
<button onClick={request}>test</button>
    </div>
  );
}

export default App;
