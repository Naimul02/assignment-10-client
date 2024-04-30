import { Link } from "react-router-dom";

const TouristsCard = ({ spot }) => {
  // console.log(spot);
  const {
    _id,
    image,
    tourist_spot_name,
    totalVisitorsPerYear,
    travel_time,
    seasonality,
    average_cost,
  } = spot;
  return (
    <div className="card bg-base-100 border border-rounded p-3">
      <figure>
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body p-1">
        <h2 className="card-title">{tourist_spot_name}</h2>
        <div className="space-y-1">
          <p className="text-lg font-semibold">
            Visitors Per Year : {totalVisitorsPerYear}
          </p>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Travel Time : {travel_time}</p>
            <p className="text-lg font-semibold">Cost : $ {average_cost}</p>
          </div>
          <p className="text-lg font-semibold">Seasonality : {seasonality}</p>
        </div>

        <div className="card-actions mt-auto w-full">
          <Link to={`/details/${_id}`} className="w-full">
            <button className="btn bg-violet-950 text-white hover:text-black mt-auto w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristsCard;
