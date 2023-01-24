import React from 'react';

export default function AdminNav ({handleNavi}){
    return (
        <div className='AdminNav'>
            <h1>Admin</h1>
            <div className='AdminNav-content'>
                <LinkAdmin value="Users" handleNavi={handleNavi} navValue="AdminUser" />
                <LinkAdmin value="Article" handleNavi={handleNavi} navValue="AdminArticle"   />
                <LinkAdmin value="Category" handleNavi={handleNavi} navValue="AdminCategory"  />
                <LinkAdmin value="Ajoute" handleNavi={handleNavi} navValue="FormCatagoty"  />
            </div>
        </div>
    );
}

const LinkAdmin=({value,handleNavi,navValue})=>(
    <div className='LinkAdmin' onClick={()=>handleNavi(navValue)} >
        <a href='#'>{value}</a>
    </div>
)
