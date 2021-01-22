import React from "react";
import "./FeaturedMovie.css";

export default ({ item }) => {
  console.log(item);
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(http://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} Pontos</div>
            <div className="featured--year">2099</div>
            <div className="featured--seasons">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="featured--description">{item.overview}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
