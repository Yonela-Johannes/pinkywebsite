import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Feed.css'

import { client } from '../../../client';
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'
import { feedQuery } from '../../../utils/data';

function Feed() {
    const [pins, setPins] = useState(null)
    useEffect(() => {
        client.fetch(feedQuery)
        .then((data) => {
            setPins(data);
        })
    }, []);
    // if(loading) return <Spinner message="We are refreshing your data" />
    return (
        <div className="feed">
            {pins && <MasonryLayout pins={pins} />}
        </div>
    );
}

export default Feed