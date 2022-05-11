
import React, { useState, useEffect } from "react";
import logo from '../logo.jpg'

const NavbarStart = () => {
    const [isHome, setIsHome] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);
    const [isArchive, setIsArchive] = useState(false);

    useEffect(() => {
        console.log(window.location.pathname);
        if (window.location.pathname === '/teachers') {
            setIsTeacher(true)
            setIsHome(false)
            setIsArchive(false)
        }

        if (window.location.pathname === '/docs') {
            setIsTeacher(false)
            setIsHome(false)
            setIsArchive(true)
        }

        if (window.location.pathname === '/') {
            setIsTeacher(false)
            setIsHome(true)
            setIsArchive(false)
        }
      }, []);

  return (
    <>
    <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
            <a href="/" className="navbar-brand font-weight-bold text-secondary" style={{fontSize:50, display:'flex', alignItems:'center', justifyContent:'center', gap:'15px'}}>
                {/* <i className="flaticon-043-teddy-bear"></i> */}
                <img src={logo} width={50} height={50} style={{marginTop:'3px'}} alt=''/>
                <span className="text-primary">Archive Scolaire</span>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav font-weight-bold mx-auto py-0">
                    <a href="/" className={isHome ?  "nav-item nav-link active" :  "nav-item nav-link"}>Acceuil</a>
                    <a href="/docs" className={isArchive ?  "nav-item nav-link active" :  "nav-item nav-link"}>Archives Numériques</a>
                    <a href="/teachers"  className={isTeacher ?  "nav-item nav-link active" :  "nav-item nav-link"}>Enseignants</a>
                    {/* <a href="gallery.html" className="nav-item nav-link">Gallery</a>
                    <div className="nav-item dropdown">
                        <a href="/#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="blog.html" className="dropdown-item">Blog Grid</a>
                            <a href="single.html" className="dropdown-item">Blog Detail</a>
                        </div>
                    </div> */}
                    <a href="/contact" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    </div>

    </>
  );
}

export default NavbarStart;
