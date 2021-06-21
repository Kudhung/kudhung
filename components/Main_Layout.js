import Footer from "./footer";
import NavBar from "./navbar";
const MainLayout = (props) => (
    <div>
        <NavBar />
        {props.children}
        <Footer />
    </div>
);
export default MainLayout;
