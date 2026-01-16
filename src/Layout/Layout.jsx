import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import AddBook from "../Pages/AddBook";

// function Layout() {
//   return (
//     <>
//       <Navbar />

//       <Outlet />

//       <div className=" bottom-0 left-0 right-0 bg-slate-900 text-white text-center py-4">
//         <Footer />
//       </div>
//     </>
//   );
// }

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
