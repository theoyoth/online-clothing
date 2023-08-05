const ImageSlider = () => {
  return (
    <>
      <Slide {...Properties}>
        {ShirtBg.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center w-full h-screen ${
              colorBg[Math.floor(Math.random() * colorBg.length)]
            }`}
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-[45%] object-cover rounded-lg"
            />
          </div>
        ))}
      </Slide>
    </>
  );
};

export default ImageSlider;
