import React from 'react';

import Author from './Components/Author';
import Newsletter from './Components/Newsletter';
import LatestPosts from './Components/LatestPosts';

const sidebar = () => {
    return (
        <div id="sidebar">
            <Author />
            <Newsletter />
            <LatestPosts />
        </div>
    )
}

export default sidebar;
