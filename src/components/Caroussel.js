import Img1 from "../IMG/pexels-lina-kivaka-1539935.jpg";
import Img2 from "../IMG/pexels-lorenzo-cinque-4012266.jpg";
import Img3 from "../IMG/pexels-wendy-wei-1662631.jpg";
import "../CSS/Caroussel.css";

const Caroussel = () => {
  return (
    <div className="CarousselPage">
      <div className="CarousselTitle">Galerie</div>
      <div className="CarousselGalerie">
        <img src={Img1} alt="img1" />
        <img src={Img2} alt="img2" />
        <img src={Img3} alt="img3" />
        <img src={Img1} alt="img1" />
        <img src={Img2} alt="img2" />
        <img src={Img3} alt="img3" />
        <img src={Img1} alt="img1" />
        <img src={Img2} alt="img2" />
        <img src={Img3} alt="img3" />
      </div>
    </div>
  );
};

export default Caroussel;
