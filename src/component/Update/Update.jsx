import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  // const { user } = useContext(AuthContext);
  const tourists = useLoaderData();

  console.log("tourists", tourists);

  const {
    name,
    email,
    image,
    tourist_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
  } = tourists;

  const handleUpdate = (e) => {
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

    fetch(
      `https://assignment-10-server-448t7upom-naimul-islums-projects.vercel.app/update/${tourists._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(touristsSpotInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Information updated successful");
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4">UPDATE</h1>
      <div className="hero min-h-screen">
        <div className="hero-content w-full ">
          <div className="card shrink-0 w-full">
            <form className="card-body  w-full" onSubmit={handleUpdate}>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="user name"
                    className="input border border-green-800 w-full "
                    required
                    defaultValue={name}
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
                    defaultValue={email}
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
                  defaultValue={image}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-3">
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
                    defaultValue={tourist_spot_name}
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
                    defaultValue={country_name}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
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
                    defaultValue={location}
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
                    defaultValue={short_description}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
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
                    defaultValue={average_cost}
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
                    defaultValue={seasonality}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
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
                    defaultValue={travel_time}
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
                    defaultValue={totalVisitorsPerYear}
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-xl hover:text-black bg-green-800 text-white">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
