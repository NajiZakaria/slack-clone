import React,{useState, useEffect} from 'react'
import VideoCard from './VideoCard/VideoCard'
import FlipMove from 'react-flip-move'
import axios from '../Api/axios'
import  './Results.css'

function Results({selectedOption}) {

    const [movies ,setMovies]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request =await axios.get(selectedOption);
            setMovies(request.data.results)
            return request;
        } 
        fetchData();
    },[selectedOption])

    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie)=>
                    <VideoCard key={movie.id} movie={movie}/>
                )}   
            </FlipMove>
                 
        </div>
    )
}

export default Results;
