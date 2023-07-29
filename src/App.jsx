import viteLogo from '/vite.svg'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Bodyarea from "./components/Bodyarea";
import './App.css'

function App() {
  return (
   
    <div className="col-12 col-md-12">
      <Header />
      <div className="col-md-12 d-flex justify-content-around">
        <Sidebar className="my-auto " />
        <Bodyarea className="my-auto" />
      </div>
      {/* <FooterMob className="my-auto" /> */}
    </div>
    
    
   
  )
}

export default App
