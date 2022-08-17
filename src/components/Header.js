import LogoMarque from "../IMG/markimage.png";
import "../CSS/Header.css";

const Header = () => {
  return (
    <header>
      <div className="UpHeader">
        <div className="leftPartHeader">hello</div>
        <div className="centralPartHeader">
          <img src={LogoMarque} alt="Logo" />
        </div>
        <div className="rightPartHeader">hello</div>
      </div>
      <div className="categories">
        <button>NOTRE GAMME</button>
        <button>GALERIE</button>
        <button>NOTRE HISTOIRE</button>
        <button>NOUS CONTACTER</button>
      </div>
    </header>
  );
};

export default Header;
