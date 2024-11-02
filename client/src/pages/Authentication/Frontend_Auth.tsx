import { useEffect, useState } from "react";
// import Props from "../../components/ComponentProps";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Frontend_Auth = (Component: any) => {
  return (props: any) => {
    const [isAuth, setIsAuth] = useState(false);
    //react component
    const navigate = useNavigate();
    useEffect(() => {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        axios
          .get("/route/auth-check", {
            headers: { Authorization: `Bearer ${authToken}` },
          })
          .then((response) => {
            if (response.status === 200) {
              setIsAuth(true);
            } else {
              navigate("/login");
            }
          })
          .catch(() => navigate("/login"));
      } else {
        navigate("/login");
      }
    }, [navigate]);

    return isAuth ? <Component {...props} /> : <p>Content not loading...</p>;
  };
};

export default Frontend_Auth;
