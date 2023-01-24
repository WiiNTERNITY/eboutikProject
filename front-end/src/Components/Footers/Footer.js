import React from 'react';
import "./Styles/Footer.scss"

export default function Footer (){
    return (
        <div className='Footer'>
            <div className='Footer-container'>
                <div className='Footer-content'>
                    <div className='footer-contact'>
                       <Contacts/>
                    </div>
                </div>
                <div className='copyright'>
                    <i>Lodphin 2022 &copy; ecommerce</i>
                </div>
            </div>
        </div>
    );
}

const Contacts=()=>(
    <div className='Contacts'>
        <div className='Contacts-container'>
            <h1>Contact</h1>
            <div className='contact-content'>
                <div className='contact-info'>
                    <h4>Contact us and we'll get back to you within 24 hours.</h4>
                    <div className='info-content'>
                        <ul>
                            <li>Madagascar</li>
                            <li>O322212916/0347842354</li>
                            <li>brokewala@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className='contact-form'>
                    <form>
                        <div className='field-group'>
                            <input type="text" placeholder='Name' /> | 
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className='field'>
                            <textarea cols={37} rows={7} placeholder="Comment ..."></textarea>
                        </div>
                        <button type='submit'>Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)