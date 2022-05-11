
const AboutUsSection = () => {
    return (
      <>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img className="img-fluid rounded mb-5 mb-lg-0" src="img/about-1.jpg" alt="" />
                </div>
                <div className="col-lg-7">
                    <p className="section-title pr-5"><span className="pr-2">EN SAVOIR PLUS SUR NOUS</span></p>
                    <h1 className="mb-4">Ecole Primaire</h1>
                    <p>l'école a été construite en 1960 , à Monastir , c'était la première école de la ville , elle a commencé avec deux salles de classe..</p>
                    <div className="row pt-2 pb-4">
                        <div className="col-6 col-md-4">
                            <img className="img-fluid rounded" src="img/about-2.jpg" alt="" />
                        </div>
                        <div className="col-6 col-md-8">
                            <ul className="list-inline m-0">
                                <li className="py-2 border-top border-bottom"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                                <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                                <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
      </>
    );
  }
  
  export default AboutUsSection;
  