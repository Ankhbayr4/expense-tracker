import { Apple } from "lucide-react";
import { Utensils } from "lucide-react";
import { House } from "lucide-react";

const categoryIcons = [
  {
    categoryId: 1,
    icon: <Utensils color="white" />,
    color: "green",
  },
  {
    categoryId: 6,
    icon: <House color="white" />,
    color: "brown",
  },
  {
    categoryId: 7,
    icon: <Apple color="white" />,
    color: "red",
  },
  {
    categoryId: 8,
    icon: <Apple color="white" />,
    color: "red",
  },
  {
    categoryId: 9,
    icon: <Apple color="white" />,
    color: "red",
  },
  {
    categoryId: 10,
    icon: <Apple color="white" />,
    color: "red",
  },
];

const getCategoryIcon = (categoryId) => {
  const foundedCategory = categoryIcons.find(
    (category) => category.categoryId === Number(categoryId)
  );

  if (foundedCategory) {
    return foundedCategory;
  }

  return categoryIcons[0];
};

export const RecordIcon = ({ categoryId }) => {
  const categoryIcon = getCategoryIcon(categoryId);
  return (
    <div
      className={`flex justify-center items-center w-10 h-10 rounded-full color-white`}
      style={{
        backgroundColor: categoryIcon?.color,
      }}
    >
      {categoryIcon?.icon}
    </div>
  );
};
