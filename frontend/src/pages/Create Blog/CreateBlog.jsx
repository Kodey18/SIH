// import React, {useState} from 'react'
// import 'react-quill/dist/quill.snow.css';
// import Editor from '../../components/Editor/Editor';
// import axios from 'axios';
// import './createBlog.css'
// import { useNavigate } from 'react-router-dom';

// const CreateBlog = () => {
//     const navigate = useNavigate();
//     const [title, setTitle] = useState("");
//     const [summary, setSummary] = useState("");
//     const [content, setContent] = useState("");
//     const [file, setFile] = useState("");

//     const createNewPost = async (e) => {
//         const formData = new FormData();
//         formData.append("title", title);
//         formData.append("summary", summary);
//         formData.append("content", content);
//         formData.append("file", file); // Append the file
//         e.preventDefault();

//         console.log(`Data : ${formData}`);

//         try {
//             const res = await axios.post("http://localhost:3000/api/blogs/create", formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data", // Set the content type for FormData
//             },
//             });

//             if(res){
//                 console.log('response at create blog page : ',res);
//                 navigate('/blogs');
//             }

//         } catch (err) {
//             console.log(err);
//             console.log(err.response);
//         }
//     };

//     return (
//     <form onSubmit={(e) => createNewPost(e)} encType="multipart/form-data">
//         <input
//         type="title"
//         placeholder={"Title"}
//         value={title}
//         onChange={(ev) => setTitle(ev.target.value)}
//         />
//         <input
//         type="summary"
//         placeholder={"Summary"}
//         value={summary}
//         onChange={(ev) => setSummary(ev.target.value)}
//         />
//         <input type="file" onChange={(ev) => setFile(ev.target.files[0])} />

//         <Editor value={content} onChange={setContent} />
//         <button style={{ marginTop: "5px" }}>Create post</button>
//     </form>
//     );
// }

// export default CreateBlog

// export default CreatePost
import "react-quill/dist/quill.snow.css";
import "./createBlog.css";
import { useState } from "react";
import Editor from "../../components/Editor/Editor";
import Navbar2 from "../../components/Navbar/Navbar2";
import axios from "axios";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");
    const [redirect, setRedirect] = useState(false);

    const createNewPost = async (ev) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("summary", summary);
        formData.append("content", content);
        formData.append("file", file); // Append the file
        ev.preventDefault();

        console.log('Data : ${formData}');

        try {
        const res = await axios.post("/api/blogs/create", formData, {
            headers: {
            "Content-Type": "multipart/form-data", // Set the content type for FormData
            },
        });
        } catch (err) {
        console.log(err);
        console.log(err.response);
        }
    };

    if (redirect) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="ptContainer">
        <Navbar2 />
        <div className="ptWrapper">
            <form
            onSubmit={createNewPost}
            encType="multipart/form-data"
            className="ptForm"
            >
            <div className="ptFormdiv">
                <input
                type="text"
                placeholder="Title"
                value={title}
                autoComplete="off"
                className="ptinput"
                onChange={(ev) => setTitle(ev.target.value)}
                required
                />

                <input type="file" className="ptupload" onChange={(ev) => setFile(ev.target.files[0])} />
            </div>
            <textarea
                type="textarea"
                placeholder={"Summary"}
                value={summary}
                className="input-summary"
                onChange={(ev) => setSummary(ev.target.value)}
                required
            />

            <Editor value={content} onChange={setContent} />
            <button style={{ marginTop: "5px" }} className="pt-btn">Create post</button>
            </form>
        </div>
        </div>
    );
}
