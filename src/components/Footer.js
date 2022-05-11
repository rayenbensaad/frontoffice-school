const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <a href="/" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{fontSize:30}} >
                    <i className="flaticon-043-teddy-bear"></i>
                    <span className="text-white">Archive Scolaire</span>
                </a>
                <p>l'école a été construite en 1960 , à Monastir , c'était la première école de la ville , elle a commencé avec deux salles de classe.</p>
                <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style={{width: '38px', height: '38px'}} href="/#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style={{width: '38px', height: '38px'}} href="/#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style={{width: '38px', height: '38px'}} href="/#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style={{width: '38px', height: '38px'}} href="/#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h3 className="text-primary mb-4">Contactez-nous</h3>
                <div className="d-flex">
                    <h4 className="fa fa-map-marker-alt text-primary"> AA </h4>
                    <div className="pl-3">
                        <h5 className="text-white">Adresse</h5>
                        <p>5090, Bekalta</p>
                    </div>
                </div>
                <div className="d-flex">
                    <h4 className="fa fa-envelope text-primary"> BB </h4>
                    <div className="pl-3">
                        <h5 className="text-white">Email</h5>
                        <p>écoleprimaire@gmail.com</p>
                    </div>
                </div>
                <div className="d-flex">
                    <h4 className="fa fa-phone-alt text-primary"> CC </h4>
                    <div className="pl-3">
                        <h5 className="text-white">Téléphone</h5>
                        <p>+012 345 67890</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h3 className="text-primary mb-4">Liens</h3>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Acceuil</a>
                    <a className="text-white mb-2" href="/docs"><i className="fa fa-angle-right mr-2"></i>Archives Numériques</a>
                    <a className="text-white mb-2" href="/teachers"><i className="fa fa-angle-right mr-2"></i>Enseignants</a>
                    <a className="text-white" href="/contact"><i className="fa fa-angle-right mr-2"></i>Contact</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h3 className="text-primary mb-4">Newsletter</h3>
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control border-0 py-4" placeholder="Your Email"
                            required="required" />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-block border-0 py-3" type="submit">Submit Now</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="container-fluid pt-5" style={{borderTop: '1px solid rgba(23, 162, 184, .2)'}} >
            <p className="m-0 text-center text-white">
                &copy; <a className="text-primary font-weight-bold" href="/#">Archive Scolaire</a>. Tous les droits sont réservés. Créé par
                <a className="text-primary font-weight-bold" href="/"> Ecole Primaire </a>
            </p>
        </div>
    </div>
    </>
  );
};

export default Footer;
