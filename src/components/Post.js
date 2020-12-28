import { Component } from 'react'
import { connect } from 'react-redux'
import * as postActions from '../store/actions/post'
import * as commentActions from '../store/actions/commets'

class Post extends Component {
    state = {
        id: null,
        comments: null
    }

    componentDidMount() {
        const urlId = this.props.match.params.id
        if (this.state.id !== urlId) {

            this.props.getPost(urlId)
            this.props.getComments(urlId)

            this.setState({
                id: urlId
            })
        }
    }

    render() {
        const comments = this.props.comments ?
            this.props.comments.map((comment) => (
                <div key={comment.id} className="comment">
                    <h1>name: {comment.name}</h1>
                    <h2>email: {comment.email}</h2>
                    <p>{comment.body}</p>
                </div>
            )) : null


        return (
            <div className="Post">
                {this.props.post ? (
                    <div className="PostWrapper">
                        <h1>{this.props.post.title}</h1>
                        <p>{this.props.post.body}</p>
                    </div>
                ) : null}


                <div className="Comments">
                    {comments}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        post: state.posts.currentPost,
        comments: state.comments.list
    }
}

const mapDispatchToProps = (disptch) => {
    return {
        getPost: (id) => disptch(postActions.get_post(id)),
        getComments: (id) => disptch(commentActions.get_comments(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)
