import React, { useState } from 'react';
import AdminArticle from '../Components/Admin/Admin-article';
import AdminCategory from '../Components/Admin/Admin-category';
import AdminNav from '../Components/Admin/Admin-Nav';
import AdminUser from '../Components/Admin/Admin-user';
import FormCatagoty from '../Components/Categorys/Form-catagoty';
import Layout from './Layout';
import "./styles/Admin.scss"


export default function Admin(){
    const [ActiveValue, setActiveValue] = useState("AdminUser");

    const handleNavi=(value)=>{
        setActiveValue(value);
    }

    return (
        <Layout>
            <div className='Admin'>
                <div className='Admin-content'>
                    <div className='Admin-nav'>
                        <AdminNav handleNavi={handleNavi} />
                    </div>
                    <div className='Admin-content'>
                        { ActiveValue =="AdminUser" && <AdminUser/> }
                        { ActiveValue==="FormCatagoty" && <FormCatagoty/>}
                        { ActiveValue==="AdminArticle" && <AdminArticle/>}
                        { ActiveValue==="AdminCategory" && <AdminCategory/>}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
