import React, { useState } from 'react';
import "./Styles/Header.scss";
import { NavLink,Link } from "react-router-dom"
import DropHeader from './DropHeader';

export default function Header(){
    const [DropActive, setDropActive] = useState(false);
    const handleDop=()=>{
        setDropActive(!DropActive)
    }
    
    return (
        <div className='Header'>
            <div className='Header-container'>
                <div className='Header-content'>
                    <Link to="/">
                        <h1>E-Test</h1>
                    </Link>
                    <div className='header-navigation'>
                        <NavigationsHeader/>
                    </div>
                </div>
                <div className='header-drop-content flex'>
                    <SearchHeader/>
                    <div className='authContent'>
                        <button 
                            onClick={handleDop}
                            type='button'
                            >Drop</button>
                        { DropActive && <DropHeader/>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

const NavigationsHeader=()=>(
    <div className='Navigations'>
        <div className='Navigations-link'>
            <LinkHeaders toLink="/" value="Home"  />
            <LinkHeaders toLink="/:id" value="Show"  />
            <LinkHeaders toLink="/ajoute" value="Ajoute"  />
        </div>
    </div>
);

const LinkHeaders=({toLink,value})=>(
        <NavLink to={toLink} className="NavLink">
            <p>{value}</p>
        </NavLink>
)

const SearchHeader=({connect})=>(
    <div className='SearchHeader'>
        <div className='content'>
            <input type="search" placeholder='Search ..' />
            <button type='button'>Search</button>
        </div>
    </div>
);

