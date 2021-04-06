import { React } from 'react';
import { Link } from 'react-router-dom'

function AllGifs(props) {
    return (
        <div>
            <Link to={`/detalle/${props.id}`}>
                <img src={props.gif} alt="gif" />
            </Link>
        </div>
    )
}

export default AllGifs;