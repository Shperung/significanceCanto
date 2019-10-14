import Navbar from "../navbar/navbar.block.jsx";

import "../../style/base.scss";

const Layout = props => (
  <main>
    <Navbar />
    {props.children}
  </main>
);

export default Layout;
