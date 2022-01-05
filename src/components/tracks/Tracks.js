import React from 'react'
import { Consumer } from '../../context'
import Loader from '../layout/Loader'
import Track from './Track'

const Tracks = () => {
    return (
        <Consumer>
            {value => {
                const { track_list, heading } = value;
                if (track_list === undefined || track_list.length === 0) {
                    return <Loader />;
                } else {
                    console.log(track_list);
                    return (
                        <>
                          <h3>{heading}</h3>
                           <div className="grid-col-2">
                               {track_list.map(item => (
                                   <Track key={item.track.track_id} track={item.track}/>
                               ))}
                           </div>
                        </>
                    )
                }
            }}
        </Consumer>
    )
}

export default Tracks
