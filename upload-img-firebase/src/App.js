import "./App.css";
// import UploadImg from "./components/UploadImg";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/page/HomePage";
import AboutPage from "./components/page/AboutPage";
import ContactPage from "./components/page/ContactPage";
import NotFound from "./components/page/NotFound";
import LayoutNavbar from "./components/layout/LayoutNavbar";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";

function App() {
  return (
    <div>
      <LayoutNavbar />
      <Routes>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/user/add' element={<AddUser />}></Route>
        <Route path='/user/edit/:id' element={<EditUser />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
