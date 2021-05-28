import React from 'react'
import { Link } from 'react-router-dom'

function Description(props) {
    let {film}=props.location.state.film
    
    return (
        <div>
            <h1>{props.location.state.film.title} </h1>
            <div>
            <iframe width="560" height="315" src={props.location.state.film.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            
            </div>

            <Link to='/'>Home</Link>
        </div>
    )
}

export default Description
