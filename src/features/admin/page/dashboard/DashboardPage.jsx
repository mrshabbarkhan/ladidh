import DsbActions from "./DsbActions";
import OrderTable from "./OrderTable";

function DashboardPage() {
  return (
    <section>
      <h1 className="text-lg font-medium mb-5">Dashboard</h1>
      <DsbActions />
      <div className="mt-5">
        <OrderTable />
      </div>
    </section>
  );
}

export default DashboardPage;
