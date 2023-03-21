/* eslint-disable array-callback-return */
import React from "react";

export default function MovieRank({ movieContents, text = "hi" }) {
  return (
    <div style={{ backgroundColor: "wheat" }}>
      {movieContents.map((movie) => {
        <p>
          {movieContents.indexOf({ movie })}
          {text}
        </p>;
      })}
    </div>
  );
}
