"use client";

import React from "react";
import Masonry from "react-masonry-css";

const MasonryGrid = ({ children, gap = 6 }) => {
  const breakpointColumns = {
    default: 4,
    1024: 3,
    768: 2,
    480: 1,
  };

  return (
    <div className="container -mx-auto p-6">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto" // Removes default margin
        columnClassName="ml-4" 
      >
        {children.map((child, index) => (
          <div key={index} className={`mb-4 bg-white rounded-lg shadow-md`}>
            {child}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryGrid;
