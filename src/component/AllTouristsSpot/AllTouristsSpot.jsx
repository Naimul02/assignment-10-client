import { useLoaderData } from "react-router-dom";
import TouristsCard from "./TouristsCard";

const AllTouristsSpot = () => {
  const allTourists = useLoaderData();
  console.log(allTourists);
  return (
    <div className="my-6">
      <h1 className="text-3xl font-bold text-center">All Tourists Spot</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
        {allTourists?.map((spot) => (
          <TouristsCard key={spot._id} spot={spot}></TouristsCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
