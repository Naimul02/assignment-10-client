import Carousel from "./Carousel";
import Countries from "./Countries/Countries";
import TeamMembers from "./TeamMembers";
import Testimonial from "./Testimonial";
import TouristsSpot from "./TouristsSpot";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <TouristsSpot></TouristsSpot>
      <Countries></Countries>
      <Testimonial></Testimonial>
      <TeamMembers></TeamMembers>
    </div>
  );
};

export default Home;
