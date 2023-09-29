import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogTemplate from '../../components/BlogTemplate/BlogTemplate';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    const allBlogs = async() => {
        try{
            const response = await axios.get("http://localhost:3000/api/blogs");
            if(response){
                console.log("response", response.data);
                setBlogs(response.data);
            }
        }catch(err){
            console.log('error at blogs page : ', err);
        }
    }


    useEffect(()=>{
        allBlogs();
    },[]);


    return (
        <>
            {
                blogs.length > 0 && blogs.map(blog => (
                    <BlogTemplate {...blog} />
                ))
            }
        </>
    )
}

export default Blogs