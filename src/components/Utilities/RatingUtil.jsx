const RatingUtil = ({ rating }) => {
  const decimal = 5 - rating;
  const gradient = `linear-gradient(90deg, gold ${decimal * 100}%, lightgray ${
    (1 - decimal) * 100
  }%)`;
  return (
    <div className="w-[100px] justify-center flex ">
      {Array.from({ length: 5 }).map((each, i) => {
        return (
          <div
            style={
              i + 1 > rating
                ? {
                    height: "20px",
                    width: "20px",
                    background: gradient,
                    clipPath:
                      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  }
                : {
                    background: "gold",

                    height: "20px",
                    width: "20px",
                    clipPath:
                      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  }
            }
          ></div>
        );
      })}
    </div>
  );
};

export default RatingUtil;
