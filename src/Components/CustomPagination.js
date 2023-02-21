import { Pagination } from "@mui/material"
import { useNavigate } from "react-router"

function CustomPagination({totalPage, setCurrentPage, currentPage}) {
    const navigate = useNavigate()
    function changeCurrentPage(e) {
        if(window.scrollY >0){
            window.scroll(0, 0)
        }
        navigate(`/trends/${e.target.textContent}`)
    }
    
    return(
        <div className="pagination">
            <Pagination 
                onChange={(e) => {
                    setCurrentPage(e.target.textContent)
                    changeCurrentPage(e)
                }}
                defaultPage={currentPage}
                count={totalPage} 
                color="primary" 
            />
        </div>
    )
}   
export default CustomPagination