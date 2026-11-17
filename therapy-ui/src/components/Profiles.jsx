import { useEffect, useState } from "react";
import api from "../services/api";

export default function Profiles() {
  const [profiles, setProfiles] = useState([]);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const getProfiles = async () => {
    try {
      const res = await api.get("/profiles");
      setProfiles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveProfile = async (e) => {
    e.preventDefault();

    try {
      await api.post("/profiles", profile);

      setProfile({
        name: "",
        email: "",
      });

      getProfiles();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        Profiles
      </h2>

      <form
        onSubmit={saveProfile}
        className="space-y-3"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={profile.name}
          onChange={(e) =>
            setProfile({
              ...profile,
              name: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={profile.email}
          onChange={(e) =>
            setProfile({
              ...profile,
              email: e.target.value,
            })
          }
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Profile
        </button>
      </form>

      <div className="mt-6 space-y-2">
        {profiles.map((item) => (
          <div
            key={item.id}
            className="border p-3 rounded"
          >
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>{item.email}</p>
          </div>
        ))}
      </div>

    </div>
  );
}