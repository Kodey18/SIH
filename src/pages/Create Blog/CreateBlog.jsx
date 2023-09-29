import React, {useState} from 'react'
import 'react-quill/dist/quill.snow.css';
import Editor from '../../components/Editor/Editor';
import axios from 'axios';
import './createBlog.css'
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");

    const createNewPost = async (e) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("summary", summary);
        formData.append("content", content);
        formData.append("file", file); // Append the file
        e.preventDefault();

        console.log(`Data : ${formData}`);

        try {
            const res = await axios.post("http://localhost:3000/api/blogs/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Set the content type for FormData
            },
            });

            if(res){
                console.log('response at create blog page : ',res);
                navigate('/blogs');
            }

        } catch (err) {
            console.log(err);
            console.log(err.response);
        }
    };

    return (
    <form onSubmit={(e) => createNewPost(e)} encType="multipart/form-data">
        <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
        />
        <input type="file" onChange={(ev) => setFile(ev.target.files[0])} />

        <Editor value={content} onChange={setContent} />
        <button style={{ marginTop: "5px" }}>Create post</button>
    </form>
    );
}

export default CreateBlog
