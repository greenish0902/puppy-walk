import React from 'react';

const Comment = ({img, nickname, date, content}) => {
    return (
        <div className='comment-content'>
            <div className='comment-writer'>
                <div className='comment-profile-image'>{img}</div>
                <p>{nickname} <span>{date}</span></p>
            </div>
            <div className='comment-text'>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Comment;
