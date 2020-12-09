import React from 'react'
import { Link } from 'react-router-dom'
import './search.scss'

function ResultsSearch ({ results }) {
    return (
        <Link to={ results.link && results.link } className="results-search">
            {
                results.image && <img src={ results.image } />
            }
            <p>{ results.title }</p>
        </Link>
    )
}
export default ResultsSearch