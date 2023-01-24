import React from 'react';
import { Link } from 'react-router-dom';
import "./Styles/DropHeader.scss"


export default function DropHeader (){
    return (
        <div className='DropHeader'>
            <div className='DropHeader-content'>
                <div className='DropHeader-header'>
                    <div className='image-content'></div>
                    <div className='profile-content'>
                        broke
                    </div>
                </div>
                <div className='DropHeader-body'>
                    <div className='content-nav'>
                        <NavHeaders  linkTo="/profil" value="Profil"/>
                        <NavHeaders  linkTo="/profil" value="Parametre"/>
                        <NavHeaders  linkTo="/signup" value="S`inscrire"/>
                        <NavHeaders  linkTo="/profil" value="Deconnexion"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const NavHeaders=({linkTo,value})=>(
    <div className='NavHeaders'>
        <Link to={linkTo}>
            <h5>{value}</h5>
        </Link>
    </div>
)
