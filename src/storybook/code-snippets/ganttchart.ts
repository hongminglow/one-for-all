export const code = `"use client";

import {
  GanttFeature,
  GanttFeatureItem,
  GanttFeatureList,
  GanttFeatureListGroup,
  GanttHeader,
  GanttMarker,
  GanttProvider,
  GanttSidebar,
  GanttSidebarGroup,
  GanttSidebarItem,
  GanttStatus,
  GanttTimeline,
  GanttToday,
} from "@/components/shadcn/GanttChart";
import { addDays } from "date-fns";
import { useCallback, useEffect, useState } from "react";

const makeDemoData = () => {
  const today = new Date();
  const statuses: GanttStatus[] = [
    { id: "1", name: "Planned", color: "#6B7280" },
    { id: "2", name: "In Progress", color: "#F59E0B" },
    { id: "3", name: "Done", color: "#10B981" },
  ];

  const features: GanttFeature[] = [
    {
      id: "1",
      name: "Design System",
      startAt: addDays(today, -30),
      endAt: addDays(today, -10),
      status: statuses[2],
    },
    {
      id: "2",
      name: "Component Library",
      startAt: addDays(today, -15),
      endAt: addDays(today, 15),
      status: statuses[1],
    },
    {
      id: "3",
      name: "Docs",
      startAt: addDays(today, 5),
      endAt: addDays(today, 35),
      status: statuses[0],
    },
  ];

  const markers = [
    { id: "m1", date: addDays(today, 0), label: "Launch" },
    { id: "m2", date: addDays(today, 25), label: "Beta" },
  ];

  return { features, markers };
};

export default function Demo() {
  const [data, setData] = useState<ReturnType<typeof makeDemoData> | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setData(makeDemoData());
    setReady(true);
  }, []);

  const handleMove = useCallback((id: string, startAt: Date, endAt: Date | null) => {
    setData((prev) =>
      prev
        ? {
            ...prev,
            features: prev.features.map((feature) => (feature.id === id ? { ...feature, startAt, endAt } : feature)),
          }
        : null,
    );
  }, []);

  if (!ready || !data) {
    return <div aria-hidden className="h-[420px] w-full rounded-2xl bg-muted/30" />;
  }

  return (
    <div className="h-[420px] w-full">
      <GanttProvider className="border border-border/60 rounded-2xl" range="monthly" zoom={100}>
        <GanttSidebar>
          <GanttSidebarGroup name="Roadmap">
            {data.features.map((feature) => (
              <GanttSidebarItem feature={feature} key={feature.id} />
            ))}
          </GanttSidebarGroup>
        </GanttSidebar>
        <GanttTimeline>
          <GanttHeader />
          <GanttFeatureList>
            <GanttFeatureListGroup>
              {data.features.map((feature) => (
                <GanttFeatureItem key={feature.id} {...feature} onMove={handleMove}>
                  <p className="flex-1 truncate text-xs font-semibold">{feature.name}</p>
                </GanttFeatureItem>
              ))}
            </GanttFeatureListGroup>
          </GanttFeatureList>
          {data.markers.map((marker) => (
            <GanttMarker key={marker.id} id={marker.id} date={marker.date} label={marker.label} />
          ))}
          <GanttToday />
        </GanttTimeline>
      </GanttProvider>
    </div>
  );
}`;
