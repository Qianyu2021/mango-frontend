import axiosInstance from '../api/axiosInstance';
import React, {  useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('http://localhost:8080/api/blogposts');
                setPosts(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);
    
          return (
              <div className="menu">
                  <h1>other posts</h1>
                  {posts.map((post) => (
                      <div className="post" key={post.blogId}>
                        
                          <h2>{post.blogTitle}</h2>
                          <Link to={'/recipes/' + post.blogId} >Read More</Link>
                      </div>
                  ))}
              </div>
          );
    };

    export default Menu;





