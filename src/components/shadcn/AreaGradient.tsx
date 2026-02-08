"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AreaGradient() {
  return (
    <ChartContainer className="h-[250px] w-full" config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="month"
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        <defs>
          <linearGradient
            id="area-chart-09-fillDesktop"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient
            id="area-chart-09-fillMobile"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <Area
          dataKey="mobile"
          fill="url(#area-chart-09-fillMobile)"
          fillOpacity={0.4}
          stackId="a"
          stroke="#06b6d4"
          type="natural"
        />
        <Area
          dataKey="desktop"
          fill="url(#area-chart-09-fillDesktop)"
          fillOpacity={0.4}
          stackId="a"
          stroke="#4f46e5"
          type="natural"
        />
      </AreaChart>
    </ChartContainer>
  );
}

export default AreaGradient;
