const Images = (props) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 transition-all ">
      {props.images.map((image) => {
        return (
          <div
            className="flex flex-col items-center max-w-[27%]    "
            key={image.name}
          >
            <img
              src={image.url}
              alt={image.name}
              onClick={() => props.handleClick(image.name)}
              className="   rounded-xl shadow"
            />
            <h2 className="text-[1.5em]">{image.name} </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Images;
