import React from "react";
import "./SearchList.css";

export const SearchList = ({ searchList }) => {
  return (
    <div className="search-list-container">
      {searchList.map((data) => (
        <div className="search-items" key={data.id}>
          <img
            width="50"
            height="50"
            style={{ objectFit: "contain" }}
            src={
              data.poster_path
                ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBTSDdspF-1EtDKvyQL-k8iG7qNcQsxuKZA&usqp=CAU`
            }
            alt="movie poster"
          />
          <p className="title">{data.title}</p>
        </div>
      ))}
    </div>
  );
};
