import Code from "../images/Code.png";

const Bodyarea = () => {
  return (
    <div className="col-12 col-md-9 my-5 mx-auto py-5 ">
      <div className="col-12 col-md-12 mx-auto">
        <div className="col-12 co-md-10 mx-auto">
          <div className="col-11 col-md-9 mx-auto my-auto arrayCard px-2 py-md-4">
            <div className="col-md-6 mx-auto text-center algorithmName">
              ✨ Bubble Sort ✨
            </div>
            <div className="col-md-11 mx-auto text-center arrayInputContainer my-4 py-3">
              <div className="col-md-12 d-flex justify-content-around">
                <span className="arrayInput arrayComparison">1</span>
                <span className="arrayInput">2</span>
                <span className="arrayInput arraySwitch">3</span>
                <span className="arrayInput arrayUpdated">4</span>
                <span className="arrayInput">5</span>
                <span className="arrayInput">6</span>
                <span className="arrayInput">7</span>
                <span className="arrayInput">8</span>
              </div>
            </div>
            <div className="col-md-10 mx-auto d-flex justify-content-between mt-5 pt-md-4 mb-2">
              <div className="col-md-3 statistics d-flex">
                <div className="statsTitle">Comparisons:</div>
                <div className="statsInfo">45</div>
              </div>
              <div className="col-md-3 statistics d-flex">
                <div className="statsTitle">Time: </div>
                <div className="statsInfo">
                  00:00:00 <span>sec</span>
                </div>
              </div>
              <div className="col-md-3 statistics d-flex">
                <div className="statsTitle">Swaps: </div>
                <div className="statsInfo">50</div>
              </div>
            </div>
          </div>

          <div className="footer col-md-6 mx-auto d-none d-md-block">
            <div className="col-md-12">
              <div className="text-center col-md-8 mx-auto creditText">
                Made with
                <span>
                  <img src={Code} alt="" className="  my-auto" />
                </span>
                by <link>Mohini Mahato</link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bodyarea;
