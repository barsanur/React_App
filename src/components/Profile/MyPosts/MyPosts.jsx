import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post cnt="4" message="Hi, how are you?" />
                <Post cnt="15" message="It's my first post"/>
            </div>
        </div>
    );
}

export default MyPosts