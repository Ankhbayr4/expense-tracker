import React from "react";
import { Category } from "./Category";

export const Categories = (props) => {
  const { categories, loading } = props;

  if (loading) {
    return <p>...loading</p>;
  }

  return (
    <div>
      <h2 className="font-bold mb-2">Category</h2>
      <div className="flex flex-col gap-2">
        {categories?.map((category) => (
          <Category key={category.id} name={category.name} />
        ))}
      </div>
    </div>
  );
};
