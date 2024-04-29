import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const touristSpot = form.touristSpot.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const shortDescription = form.shortDescription.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

    const touristsSpotInfo = {
      name,
      email,
      image: photo,
      tourist_spot_name: touristSpot,
      country_name: countryName,
      location,
      short_description: shortDescription,
      average_cost: averageCost,
      seasonality,
      travel_time: travelTime,
      totalVisitorsPerYear,
    };

    fetch("http://localhost:5001/touristSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristsSpotInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Tourist Spot Added Successful");
          // form.reset();
        }
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-full ">
        <div className="card shrink-0 w-full">
          <form className="card-body  w-full" onSubmit={handleSubmit}>
            <div className="flex gap-3">
              <div className="form-control  w-full">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="user name"
                  className="input border border-green-800 w-full "
                  required
                  defaultValue={user?.displayName}
                  name="name"
                />
              </div>
              <div className="form-control  w-full">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input border border-green-800 w-full "
                  required
                  name="email"
                  defaultValue={user?.email}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input border border-green-800 w-full "
                required
                name="photo"
              />
            </div>
            <div className="flex gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Tourist Spot Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Tourist Spot Name"
                  className="input border border-green-800 w-full "
                  required
                  name="touristSpot"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Country Name</span>
                </label>
                <input
                  type="text"
                  placeholder="country name"
                  className="input border border-green-800 w-full "
                  required
                  name="countryName"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  className="input border border-green-800 w-full "
                  required
                  name="location"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  placeholder="short description"
                  className="input border border-green-800 w-full "
                  required
                  name="shortDescription"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Average Cost</span>
                </label>
                <input
                  type="text"
                  placeholder="Average Cost"
                  className="input border border-green-800 w-full "
                  required
                  name="averageCost"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Seasonality</span>
                </label>
                <input
                  type="text"
                  placeholder="seasonality"
                  className="input border border-green-800 w-full "
                  required
                  name="seasonality"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Travel Time</span>
                </label>
                <input
                  type="text"
                  placeholder="travel time"
                  className="input border border-green-800 w-full "
                  required
                  name="travelTime"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Total Vistitors Per Year</span>
                </label>
                <input
                  type="text"
                  placeholder="total visitors per year"
                  className="input border border-green-800 w-full "
                  required
                  name="totalVisitorsPerYear"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-xl hover:text-black bg-green-800 text-white">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
