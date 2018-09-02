import React, { Component } from 'react';
import './LatestPosts.css';

const url = 'https://ecwp.000webhostapp.com/wp-json/wp/v2/posts?_embed';

class LatestPosts extends Component {
    state = {
        latestposts: []
    };

    componentDidMount() {
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                console.log('Result: ', result)
                this.setState({
                    latestposts: result,
                })
            })
    }

    render() {
        const latestposts = this.state.latestposts.map((post) => {
            return (
                <div className="latestpost-item" key={post.id}>
                    <a href={post.link} alt={post.slug}>
                        <img src={post._embedded['wp:featuredmedia'][0].source_url} alt="coolt" />
                    </a>
                    <h4>
                        <a href={post.link} alt={post.slug}> {post.title.rendered} </a>
                    </h4>
                    <p>September 2, 2018</p>
                </div>
            )
        })
        return (
            <div className="widget-container">
                <div className="latestposts-widget">
                    <h3>Latest Posts</h3>
                    {latestposts}
                </div>
            </div >
        )
    }
}

export default LatestPosts;
