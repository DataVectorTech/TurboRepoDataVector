import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "@repo/ui/sidebar";
import { sideBarData } from "../components/SideBarData";
import useGetActiveRoute from "../Hooks/useGetActiveRoute";

interface NavigateProps {
  //   signIn: boolean;
  children: JSX.Element;
}
// Sign In we will be creating a redux store for this:
const Protected = ({ children }: NavigateProps): JSX.Element => {
  const isAuthenticated: boolean = useSelector((state: RootState) => state.globalState.isAuthenticated);
  const user: { name: string, role: string } = useSelector((state: RootState) => state.globalState.user);

  const { pathname } = useGetActiveRoute()

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Navbar />
      <div className="mainGrid">
        {/* <div> */}
        {/* <Sidebar /> */}
        <SideBar
          activeSidebarTab= {pathname}
          name={user?.name}
          role={user?.role}
          sideBarTabData={sideBarData}
          showMakeAnnouncement={true}
          showCreateEvent={true}
          createEventHandler={() => {
            console.log("createEventHandler")
          }}
          makeAnnouncementHandler={() => {
            console.log("makeAnnouncementHandler")
          }}
        />
        {/* </div> */}
        <div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Protected;
