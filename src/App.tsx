import React from 'react';
import axios from "axios";

const request = () => {
  axios.get('https://api.themoviedb.org/3/movie/550?api_key=06738fd5d9c4c2cfaabec88c04400226&language=de').then(res => console.log(res))
}

function App() {
  return (
    <div>
<button onClick={request}>test</button>
    </div>
  );
}

export default App;
