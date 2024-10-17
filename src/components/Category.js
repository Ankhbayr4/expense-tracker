import { Eye } from "lucide-react";

export const Category = (props) => {
  const { name } = props;
  return (
    <div className="flex gap-4 cursor-pointer">
      <Eye />
      <p className="text-base font-medium">{name}</p>
    </div>
  );
};
