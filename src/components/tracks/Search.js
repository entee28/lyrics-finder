import { useState } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import searchIcon from "../../res/search-solid.svg"

const Search = () => {
    const [trackTitle, setTrackTitle] = useState('');

    const findTrack = (e) => {
        e.preventDefault();

        axios.get(`http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${trackTitle}&page_size=3&page=1&s_artist_rating=desc&s_track_rating=desc&apikey=9de0259a0b660a3ce82f1c903e01fc64`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err))
    }

    return (
        <Consumer>
            {value => {
                return (
                    <form onSubmit={findTrack}>
                        <input type="text"
                            name="trackTitle"
                            id="trackTitle" value={trackTitle}
                            onChange={(e) => setTrackTitle(e.target.value)}
                            placeholder="Just enter anything..."
                            autoComplete="off" />
                        <button type="submit">
                            <img src={searchIcon} alt="search" className="icon" />
                        </button>
                    </form>
                )
            }}
        </Consumer>
    )
}

export default Search
