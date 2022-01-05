import React from 'react'
import { Consumer } from '../../context'
import Loader from '../layout/Loader'

const Tracks = () => {
    return (
        <Consumer>
            {value => {
                const { track_list } = value;
                if (track_list === undefined || track_list.length === 0) {
                    return <Loader />;
                } else {
                    return (
                        <>
                          <h3></h3>  
                        </>
                    )
                }
            }}
        </Consumer>
    )
}

export default Tracks
