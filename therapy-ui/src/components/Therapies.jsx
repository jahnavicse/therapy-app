import { useEffect, useState } from "react";
import api from "../services/api";

export default function Therapies() {
  const [therapies, setTherapies] = useState([]);
  const [therapyName, setTherapyName] = useState("");

  const getTherapies = async () => {
    try {
      const res = await api.get("/therapies");
      setTherapies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveTherapy = async (e) => {
    e.preventDefault();

    try {
      await api.post("/therapies", {
        name: therapyName,
        tasks: [],
      });

      setTherapyName("");

      getTherapies();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTherapies();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        Therapies
      </h2>

      <form
        onSubmit={saveTherapy}
        className="flex gap-2"
      >
        <input
          type="text"
          placeholder="Therapy Name"
          className="border p-2 rounded flex-1"
          value={therapyName}
          onChange={(e) =>
            setTherapyName(e.target.value)
          }
        />

        <button
          className="bg-green-600 text-white px-4 rounded"
        >
          Save
        </button>
      </form>

      <div className="mt-6 space-y-2">
        {therapies.map((therapy) => (
          <div
            key={therapy.id}
            className="border p-3 rounded"
          >
            <p className="font-semibold">
              {therapy.name}
            </p>

            <p>
              Tasks:
              {" "}
              {therapy.tasks?.length || 0}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}