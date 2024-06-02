/*
import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


const Write = () => {
    const [value, setValue] = useState('');
    const [cat, setCat] = useState('');
    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Title" />
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
                    <input style={{display:"none"}} type="file" id="file" name=""/>
                    <label className="'file" htmlFor="file">Upload File</label>
                    <button>Save as a Draft</button>
                    <button >Publish</button>
                </div>
                <div className="item"> 
                    <h1>Category</h1>
                    <div className="cat">
                        <input 
                            type="radio" 
                            checked={cat === "recipes"} 
                            name="cat"
                            value="recipes"
                            id="recipes"
                          />
                            <label htmlFor="recipes">Recipes</label>
                    </div>
                    <div className='cat'>
                        <input 
                            type="radio" 
                            checked={cat === "hiking"} 
                            name="cat"
                            value="hiking"
                            id="hiking"
                           />
                            <label htmlFor="hiking">Hiking</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write
*/