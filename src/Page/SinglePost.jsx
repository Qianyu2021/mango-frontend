import React, { useEffect, useState } from "react";  
import edit from "../image/edit.svg";
import mangologo from "../image/mangologo.webp";
import deletebutton from "../image/deletebutton.svg";
import {Link, useLocation, useNavigate, useParams, } from "react-router-dom"
import Menu from "../Components/Menu";
import axiosInstance from '../api/axiosInstance';
import CommentForm from '../Components/CommentForm';

const SinglePost = () => {
    const [post, setPost] = useState({});
    const {id:blogId} = useParams(); // show this is 
    const location = useLocation();
    const navigate = useNavigate();

    useEffect( ()=> {
        const fetchPost = async() => {
            try {
                const res = await axiosInstance.get(`http://localhost:8080/api/blogposts/${blogId}`)
                setPost(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPost();
    }, [blogId]);

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className="singlepost">
            <div className="posts-content">
                {post.topImageUrl && (
                    <img
                        src={post.topImageUrl}
                        alt={post.blogTitle}
                        className="post-image"
                    />
                )}
                <div className="content">
                    <h1>{post.blogTitle}</h1>
                    <div className="info">
                        <div className="postDate">
                            <p>Posted on {post.createdDate}</p>
                        </div>
                        <div className="edit">
                            <Link to={'/write?edit=1'}>
                                <img src={edit} alt="Edit"/>
                            </Link>
                            <img src={deletebutton} alt="Delete"/>
                        </div>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
                </div>
                <CommentForm blogId={blogId}/>
            </div>
            <Menu />
        </div>
    )
}
export default SinglePost