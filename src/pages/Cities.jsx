import ComponentCity from "../components/ComponentCity";
import City from "../assets/Cities.jpg";
function Cities() {
  return (
    <>
       <ComponentCity />
      <div className="h-dvh w-screen object-cover">

        <img src={City} alt="" className="h-dvh w-screen object-cover" />
     
      </div>
   
    </>
  );
}

export default Cities;