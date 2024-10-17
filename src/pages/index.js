import Navbar from "@/components/Navbar";
import useSWR from "swr";
import { Records } from "../components/Records";
import { Categories } from "../components/Categories";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const HomePage = () => {
  const { data: records, isLoading: isLoadingRecords } = useSWR(
    "http://localhost:8000/records",
    fetcher
  );
  const { data: categories, isLoading: isLoadingCategories } = useSWR(
    "http://localhost:8000/category",
    fetcher
  );

  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="container mx-auto flex">
        <div className="w-72">
          <Categories
            categories={categories?.data}
            loading={isLoadingCategories}
          />
        </div>
        <div className="flex-1">
          <Records records={records?.records} loading={isLoadingRecords} />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
