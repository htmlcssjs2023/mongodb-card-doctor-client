import { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context-api/AuthContextAPI';

const Login = () => {
  const {signInUser} = useContext(AuthContext);
  const handleLogin = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error)
    })


  }
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:gap-32">
          <div className="text-center w-full lg:text-left lg:w-1/2">
            <p className="py-6">
              <img className="w-[300px] lg:w-full" src={login} alt="" />
            </p>
          </div>
          <div className="card w-full lg:w-full max-w-md shadow-2xl bg-base-100 ml-20">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold mb-8 text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[1.2rem]">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-[1.2rem]">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                {/* <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-[1.2rem]"
                  >
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-[#FF3811] text-white text-[1.2rem] hover:text-black"
                />
              </div>
            </form>
            <p className="py-6 text-center">
              You don't have an account's
              <Link className="text-[#FF3811] ml-8 font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;