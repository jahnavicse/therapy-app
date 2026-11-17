import Profiles from "./components/Profiles";
import Therapies from "./components/Therapies";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Therapy Management System
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <Profiles />

        <Therapies />

      </div>

    </div>
  );
}

export default App;