import About from "./components/About";

import Playlist from "./components/Playlist";
import Footer from "./components/Footer";

const Home = () => {
    return (
      <>
      <div className="bg-gray-100 dark:bg-slate-900">
        <About />
        <Playlist />
        <Footer />
      </div>

        
      </>


    )
  }
  export default Home;