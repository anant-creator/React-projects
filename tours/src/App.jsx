import Loading from "./Loading";
import {React, useEffect, useState} from "react";
import Tours from './Tours';


const url = 'https://course-api.com/react-tours-project';


const App = () => {
  const [tours, setTours] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = () => {
    fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response; 
    })
    .then((data) => {
      setTours(data)
    })
    .catch((err) => {
      console.log('fetch data error', error);
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    })
}

useEffect(() => {
  fetchTours();
}, []);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (loading) return <Loading/>
  if (error) return <h2 style={{color:"red", textAlign: "center", margin: "0.5em 0"}}>page is facing a error please check log</h2>;
  if (tours.length === 0) return <main>
    <div className="title">
      <h2>No Tours Left</h2>
      <button type="button" style={{marginTop: "2em"}} className="btn" onClick={() => fetchTours()}>
        refresh
        </button>
    </div>
  </main>
  return <Tours tours={tours} removeTour={removeTour} />;
};

export default App;
