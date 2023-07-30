const SideBar = () => {
  return (
    <div className="col-md-3  sideNavDiv">
      <div className="col-md-12 sideNavBg py-3">
        <div className="col-md-12">
          <div className="col-md-9 mx-auto">
            <div className="col-md-12 my-md-5">
              <div className="col-md-12 sortingTabs tab_Active">
                Bubble Sort
              </div>
            </div>
            <div className="col-md-12 my-md-5">
              <div className="col-md-12 sortingTabs">Selecion Sort</div>
            </div>
            <div className="col-md-12 my-md-5">
              <div className="col-md-12 sortingTabs">Quick Sort</div>
            </div>
            <div className="col-md-12 my-md-5">
              <div className="col-md-12 sortingTabs">Insertion Sort</div>
            </div>
            <div className="col-md-12 my-md-5">
              <div className="col-md-12 sortingTabs">Merge Sort</div>
            </div>
            <div className="col-md-12 my-md-5">
              <div className="col-md-12 sortingTabs">Heap Sort</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
