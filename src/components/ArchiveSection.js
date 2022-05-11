import React, { useState, useEffect } from "react";
import ArchiveService from '../services/archive'

const ArchiveSection = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        retrieveArchives();
      }, []);

      const retrieveArchives = () => {
        ArchiveService.getAllDocsLimit()
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
           
    <div className="container-fluid pt-5" >
        <div className="container">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2">DERNIER Archives</span></p>
                <h1 className="mb-4">Dernières archives</h1>
            </div>
            <div className="row pb-3">
            {list &&
            list.map((archive, index) => (
                <div className="col-lg-4 mb-4" key={index}>
                    <div className="card border-0 shadow-sm mb-2">
                        {/* <img className="card-img-top mb-2" src="img/blog-1.jpg" alt="" /> */}
                        <img src={`http://localhost:5000/uploads/${archive.picture}`} alt=""/>
                        <div className="card-body bg-light text-center p-4">
                            <h4 className=""> {archive.fullName} </h4>
                            <p>{archive.description}</p>
                        </div>
                    </div>
                </div>
                ))}

            </div>
        </div>
    </div>
    </>
  );
}

export default ArchiveSection;
