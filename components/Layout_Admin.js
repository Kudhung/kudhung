import Wrapper from "./Wrapper";
const LayoutAdmin = (props) => (
    <div>
        <link href="/css/KategoriAdmin.css" rel="stylesheet" />
            <link href="/css/wrapper.css" rel="stylesheet" />
            <link href="/css/FormAdmin.css" rel="stylesheet" />
        <Wrapper />
        {props.children}
    </div>
);
export default LayoutAdmin;
