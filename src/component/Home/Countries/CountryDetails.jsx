import { useLoaderData, useParams } from "react-router-dom";

const CountryDetails = () => {
  const countries = useLoaderData();
  console.log(countries);

  const { id } = useParams();
  const countriesData = countries.find((tourist) => tourist._id === id);
  console.log(countriesData);

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
  } = countriesData;

  return (
    <div className="hero lg:h-[500px] my-10">
      <div className="flex flex-col items-center lg:flex-row  h-full">
        <img
          src={image}
          className="lg:max-w-[500px] w-full lg:rounded-xl h-full"
        />
        <div className="lg:ml-10 ml-3 lg:mt-0 mt-6">
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

            {/* <button className="btn bg-green-950 px-6 rounded-xl hover:text-black text-white w-40 text-xl font-semibold">
          Add
        </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
