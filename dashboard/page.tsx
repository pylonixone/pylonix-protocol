import CatalystCard from "@/components/CatalystCard";
import StakeCard from "@/components/StakeCard";

export default function Dashboard() {

  return (

    <main>

      <h1>Pylonix Dashboard</h1>

      <CatalystCard />

      <StakeCard apr="22.8%" />

    </main>

  );

}
