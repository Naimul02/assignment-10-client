import Carousel from "./Carousel";
import TeamMembers from "./TeamMembers";
import Testimonial from "./Testimonial";
import TouristsSpot from "./TouristsSpot";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <TouristsSpot></TouristsSpot>
      <Testimonial></Testimonial>
      <TeamMembers></TeamMembers>
    </div>
  );
};

export default Home;
