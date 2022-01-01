const Images = (props) => {
  return (
    <div>
      {props.images.map((image) => {
        return (
          <div className="">
            <img
              src={image.url}
              alt={image.name}
              key={image.name}
              onClick={() => props.handleClick(image.name)}
            />
            <h2>{image.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Images;
