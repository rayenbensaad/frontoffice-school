import AboutUsSection from '../components/AboutUsSection';
import ArchiveSection from '../components/ArchiveSection';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';
import HeaderStart from '../components/HeaderStart';
import NavbarStart from '../components/NavbarStart';
import TeacherSection from '../components/TeacherSection';
// import TestimonialParent from '../components/TestimonialParent';

function Home() {
  return (
    <>
    <NavbarStart />
    <HeaderStart />
    <Facilities />
    <AboutUsSection />
    <ArchiveSection />
    <TeacherSection />
    {/* <TestimonialParent /> */}
    <Footer />
    </>
  );
}

export default Home;
