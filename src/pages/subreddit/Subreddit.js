import React from 'react';
import { useParams } from "react-router-dom";

const Subreddit = () => {
    const { subredditId } = useParams();
    return (
        <div>
         <h1>id is {subredditId}</h1>
        </div>
    );
};

export default Subreddit;