import React, { Component } from 'react';
import './Posts.css';

const url = 'https://ecwp.000webhostapp.com/wp-json/wp/v2/posts?_embed';

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                console.log('Result: ', result)
                this.setState({
                    posts: result,
                })
            })
    }

    render() {
        const posts = this.state.posts.map((post) => {
            return (
                <div className="post-item" key={post.id}>
                    <img src={post._embedded['wp:featuredmedia'][0].source_url} alt="coolt" />
                    <h2>
                        <a href={post.link} alt={post.slug}> {post.title.rendered} </a>
                    </h2>
                    <p className="item-content">
                        {post.content.rendered}
                    </p>
                    <div className="item-more">
                        <a href={post.link}>Continue Reading</a>
                    </div>
                    <div className="item-footer">
                        <div className="footer-left">
                            By <span><a href="http://hotmail.com">John Doe</a></span> on September 2, 2018.
                    </div>
                        <div className="footer-right">
                            <ul className="footer-social">
                                <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                <li><a href=""><i className="fa fa-pinterest"></i></a></li>
                                <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                                <li><a href=""><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            )
        })
        return (
            <div>
                {posts}
            </div >
        )
    }
}

export default Posts;
