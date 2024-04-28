import { useLoaderData, useParams } from "react-router-dom";

const MyList = () => {
  const tourists = useLoaderData();
  const { email } = useParams();

  const filterTourists = tourists.filter((tourist) => tourist.email === email);

  return (
    <div>
      <div className="overflow-x-auto mt-6 mb-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Tourist Spot Name</th>
              <th>Country</th>
              <th>Location</th>
              <th>Average Cost</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filterTourists?.map((tourist) => (
              <tr key={tourist._id}>
                <th>1</th>
                <td>{tourist.tourist_spot_name}</td>
                <td>{tourist.country_name}</td>
                <td>{tourist.location}</td>
                <td>{tourist.average_cost}</td>
                <td>
                  <button className="btn btn-sm bg-red-600 text-white hover:text-black">
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn btn-sm bg-green-600 text-white hover:text-black">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
