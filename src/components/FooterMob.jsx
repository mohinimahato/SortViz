import GenerateArray from "../images/GenerateArray.png";
import Pause from "../images/Pause.png";
import Play from "../images/Play.png";
const FooterMob = () => {
  return (
    <div>
      <div className="col-12 col-md-12 d-flex justify-content-between  footerDiv py-3 ">
        <div className="col-3 col-md-3 my-auto headerOperationBtn">
          <img src={GenerateArray} alt="" className="  my-auto" />
        </div>
        <div className="col-3 col-md-2 my-auto headerOperationBtn">
          <img src={Play} alt="" className="  my-auto" />
        </div>
        <div className="col-3 col-md-2 my-auto headerOperationBtn">
          <img src={Pause} alt="" className="my-auto" />
        </div>
      </div>
    </div>
  );
};
export default FooterMob;
