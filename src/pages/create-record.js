import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useRouter } from "next/router";

const CreateRecordPage = () => {
  const [recordType, setRecordType] = useState("inc");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(null);
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSelectRecodType = (type) => {
    setRecordType(type);
  };

  const onSubmit = async () => {
    const record = {
      userid: 1,
      categoryid: category,
      amount,
      type: recordType,
      description,
    };

    try {
      await axios.post("http://localhost:8000/records", record);
      resetInputValues();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const resetInputValues = () => {
    setRecordType("inc");
    setAmount("");
    setCategory("");
    setDate(new Date());
    setDescription("");
  };

  return (
    <div className="bg-[#F3F4F6] flex flex-col gap-8 items-center min-h-screen">
      <Navbar />
      <div>
        <button
          className={`btn ${recordType === "inc" && "btn-active btn-primary"}`}
          onClick={() => handleSelectRecodType("inc")}
        >
          Income
        </button>
        <button
          className={`btn ${recordType === "exp" && "btn-active btn-primary"}`}
          onClick={() => handleSelectRecodType("exp")}
        >
          Expense
        </button>
      </div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Amount?</span>
        </div>
        <input
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          type="number"
          placeholder="0.000"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Category</span>
        </div>
        <select
          className="select select-bordered"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option disabled selected>
            Choose
          </option>
          <option value={1}>Food</option>
          <option value={6}>Home</option>
          <option value={7}>Gift</option>
          <option value={8}>drink</option>
          <option value={9}>Taxi</option>
          <option value={10}>Shopping</option>
        </select>
      </label>

      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text" placeholde="Write here">
            Note
          </span>
        </div>
        <input
          type="text"
          placeholder="Write here"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <button class="btn" onClick={onSubmit}>
        Add Record
      </button>
    </div>
  );
};

export default CreateRecordPage;
