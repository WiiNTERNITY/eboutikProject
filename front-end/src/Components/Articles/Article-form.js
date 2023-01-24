import React, { useState } from 'react';
import axios from "axios";
import { UrlArticle, UrlCategory } from '../../App/Utils';
import "./Styles/Article-form.scss"


export default function ArticleForm(){
    const [categoryList, setCategoryList] = useState([]);
    const [title, setTitle] = useState(String);
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState(String);
    const [content, setContent] = useState(String);

    const handleCategory=()=>{
        axios({
            url:`${UrlCategory}/`,
            method:"get"
        }).then(res=>{
            const data=res.data
            setCategoryList(data)
        })
        
    }
    handleCategory()

    const handleImage=(e)=>{
        setImage(e.target.files[0])
    }
    const handleSubmit=(e)=>{
        e.preventDefault();


        const data=new FormData();
        data.append( "title",title);
        data.append( "image",image);
        data.append( "category",category);
        data.append( "content",content);

        axios({
            url:`${UrlArticle}/addOneArticle`,
            method:"post",
            data:data
        }).then(res=>{
            document.querySelector('.success').innerHTML=res.data.msg
            console.log(res.data);
        })
        
    }
        
    return (
        <div className='ArticleForm'>
            <form onSubmit={handleSubmit}>
                <div className='success'></div>
                <div className='field'>
                    <input 
                        type={"text"} 
                        placeholder="Title" 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                </div>
                <div className='field'>
                    <input 
                        type={"file"} 
                        accept="image/*"
                        placeholder="Title" 
                        onChange={(e)=>handleImage(e)}
                        />
                </div>
                <div className='field'>
                    <select 
                        name='category'
                        className='select'
                        onChange={(e)=>setCategory(e.target.value)}
                        defaultValue={category}
                        >
                        {
                            categoryList.map((category,index)=>(
                                <option 
                                    key={index} 
                                    value={category.title}
                                >{category.title}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='field'>
                    <textarea 
                        cols={20} 
                        rows={5} 
                        placeholder="content ..."
                        value={content}
                        onChange={(e)=>setContent(e.target.value)}
                        ></textarea>
                </div>
                <button type="submit">Valide</button>
            </form>
        </div>
    );
}

