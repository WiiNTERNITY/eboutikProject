import React from 'react';
import ArticleForm from '../Components/Articles/Article-form';
import Layout from './Layout';
import "./styles/Ajoute.scss"



export default function Ajoute(){
    return (
        <Layout>
            <div  className='Ajoute'>
                <h3>Ajoute une article</h3>
                <div className='Ajoute-content'>
                    <ArticleForm/>
                </div>
            </div>
        </Layout>
    );
}

