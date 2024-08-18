import MetricCard from "@/app/ui/components/card-component";
import { SaleChart } from "@/app/ui/components/chart-component";
import Header from "@/app/ui/components/header";

export default function Dashboard() {
  return (
    <div className="m-4">
      <section>
        <Header title="Dashboard" />
        <MetricCard></MetricCard>

        <SaleChart></SaleChart>
      </section>
    </div>
  );
}
