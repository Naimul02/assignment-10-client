import { useContext, useEffect, useState } from "react";
import Country from "./Country";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import Loading from "../../Loading/Loading";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5001/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1
        className="text-2xl font-bold text-center"
        style={{ margin: "auto 0" }}
      >
        Countries{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "Bangladesh",
              "Thailand",
              "Malaysia",
              "Indonesia",
              "Vietnam",
              "Cambodia",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {countries?.map((country) => (
          <Country key={country._id} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
