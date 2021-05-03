import { useContext } from "react";
import { UserContext } from "Context/User";
import HeroSection from "Components/HomaPage/HeroSection";

export default function Login() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      <HeroSection />
      {user.isLoggedIn ? (
        <div>
          <div>you are login</div>
          <div>
            <button
              onClick={() => {
                logout();
              }}
            >
              logout
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            login({});
          }}
        >
          login
        </button>
      )}
    </div>
  );
}
