
import {useParams} from "react-router-dom";


export function ProductPage(){

    const {id} = useParams(); 

    return(
        <h1>Product page: Id == {id}</h1>
    )
    
}