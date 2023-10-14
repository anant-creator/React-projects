import React, {useState, useEffect} from "react";
import Loading from "./Loading";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  const fetchData = async() => {
    const response = await fetch(url);
    const newJobs = await response.json();
    console.log(newJobs);
    setData(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Loading/>;

  return <section className='jobs-center'>
  {/* btn container */}
  <BtnContainer
    data={data}
    currentItem={currentItem}
    setCurrentItem={setCurrentItem}
  />
  {/* job info */}
  <JobInfo data={data}
   currentItem={currentItem}
   />
</section>;
};
export default App;
