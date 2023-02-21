import { useContext, useEffect, useState } from "react";
import { APIKEY } from "../context/Index";
import Carusel from "../Components/AliceCarusel/AliceCarusel"
import { Container } from "react-bootstrap";
import TypeTitle from "../Components/TypeTitle/TypeTitle";


function Home() {
    const api_key = useContext(APIKEY)
    const [trends, setTrends] = useState([])
    const [totalPage, setTotalPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getTrendsMovie()
    }, [currentPage])

    async function getTrendsMovie() {
        await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=1
        `)
            .then(res => res.json())
            .then(data => {
                setTrends(data.results)
            })
            .catch(err => console.log(err))

    }
    return(
        <Container>
            <div className="main">
                <TypeTitle title="Тренды"/>
                <Carusel content={trends}/>
            </div>
        </Container>
    )
}

export default Home