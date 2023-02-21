import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { Wrap } from "../Components/Wrap"
import { APIKEY } from "../context/Index"

function SinglePage() {
    const api_key = useContext(APIKEY)
    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getSinglePage()
    },[]) 

    async function getSinglePage() {
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovie(data)
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="main">
            <Wrap bg={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`}></Wrap>
        </div>
    )
}

export default  SinglePage