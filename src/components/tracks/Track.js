import React from 'react'
import { NavLink } from 'react-router-dom'

const Track = ({ track }) => {
    return (
        <div className='card'>
            <div className="card__image-container">
                <img className="card__image" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80" alt="" />
            </div>

            <svg className="card__svg" viewBox="0 0 800 500">

                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent" />
            </svg>

            <div className="card__content">
                <h3 className="card__title">{track.track_name}</h3>
                <p>{track.artist_name}</p>
                <p><strong>Album:</strong> {track.album_name}</p>
            </div>
        </div>
    )
}

export default Track
