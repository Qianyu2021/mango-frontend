import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useCallback } from "react";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";
//import moment from "moments";
const baseURL = process.env.REACT_APP_API_BASE_URL;

const Write = () => {
  
    const state = useLocation().state;
    const [value, setValue] = useState(state?.blogTitle)
    const [blogTitle, setblogTitle] = useState(state?.description|| '');
    const [description, setDescription] = useState(state?.content || '');
    const [file, setFile] = useState(null);
    //const [imageUrls, setImageUrls] = useState([]);
    const reactQuillRef = useRef(null);    
    const navigate = useNavigate();


    //function to handle the image container of react-quill. 
    //input file element and trigger a click() to open the file import window
        const imageHandler = useCallback(() => {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();

            input.onchange = async () => {
                const file = input.files ? input.files[0] : null;
                if (!file) {
                    alert('no file')
                    return;
                }

                if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
                    alert('Please select a PNG or JPEG image file.');
                    return;
                }

                const url = await handleFileUpload(file);
                const quill = reactQuillRef.current;
                if(quill) {
                    //this part is to determin the postion of the image tag and assign it with the URL returned
                    const range = quill.getEditorSelection();
                    range && quill.getEditor().insertEmbed(range.index, "image", url);
                }
               // setImageUrls([...imageUrls, url]);
            }
        }, []);

    const handleFileUpload = async (file) => {
     
        const formData = new FormData();
        formData.append("file", file);

        try {
           
            const response = await axiosInstance.post("blogposts/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response)
            return response.data;
            
        } catch (err) {
            console.log('Error uploading image:', err);
            alert('Failed to upload image.');
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            let topImageUrl = null
            if (file) {
               
                topImageUrl = await handleFileUpload(file);
                console.log(topImageUrl)
                if (!topImageUrl || topImageUrl==="") {
                    console.log("it returns here!")
                    return;
                }
            }
            console.log("state " + state)
            const postResponse = state
            ? await axiosInstance.put(`/blogposts/${state.id}`, {
                blogTitle,
                description,
                content: value,
                topImageUrl
            })
            : await axiosInstance.post("/blogposts/write", {
                blogTitle,
                description,
                content: value,
                topImageUrl
            });
            console.log(postResponse);
            alert('Post saved successfully!');
            navigate("/recipes"); 
        } catch (error) {
            console.error ('fail to publish the post:', error);
            alert('Error publishing post.');
        }
    };

    const modules={
        toolbar: {
          container: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image"],
            ["clean"],
          ],
          handlers: {
            image: imageHandler,
          },
        },
        clipboard: {
          matchVisual: false,
        },
      }

      const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image"
    ]

   return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Title" onChange={(e)=> setblogTitle(e.target.value)}/>
                <input type="text" placeholder="Description" onChange={(e)=> setDescription(e.target.value)}/>
                <div className="editorContainer">
                    <ReactQuill ref={reactQuillRef} theme="snow" modules={modules} formats={formats} value={value} onChange={setValue} />
        
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
