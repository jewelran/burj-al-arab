import React from 'react';
import Navigation from '../Navigation/Navigation';
import "./Header.css"
const Header = () => {
    return (
        <div className="headerCont" style = {{backgroundImage:'url("https://c4.wallpaperflare.com/wallpaper/853/249/201/dubai-burj-al-arab-building-illustration-wallpaper-preview.jpg")',width:"100%",height: "400px",backgroundSize:"cover",backgroundPosition:"center center",marginTop: '0px' , padding: '0px',color:'white'}}>
            <Navigation></Navigation>
            <h1>Burj Al Arab</h1>
        </div>
    );
};

export default Header;