import { useLoaderData } from "react-router-dom";
import TouristsCard from "./TouristsCard";
import { useState } from "react";

const AllTouristsSpot = () => {
  const allTourists = useLoaderData();
  console.log(allTourists);

  const [sorts, setSorts] = useState(allTourists);
  // console.log("sorts", sorts);
  const handleSorts = (sortInfo) => {
    if (sortInfo === "sort") {
      const sortTourists = sorts.sort(
        (a, b) => a.average_cost - b.average_cost
      );
      // console.log(sortTourists);
      const sortTouristsData = [...sortTourists];

      setSorts(sortTouristsData);
    } else if (sortInfo === "default") {
      const sortTourists = sorts.sort(
        (a, b) => b.average_cost - a.average_cost
      );
      // console.log(sortTourists);
      const sortTouristsData = [...sortTourists];
      setSorts(sortTouristsData);
    }
  };

  return (
    <div className="my-6">
      <h1 className="text-3xl font-bold ml-3 md:ml-0 text-left md:text-center">
        All Tourists Spot
      </h1>

      <details className="dropdown">
        <summary className="m-1 btn px-10 rounded-xl bg-green-800 text-xl font-bold text-white hover:text-black ml-3 lg:ml-0 mt-3 lg:mt-0">
          Sort
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
          <li onClick={() => handleSorts("sort")}>
            <a>Short By Average_cost</a>
          </li>
          <li onClick={() => handleSorts("default")}>
            <a>Default</a>
          </li>
        </ul>
      </details>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
        {sorts?.map((spot) => (
          <TouristsCard key={spot._id} spot={spot}></TouristsCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
