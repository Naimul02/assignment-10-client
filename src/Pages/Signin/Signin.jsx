import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Signin = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("user signin successful!");
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col  w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signin</h1>
        </div>
        <div className="card shrink-0 w-full md:w-3/4 mx-auto">
          <form className="card-body" onSubmit={handleSignIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Signin</button>
            </div>
            <p className="text-center">
              Are you new here ?{" "}
              <Link to="/signup" className="text-blue-600 underline">
                Signup
              </Link>
            </p>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Signin;
