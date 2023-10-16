import { Outlet } from "react-router";
import AdminNavbar from "./Shared/components/AdminNavbar";
import AdminFooter from "./Shared/components/AdminFooter";

function App() {
  return (
    <>
      <AdminNavbar />
      <Outlet />
      <AdminFooter />
    </>
  );
}

export default App;
