import React, { FormEvent, useEffect } from 'react'
// import {FetchHookProps, useFetch} from '../../hooks/useFetch';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useDispatch  } from 'react-redux';
// import { authenticate } from '../../slices/counterSlice';


const Login = () => {
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const navigate:NavigateFunction = useNavigate();
const dispatch = useDispatch()

const {data, loading, error, handlePost } = useFetch();

interface LoginProps {
  email: string;
  password: string;
}
const body: LoginProps = {
  email,
  password
}
// const url = `${import.meta.env.VITE_API_URL}/auth/login`;
// using custom hook from hook directory
// const {data, loading, error} = useFetch({
//   url: url,
//   method: "POST",
//   body: body,
// } as FetchHookProps);


const handleLogin = async (e: FormEvent) => {
  e.preventDefault();
  const url:string = `${import.meta.env.VITE_API_URL}/auth/login`
  const body: LoginProps = {email, password};
  handlePost({url: url, method: "POST", body: body} as FetchHookProps);
}

useEffect(() => {
  if(data !== null && data.code === 200) {
    localStorage.setItem("token", data.data);
    dispatch(authenticate({name:data.name, role: data.role}));
    switch(data.role) {
      case "ADMIN": navigate("/admin");
      break;
      case "PRINCIPAL": navigate("/principal")
      break;
      case "TEACHER": navigate("/teacher")
      break;
      case "STUDENT": navigate("/student");
    }
  }
}, [data, loading, error]);

  return (
    // <div className="mt-6">
    //     <form action="" onSubmit={handleLogin}>
    //         <input className="border border-black block mb-3" type="email" onChange={(e) => setEmail(e.target.value)} />
    //         <input className="border border-black block mb-3" type="password" onChange={(e) => setPassword(e.target.value)} />
    //         <button type="submit" className="bg-primary text-white p-2">Login</button>
    //     </form>
    // </div>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-bgWhite p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-darkGray text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;