import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import AddBook from "../Pages/AddBook";



function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        {" "}
        {/* Add this wrapper div */}
        <Outlet />
      </div>
      <Footer />
      {/* <AddBook/> */}
    </div>
  );
}

// export default Layout;

export default Layout;
