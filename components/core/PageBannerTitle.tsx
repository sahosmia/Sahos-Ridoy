function PageBannerTitle({ title, img }) {
  return (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className="bg-gray-400 bg-center bg-no-repeat bg-cover text-light pt-40 lg:pt-44 pb-24 md:pb-32 relative before:absolute before:inset-y-0 before:inset-x-0 before:w-full before:h-full before:bg-black before:bg-opacity-90 z-10  before:-z-10  before:transition-all before:duration-500"
    >
      <div className="container text-center">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
    </section>
  );
}

export default PageBannerTitle;




