import axios from "axios";

export default function Home() {
  const createCategory = async () => {
    await axios.post("http://localhost:8000/customers", {
      firstName: "haha",
      lastName: "hih",
      email: "",
      address: "",
    });
  };

  const deleteCategory = async () => {
    await axios.delete("http://localhost:8000/customers/1");
  };

  return (
    <div>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button onClick={createCategory}>post request</button>
    </div>
  );
}
