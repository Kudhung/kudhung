import Wrapper from "./Wrapper";
const LayoutAdmin = (props) => (
    <div>
        <link href="/css/wrapper.css" rel="stylesheet" />
        <link href="/css/FormAdmin.css" rel="stylesheet" />
        <link href="/css/config.css" rel="stylesheet" />
        <link href="/css/gallery.css" rel="stylesheet" />
        <Wrapper />
        {props.children}
    </div>
);
export default LayoutAdmin;
