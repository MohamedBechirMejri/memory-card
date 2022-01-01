const Images = (props) => {
  return (
    <div className="flex ">
      {props.images.map((image) => {
        return (
          <div className="flex flex-col items-center flex-wrap">
            <img
              src={image.url}
              alt={image.name}
              key={image.name}
              onClick={() => props.handleClick(image.name)}
              className="w-2/3 rounded-xl shadow"
            />
            <h2 className="text-[1.5em]">{image.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Images;
