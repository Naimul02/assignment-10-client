import { useLoaderData } from "react-router-dom";
import CountryCategory from "./CountryCategory";

const CountryCategories = () => {
  const countriesData = useLoaderData();
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {countriesData?.map((country) => (
          <CountryCategory
            key={country._id}
            country={country}
          ></CountryCategory>
        ))}
      </div>
    </div>
  );
};

export default CountryCategories;
