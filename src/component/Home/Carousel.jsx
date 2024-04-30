const Carousel = () => {
  return (
    <div className="carousel w-full md:h-[500px] h-[300px] lg:rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/5LVbphJ/ck-yeo-5-J6-VUR6r9-Wc-unsplash-1.jpg"
          className="w-full"
        />
        <div className="absolute  w-full h-full lg:mt-[150px] md:mt-[120px] mt-[30px]">
          <div className="text-center space-y-3 text-white">
            <h1 className="text-4xl font-bold">Thailand</h1>
            <p className="md:w-2/3 md:mx-auto text-center text-lg">
              Thailand is a Southeast Asian country.It's known for tropical
              beaches, opulent royal palaces , ancient ruins and ornate temples
              displaying figures of bodda
            </p>
            <button className="bg-orange-400 rounded-2xl btn px-6 border-none">
              Explore More
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/1qtWr27/meric-dagli-Hx-Jv-FZGf-SHM-unsplash.jpg"
          className="w-full"
        />
        <div className="absolute  w-full h-full lg:mt-[150px] md:mt-[120px] mt-[30px]">
          <div className="text-center space-y-3 text-white">
            <h1 className="text-4xl font-bold">Malaysia</h1>
            <p className="md:w-2/3 md:mx-auto text-center text-lg">
              Malaysia is a Southeast Asian country occupying parts of the Malaooo
              Peninsula and the island of Borneo.It's known for its beaches,
              rainforests and mix of Malay
            </p>
            <button className="bg-orange-400 rounded-2xl btn px-6 border-none">
              Explore More
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/gJ9DN66/sabbir-rahaman-PAxutt-F3-Bv-Q-unsplash.jpg"
          className="w-full"
        />
        <div className="absolute  w-full h-full lg:mt-[150px] md:mt-[120px] mt-[30px]">
          <div className="text-center space-y-3 text-white">
            <h1 className="text-4xl font-bold">Bangladesh</h1>
            <p className="md:w-2/3 md:mx-auto text-center text-lg">
              Bangladesh, to the east of India on the Bay of Bengal, is a South
              Asian country marked by lush greenery and many waterways. Its
              Padma (Ganges)
            </p>
            <button className="bg-orange-400 rounded-2xl btn px-6 border-none">
              Explore More
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
