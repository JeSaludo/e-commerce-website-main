import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function MetricCard() {
  const metrics = [
    {
      symbol: DollarSign,
      title: "Total Revenue",
      total: "$90000",
      summary: " +20.1% from last month",
    },
    {
      symbol: DollarSign,
      title: "Order",
      total: "+2000",
      summary: " +20.1% from last month",
    },
    {
      symbol: DollarSign,
      title: "Sales",
      total: "+200",
      summary: " +20.1% from last month",
    },

    {
      symbol: DollarSign,
      title: "Total Revenue",
      total: "$90000",
      summary: " +20.1% from last month",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-4 my-2   ">
      {metrics.map((metric, index) => (
        <Card key={index} className="w-full p-4">
          <div className="flex justify-between">
            <h2 className="text-sm md:text-md">{metric.title}</h2>
            <metric.symbol />
          </div>

          <p className="text-2xl md:text-3xl font-bold">{metric.total}</p>
          <p className="text-[12px] md:text-sm text-muted-foreground">
            {metric.summary}
          </p>
        </Card>
      ))}
    </div>
  );
}
