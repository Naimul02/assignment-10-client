import { useContext, useEffect } from "react";
import { useState } from "react";
import Spot from "./Spot";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";

const TouristsSpot = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/tourists")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-20">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Tourists Spots</h1>
        <p>
          A tourist attraction is a place of interest that tourists visit,
          typically for its inherent or an exhibited natural or cultural value,
          historical significance, natural or built beauty, offering leisure and
          amusement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
        {spots?.slice(0, 6).map((spot) => (
          <Spot key={spot._id} spot={spot}></Spot>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpot;
