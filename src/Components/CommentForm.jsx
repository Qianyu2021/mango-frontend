import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const CommentForm = ({blogId}) => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState([]);

    useEffect(()=> {
        fetchComments();
    }, [blogId]);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/comments?blogId=${blogId}`);
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {comment, name, rating, blogId };
        try {
            await axios.post('http://localhost:8080/api/comments', newComment);
            setComment('');
            setName('');
            setRating(0);
            fetchComments();
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
        //Handle form submission
        console.log('Comment:', comment);
        console.log('Name:', name);
        console.log('Rating:', rating);
    };

    return (
        <div className='comment-section'>
            <h2>Discussion & Rating</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)}
                    placeholder='Leave your comment here!' required
                    id=""></textarea>
                </div>
                <div className='form-group'>
                    <input type="text" value={name} coChange={(e)=> setName(e.target.value)}
                    placeholder="Name (shown with your comment)"/>
                </div>
                <div className='form-group rating'>
                    <label>Rate this post</label>
                    {[1, 2, 3, 4, 5].map((star) => {
                        return (  
                        <span
                            className='start'
                            style={{
                            cursor: 'pointer',
                            color: rating >= star ? 'gold' : 'gray',
                            fontSize: `35px`,
                            }}
                            onClick={() => {
                            setRating(star)
                            }}
                        >
                            {' '}
                            ★{' '}
                        </span>
                        )
                        })}
                </div>
            </form>
            <div className="comments-list">
                {comments.map((c) => (
                    <div key={c.id} className="comment">
                        <p><strong>{c.name}</strong> ({c.rating} stars):</p>
                        <p>{c.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CommentForm;

