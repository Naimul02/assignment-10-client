import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const { image, country_name, short_description } = country;
  return (
    <Link
      to={`/countriesCategories/${country_name}`}
      className="card bg-base-100 border rounded-lg p-3"
    >
      <figure>
        <img src={image} alt="" className="rounded-xl w-full" />
      </figure>
      <div className="card-body p-1">
        <h2 className="card-title">{country_name}</h2>
        <div className="space-y-1">
          <p>{short_description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Country;
