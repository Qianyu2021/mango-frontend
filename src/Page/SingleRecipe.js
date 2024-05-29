import React from "react";  
import edit from "../image/edit.svg";
import mangologo from "../image/mangologo.webp";
import deletebutton from "../image/deletebutton.svg";
import {Link, useLocation, useNavigate } from "react-router-dom"


const SingleRecipe = () => {
    return (
        <div className="singlerecipe">
            <div className="content">
                <img src={mangologo} alt="Logo" />
                <div className="postDate">
                    <p>posted today</p>
                </div>
                <div className="edit">
                    <Link to={'/write?edit=1'}>
                        <img src={edit} alt="Edit"/>
                    </Link>
                    <img src={deletebutton} alt="Delete"/>
                </div>
            </div>
            <h1>"Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!"</p>
            
            <div className="menu">m</div>
        </div>
    )
}

export default SingleRecipe