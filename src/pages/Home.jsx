import Carousel from "../components/Carousel";
import CallToAction from "../components/CallToAction";
import Bg from "../assets/bg-co.jpg";

function Home() {
  return (
    <div>
      <img src={Bg} alt="" className="h-dvh w-screen object-cover " />
      <CallToAction />
      <Carousel />
    </div>
  );
}

export default Home;