const Images = (props) => {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-8 transition-all bg-[#aaaa] p-8 m-4 rounded-3xl "
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      {props.images.map((image) => {
        return (
          <div
            className="flex flex-col items-center max-w-[27%] transition-all hover:scale-105  "
            key={image.name}
          >
            <img
              src={image.url}
              alt={image.name}
              onClick={() => props.handleClick(image.name)}
              className="rounded-xl transition-all active:scale-95 ring-4 ring-white shadow-2xl h-44"
            />
            <h2 className="text-[1.5em] transition-all">{image.name} </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Images;
