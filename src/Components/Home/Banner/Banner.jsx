import bannerImg from '../../../assets/Book.png';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] container mx-auto my-10 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse gap-40">
        <img
          src={bannerImg}
          className="max-w-sm "
        />
        <div>
          <h1 className="text-5xl font-bold ">
            Books to freshen up <br />your bookshelf
          </h1>
          <button className="btn btn-success text-bold text-lg text-white mt-10">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
