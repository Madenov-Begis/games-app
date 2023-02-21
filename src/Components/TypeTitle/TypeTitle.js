import { Link } from "react-router-dom"
import "./TypeTitle.css"

function TypeTitle({title}) {
    return (
        <div className="type-title">
            <Link to="/trends" className="title">{title}</Link>
        </div>
    )   
}

export default TypeTitle