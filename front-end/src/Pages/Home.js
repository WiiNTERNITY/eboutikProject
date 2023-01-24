import axios from 'axios';
import React, { useState } from 'react';
import { UrlArticle } from '../App/Utils';
import Layout from './Layout';
import "./styles/Home.scss";

export default function Home (){
    const [articles, setArticles] = useState([]);

    const handleArticle=()=>{
        axios({
            url:`${UrlArticle}/`,
            method:"get",
        }).then(res=>{
            setArticles(res.data)
        })
    }
    handleArticle();
    return (
        <Layout>
            <div className='Home'>
                <div className='Home-content'>
                    {
                        articles.map((article,index)=>( <Article key={index} article={article}/>))
                    }
                   
                </div>
            </div>
        </Layout>
    );
}

const Article=({article})=>(
    <div className='Article'>
        <div className='Article-content'>
            <div className='Article-header'>
                <h1>{article.title}</h1>
            </div>
            <div className='Article-body'>
                <img src={article.image} alt={article.title}/>
            </div>
            <div className='Article-footer'>
                <ButtonVoir/>
            </div>
        </div>
    </div>
)

const ButtonVoir=()=>(
    <div className='ButtonVoir'>
        <button type='button'>Voir plus</button>
    </div>
)