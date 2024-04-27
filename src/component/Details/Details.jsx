import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const tourists = useLoaderData();
  console.log(tourists);

  const { id } = useParams();

  const touristSpot = tourists.find((tourist) => tourist._id === id);
  console.log(touristSpot);

  const {
    image,
    average_cost,
    country_name,
    location,
    seasonality,
    short_description,
    totalVisitorsPerYear,
    tourist_spot_name,
    travel_time,
  } = touristSpot;

  return (
    <div className="hero md:h-[500px] my-10">
      <div className="hero-content flex-col lg:flex-row border rounded-xl h-full">
        <img
          src={image}
          className="max-w-[500px] border-2 rounded-lg  h-full"
        />
        <div className="">
          <h1 className="text-4xl font-bold">{tourist_spot_name}</h1>
          <div className="space-y-2 mt-6">
            <h3 className="text-xl font-semibold">
              Country Name : {country_name}
            </h3>
            <h3 className="text-xl font-semibold">Location : {location}</h3>

            <p className="">{short_description}</p>
            <h3 className="text-xl font-semibold">
              Average Cost : {average_cost}
            </h3>
            <h3 className="text-xl font-semibold">
              Travel Time : {travel_time}
            </h3>
            <p className="text-xl font-semibold">
              Total Visitors Per Year : {totalVisitorsPerYear}
            </p>
            <p className="text-xl font-semibold">Seasonality : {seasonality}</p>
            <div className="mt-5">
              <p className="text-xl font-semibold">
                Name : {user?.displayName}
              </p>
              <p className="text-xl font-semibold">Email : {user?.email}</p>
            </div>

            <button className="btn bg-green-950 px-6 rounded-xl hover:text-black text-white w-40 text-xl font-semibold">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
