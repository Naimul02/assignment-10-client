import { Link } from "react-router-dom";

const CountryCategory = ({ country }) => {
  const {
    _id,

    tourist_spot_name,
    short_description,
    location,
    seasonality,
    average_cost,
    country_name,
  } = country;
  return (
    <div className="card bg-base-100 border border-rounded p-3">
      <div className="card-body p-1">
        <h2 className="text-xl font-bold">Spot Name : {tourist_spot_name}</h2>
        <h2 className="text-lg font-semibold">Country : {country_name}</h2>
        <h2 className="text-lg font-semibold">Location : {location}</h2>
        <p>{short_description}</p>
        <div>
          <p className="text-lg font-semibold">Cost : {average_cost}</p>
        </div>
        <p className="text-lg font-semibold">Seasonality : {seasonality}</p>
      </div>

      <div className="card-actions mt-auto w-full">
        <Link to={`/countriesDetails/${_id}`} className="w-full">
          <button className="btn bg-violet-950 text-white hover:text-black mt-auto w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CountryCategory;
