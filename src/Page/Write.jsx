
import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";
//import moment from "moments";
const baseURL = process.env.REACT_APP_API_BASE_URL;

const Write = () => {
  
    const [file, setFile] = useState(null);

    const state = useLocation().state;
    const [value, setValue] = useState(state?.blogTitle)
    const [blogTitle, setblogTitle] = useState(state?.description|| "");
    const [description, setDescription] = useState(state?.content || "");
    
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            state
            ? await axiosInstance.put("/blogposts/${state.id}", {
                blogTitle,
                description,
                content: value,
            })
            : await axiosInstance.post("/write", {
                blogTitle,
                description,
                content: value,
            });
            navigate("/recipes")
        } catch(err){
            console.log(err);
        }
    };


   // const [cat, setCat] = useState('');
   /* 
   const upload = async () => {
     try {
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post("/upload", formData);
        return res.data;
        } catch (err) {
        console.log(err);
        }
  };
  */

   return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Title" onChange={(e)=> setblogTitle(e.target.value)}/>
                <input type="text" placeholder="Description" onChange={(e)=> setDescription(e.target.value)}/>
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="write_menu">
                <div className="item"> 
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{display:"none"}} type="file" id="file" name=""
            onChange={(e) => setFile(e.target.files[0])}/>
                    <label className="'file" htmlFor="file">Upload Image</label>
                    <div className="uploadBtn">
                        <button>Save as a Draft</button>
                        <button onClick={handleClick}>Publish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write
