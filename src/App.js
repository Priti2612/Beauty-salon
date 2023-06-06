
import Footer from "./components/Footer";
import Header from "./components/Header";
import MakeAnApoointment from "./components/MakeAnApoointment";
import OurExclusiveProducts from "./components/OurExclusiveProducts";
import OurExperienceSpecialist from "./components/OurExperienceSpecialist";
import Services from "./components/Services";
import Subservices from "./components/Subservices";
import Team from "./components/Team";
import Welcome from "./components/Welcome";
import Testimonial from "./components/Testimonial";
import Testsub from "./components/Testsub";
import Offers from "./components/Offers";



function App() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Services/>
      <Subservices/>
      <Team />
      <OurExperienceSpecialist/>
      <OurExclusiveProducts/>
      <Offers />
      <MakeAnApoointment/>
      <Testimonial/>
      
      <Footer/>
    </div>
  );
}

export default App;
