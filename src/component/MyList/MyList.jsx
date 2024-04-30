import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const tourists = useLoaderData();
  const { email } = useParams();

  const filterTourists = tourists.filter((tourist) => tourist.email === email);
  const [touristsData, setTouristsData] = useState(filterTourists);
  console.log(filterTourists);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-coral-three.vercel.app/touristSpot/${_id}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successful",
                icon: "success",
              });
              const remainingTourist = filterTourists?.filter(
                (tourist) => tourist._id !== _id
              );
              setTouristsData(remainingTourist);
              location.reload();
            }
          });
      }
    });
    console.log(_id);
  };
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
            {touristsData?.map((tourist) => (
              <tr key={tourist._id}>
                <th></th>
                <td>{tourist.tourist_spot_name}</td>
                <td>{tourist.country_name}</td>
                <td>{tourist.location}</td>
                <td>{tourist.average_cost}</td>
                <td>
                  <button
                    className="btn btn-sm bg-red-600 text-white hover:text-black"
                    onClick={() => handleDelete(tourist._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/update/${tourist._id}`}>
                    <button className="btn btn-sm bg-green-600 text-white hover:text-black">
                      Update
                    </button>
                  </Link>
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
