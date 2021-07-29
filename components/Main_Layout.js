
import Footer from "./Footer";
import NavBar from "./navbar";
const MainLayout = (props) => (
    <div>
        <NavBar />
        {props.children}
        <Footer />
    </div>
);
export default MainLayout;
