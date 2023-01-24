import React, { useState } from 'react';
// import "./Styles/Form-category.scss";
import axios from "axios";
import { UrlCategory } from '../../App/Utils';


const FormCatagoty = () => {
    const [title, setTitle] = useState(String);
    const [description, setDescription] = useState(String);

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(title.length<=3){
            return document.querySelector(".errorTitle").innerHTML="le title doit etre superuer 3!"
        }
        if(description.length<=3){
            return document.querySelector(".errorDec").innerHTML="le description doit etre superuer 3!"
        }

        const data={
            title:title,
            description:description
        }

        console.log(data);

        axios({
            url:`${UrlCategory}/AddOneCategory`,
            method:"post",
            data:data,
        }).then(res=>{
            console.log(res);
        })
    }

    return (
        <div className='FormCatagoty'>
            <h1>Ajoute une catagoty</h1>
            <form onSubmit={handleSubmit}>
                <div className='field'>
                    <input 
                        type={"text"} 
                        placeholder="title ..." 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                        <br/>
                    <span className='errorTitle'></span>
                </div>
                <div className='field'>
                    <textarea 
                        cols={20}
                        rows={10}
                        placeholder="Description ..." 
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        ></textarea>
                        <br/>
                    <span className='errorDec'></span>
                </div>
                <button type='submit'>Valide</button>
            </form>
        </div>
    );
}

export default FormCatagoty;
