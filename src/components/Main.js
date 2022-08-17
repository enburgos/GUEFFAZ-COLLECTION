import MainImage from "../IMG/pexels-omar-lópez-1182825.jpg";
import Caroussel from "./Caroussel";
import "../CSS/main.css";

const Main = () => {
  return (
    <main>
      <div className="mainImage">
        <img src={MainImage} alt="mainImage" />
        <div className="surImage">Collection Automne 2022</div>
      </div>

      <Caroussel />
    </main>
  );
};

export default Main;
