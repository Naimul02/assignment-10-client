import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";

const auth = getAuth(app);
const Signup = () => {
  const { createUser, signInWithGoogle, signInWithGithub, setReload } =
    useContext(AuthContext);

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Google login successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGithub = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success("Github login successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);
    if (!/[A-Z]/.test(password)) {
      return toast.error("password should be one uppdercase letter");
    } else if (!/[a-z]/.test(password)) {
      return toast.error("password should be one lowercase letter");
    } else if (password.length < 6) {
      return toast.error(
        "password Length must be at least 6 character or longer"
      );
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            toast.success("user created successful");
            setReload(true);
          })
          .catch(() => {});
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col  w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signup</h1>
        </div>
        <div className="card shrink-0 w-full md:w-3/4 mx-auto">
          <form className="card-body" onSubmit={handleSignup}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
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
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="photo"
                name="photo"
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
              <button className="btn btn-primary">Signup</button>
            </div>
            <p className="text-center">
              Already have an account ?
              <Link to="/login" className="text-blue-600 underline">
                Signin
              </Link>
            </p>
          </form>
          <div className="flex gap-3 mx-auto">
            <button className="btn" onClick={handleGoogle}>
              <FaGoogle className="text-2xl" />
              <p>Google</p>
            </button>
            <button className="btn" onClick={handleGithub}>
              <FaGithub className="text-2xl" />
              <p>Github</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
