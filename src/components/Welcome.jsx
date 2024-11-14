import { useState } from "react";
import { FormTemplate } from "../components/FormTemplate";
import { IoCloseCircleSharp } from "react-icons/io5";
function Login() {
  const [currState, setCurrState] = useState("Sign up");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function OnSubmitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="cormaorant-bold absolute right-0 top-0 flex h-screen items-center justify-center bg-[#F5F5F5] md:w-1/3">
      <IoCloseCircleSharp className="absolute right-5 top-5 cursor-pointer text-center text-4xl" />
      <div className="grid gap-2 rounded-md bg-white p-4 shadow-md">
        <div className="mb-2 flex items-center justify-center gap-3">
          <span className="inline-block rounded-full bg-gray-200 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
              />
            </svg>
          </span>
          <h2 className="text-2xl font-bold uppercase">{currState}</h2>
        </div>

        <form className="login-form" onSubmit={OnSubmitHandler}>
          {currState === "Sign up" ? (
            <FormTemplate
              type="text"
              placeholder="username : miketyson"
              className="form-input"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          ) : (
            ""
          )}
          <FormTemplate
            type="email"
            placeholder="email: miketyson@gmail.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormTemplate
            type="password"
            placeholder="password: *******"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded-sm bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            {currState === "Sign up" ? "Create account" : "Login Now"}
          </button>
        </form>
        <div className="login-term my-2 flex gap-2">
          <input type="checkbox" required />
          <p className="text-sm">Agree to the terms of use and privacy</p>
        </div>
        <div className="login-forget text-center text-[0.8rem]">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              {" "}
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("login")}
                className="cursor-pointer text-purple-500"
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="login-toggle">
              {" "}
              Create a new account?{" "}
              <span
                onClick={() => setCurrState("Sign up")}
                className="cursor-pointer text-purple-500"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
