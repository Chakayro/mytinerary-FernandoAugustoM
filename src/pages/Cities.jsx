import UnderConstruction from "../assets/under construction.jpeg";

function Cities() {
  return (
    <>
    <div className="absolute top-0 left-0 w-full h-full">
     
      <img src={UnderConstruction} alt="Under Construction" className="object-cover w-full h-full z-40"
      style={{ objectPosition: "5% 40%" }} 
      />
    </div>
    </>
  );
}

export default Cities;