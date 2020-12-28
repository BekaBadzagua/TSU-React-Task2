import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/post'
import { Link } from 'react-router-dom'

function Posts(props) {

    let inputRef = useRef()
    let [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        if (props.posts === undefined)
            props.getPosts()
    })

    const clickHandler = (e) => {
        e.preventDefault()
        setSearchValue(inputRef.current.value)
    }


    let posts;
    if (props.posts) {
        let filteredPosts = props.posts.filter((post) => post.title.includes(searchValue))

        posts = filteredPosts.length > 0 ?
            filteredPosts.map((item) => (
                <div key={item.id} className="PostWrapper">
                    <Link to={"/posts/" + item.id}>
                        <h1>{item.title}</h1>
                    </Link>
                    <p>{item.body}</p>
                </div>
            ))
            :
            posts = <p>Couldn't find any post with given name..</p>
    }

    return (
        <div className="Posts">
            <div className="inputWrapper">
                <form>
                    <input type="text" placeholder="Post-Name" ref={inputRef} />
                    <input type="submit" value="Search" onClick={clickHandler} />
                </form>
            </div>

            {posts}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts.list
    }
}

const mapDispatchToProps = (disptch) => {
    return {
        getPosts: () => disptch(actions.get_posts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)