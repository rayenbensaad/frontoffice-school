import React, { useState, useEffect } from "react";
import ArchiveService from '../services/archive'
import NavbarStart from '../components/NavbarStart';
import Footer from "../components/Footer";

const ArchiveSection = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        retrieveArchives();
      }, []);

      const retrieveArchives = () => {
        ArchiveService.getAllTeacher()
          .then(response => {
            setList(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
  return (
    <>
           
    <NavbarStart />
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="text-center pb-2">
                <p class="section-title px-5"><span class="px-2">NOS ENSEIGNANTS</span></p>
                <h1 class="mb-4">Rencontrez nos professeurs</h1>
            </div>
            <div class="row">
            {list &&
            list.map((archive, index) => (
                <div class="col-md-6 col-lg-3 text-center team mb-5" key={index}>
                    <div class="position-relative overflow-hidden mb-4" style={{borderRadius: '100%'}} >
                        <img class="img-fluid w-100" src={`http://localhost:5000/uploads/${archive.picture}`} alt=""  />
                        <div
                            class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a class="btn btn-outline-light text-center mr-2 px-0" style={{width: '38px', height: '38px'}}
                                href="/#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light text-center mr-2 px-0" style={{width: '38px', height: '38px'}}
                                href="/#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light text-center px-0" style={{width: '38px', height: '38px'}}
                                href="/#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <h4> {archive.fullName} </h4>
                    <i>Enseignant</i>
                </div>
 ))}
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default ArchiveSection;
