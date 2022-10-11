import { Fragment } from "react";
import MainHeader from "./MainHeader";
interface LayoutPropsType {
  children: React.ReactNode;
}
const Layout = (props: LayoutPropsType) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
