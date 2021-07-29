
import Footer from "./Footer";
import NavBar from "./Navbar";
const MainLayout = (props) => (
    <div>
        <NavBar />
        {props.children}
        <Footer />
    </div>
);
export default MainLayout;
