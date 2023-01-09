
import { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/Navbar'
import './home.scss'
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(()=>{
    const getRondomLists = async () =>{
      try{
        const res = await axios.get(`lists${type ? "?type=" + type : " "}&${genre ? "&genre=" + genre : ""}`);
        setLists(res.data)
      } catch(err) {
        console.log(err)
      }
    };
    getRondomLists();
  }, [type, genre])
  return (
    <div className="home">
        <Navbar/>
         <Featured type={type} />
         <List/>
         <List/>
         <List/>
    </div>
  )
}

export default Home