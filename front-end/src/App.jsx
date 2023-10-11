import { Outlet } from "react-router";
import Navbar from "./Shared/components/Navbar";
import Footer from "./Shared/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
