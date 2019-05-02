import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681" />
            {props.message}
            <div>
                <span>like {props.cnt}</span>
            </div>
        </div>
    );
}

export default Post