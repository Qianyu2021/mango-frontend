import React from "react";  
import edit from "../image/edit.svg";
import mangologo from "../image/mangologo.webp";
import deletebutton from "../image/deletebutton.svg";
import {Link, useLocation, useNavigate } from "react-router-dom"
import Menu from "../Components/Menu";


const SinglePost = () => {
    return (
        <div className="singlepost">
            <div className="posts-content">
                <img src={mangologo} alt="Logo" className="logo"/>
                <div className="content">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className="info">
                        <div className="postDate">
                            <p>Posted today</p>
                        </div>
                        <div className="edit">
                            <Link to={'/write?edit=1'}>
                                <img src={edit} alt="Edit"/>
                            </Link>
                            <img src={deletebutton} alt="Delete"/>
                        </div>
                    </div>
                  
                    <p>A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</p>
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default SinglePost