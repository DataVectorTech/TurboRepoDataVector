import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.globalState
  );
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user.name !== "" && user.role !== "") {
      navigate(`${user.role.toLowerCase()}`);
    } else {
      navigate("/login");
    }
  }, []);

  return <Outlet />;
};

export default Home;
