
import React, { useState, useEffect } from "react";
import ArchiveService from '../services/archive'

const TeacherSection = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        retrieveArchives();
      }, []);

      const retrieveArchives = () => {
        ArchiveService.getAllTeacherLimit()
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
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2">NOS ENSEIGNANTS</span></p>
                <h1 className="mb-4">Rencontrez nos professeurs</h1>
            </div>
            <div className="row">
            {list &&
            list.map((archive, index) => (
                <div className="col-md-6 col-lg-3 text-center team mb-5" key={index}>
                    <div className="position-relative overflow-hidden mb-4" style={{borderRadius: '100%'}} >
                        <img className="img-fluid w-100"  src={`https://api-node-school.herokuapp.com/uploads/${archive.picture}`} alt=""  />
                        <div
                            className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: '38px', height: '38px'}}
                                href="/#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: '38px', height: '38px'}}
                                href="/#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light text-center px-0" style={{width: '38px', height: '38px'}}
                                href="/#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <h4> {archive.fullName} </h4>
                    <i>Enseignant</i>
                </div>
               ))}
            </div>
        </div>
    </div>

    </>
  );
}

export default TeacherSection;
