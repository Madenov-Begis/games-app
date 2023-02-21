import { useEffect } from "react";
import CustomPagination from "../Components/CustomPagination";

function Movies() {
    
    useEffect(() => {
        getAllNovies()
    },[])

    async function getAllNovies() {
        await fetch(`https://api.themoviedb.org/3/movie/44?api_key=634d171bf36b02d573d8b4da07f2daa2&language=en-US`)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))
    }

    return(
        <div>
            <CustomPagination/>
        </div>
    )
} 
export default Movies