import GenerateArray from "../assets/images/GenerateArray.png";
import Pause from "../assets/images/Pause.png";
import Play from "../assets/images/Play.png";
import NavbarMob from "../assets/images/NavbarMob.png";
const Header = () => {
  return (
    <div className="col-12">
      <div className="col-12">
        <div className="col-md-12 headerArea d-flex py-2 justify-content-between">
          <div className="col-12 col-md-3">
            <div className="col-9 col-md-10 appTitle text-center">
              <img
                src={NavbarMob}
                alt=""
                className=" my-auto me-3"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              />
              Sorting Visualizer
            </div>
          </div>
          <div className="col-md-6 d-md-flex justify-content-between  d-none ">
            <div className="col-md-3 my-auto headerOperationBtn">
              1. Generate
              <img src={GenerateArray} alt="" className="  my-auto" />
            </div>
            <div className="col-md-2 my-auto headerOperationBtn">
              2. Play
              <img src={Play} alt="" className="  my-auto" />
            </div>
            <div className="col-md-2 my-auto headerOperationBtn">
              3. Pause
              <img src={Pause} alt="" className="my-auto" />
            </div>
          </div>
          {/* Off canvas for mobile */}
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="col-9 mx-auto col-md-12 sideNavBg py-3">
                <div className="col-md-12">
                  <div className="col-md-9 mx-auto">
                    <div className="col-md-12 my-4">
                      <div className="col-md-12 sortingTabs">Bubble Sort</div>
                    </div>
                    <div className="col-md-12 my-4">
                      <div className="col-md-12 sortingTabs">Selecion Sort</div>
                    </div>
                    <div className="col-md-12 my-4">
                      <div className="col-md-12 sortingTabs">Quick Sort</div>
                    </div>
                    <div className="col-md-12 my-4">
                      <div className="col-md-12 sortingTabs">
                        Insertion Sort
                      </div>
                    </div>
                    <div className="col-md-12 my-4">
                      <div className="col-md-12 sortingTabs">Merge Sort</div>
                    </div>
                    <div className="col-md-12 my-md-5">
                      <div className="col-md-12 sortingTabs">Heap Sort</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
