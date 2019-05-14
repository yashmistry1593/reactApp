import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentWillMount() {
        console.log("Sdvsdvs")
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {

        const postItems = this.state.posts.map((post) => 
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )
        console.log(postItems)
        return (
            <div>
                <h1>HELLO REDUX</h1>
                {postItems}
            </div>
        )
    }
}
export default PostForm