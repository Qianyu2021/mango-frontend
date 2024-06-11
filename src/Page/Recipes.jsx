import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axiosInstance from '../api/axiosInstance';
import { Container, Row, Col } from 'react-bootstrap';
import milkbread from "../image/milkbread.jpg";


const Recipes = ({blogId}) => {
    const [posts, setPosts] = useState([]);
    const [pictures, setPicture] = useState("");

    const cat = useLocation().search

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('http://localhost:8080/api/blogposts' + cat);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]); 

    const getImagePath = (imageName) => {
        try {
            return require(`../image/${imageName}`);
        } catch (err) {
            console.log(`Error loading image ${imageName}: `, err);
            return null;
        }
    };

    return (
          <div className = "posts-container">
              {posts.map(post => (
                   <div className="post" key = {post.blogId}>
                   <img src={getImagePath(post.imageUrl)}  // Use dynamic image URL
                        alt="food_picture"/>
                          <div className="content">
                              <Link to={`/recipes/${post.blogId}`}>
                                  <h3>{post.blogTitle}</h3>
                              </Link>
                              <p>{post.description} </p>                    
                          </div>
                      </div>
              ))}

          </div>
  
    );
  };

  export default Recipes;

        
