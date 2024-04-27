const Testimonial = () => {
  return (
    <div className="my-20">
      <h1 className="text-2xl font-bold text-center my-3">
        {" "}
        Our Customer Review
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="card bg-base-100 shadow-xl py-10 px-4">
          <div className=" flex gap-2 items-center">
            <img
              src="https://i.ibb.co/r23B0sf/jonas-kakaroto-mj-Rwhvq-EC0-U-unsplash.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-full border-2 border-blue-700"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Naimul</h2>
              <p>Engineer</p>
            </div>
          </div>
          <div className="p-2">
            <h2 className="card-title">Customer Review</h2>
            <p className="mt-2">
              I had an absolutely wonderful time on this trip, it was a real
              unexpected treat.. I had looked at the trip initially due to the
              Sundarbans cruise, and loved india , and thought it looked
              interesting...
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl py-10 px-4">
          <div className="rounded-full   flex gap-2 items-center">
            <img
              src="https://i.ibb.co/3hPG059/kelly-sikkema-JN0-SUc-TOig0-unsplash.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-full border-2 border-blue-700"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Jerin</h2>
              <p>Web Developer</p>
            </div>
          </div>
          <div className="p-2">
            <h2 className="card-title">Customer Review</h2>
            <p className="mt-2">
              I had an absolutely wonderful time on this trip, it was a real
              unexpected treat.. I had looked at the trip initially due to the
              Sundarbans cruise, and loved india , and thought it looked
              interesting...
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl py-10 px-4">
          <div className="flex gap-2 items-center">
            <img
              src="https://i.ibb.co/tJHg2K8/1699492-P3-OLGJ1-1.png"
              alt=""
              className="w-16 h-16 object-cover rounded-full border-2 border-blue-700"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Belal</h2>
              <p>Teacher</p>
            </div>
          </div>
          <div className="p-2">
            <h2 className="card-title">Customer Review</h2>
            <p className="mt-2">
              I had an absolutely wonderful time on this trip, it was a real
              unexpected treat.. I had looked at the trip initially due to the
              Sundarbans cruise, and loved india , and thought it looked
              interesting...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
