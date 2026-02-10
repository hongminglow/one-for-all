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

type RenderProps = Record<string, unknown>;

function createDemoData() {
	const today = new Date();
	const statuses: GanttStatus[] = [
		{ id: "1", name: "Planned", color: "#6B7280" },
		{ id: "2", name: "In Progress", color: "#F59E0B" },
		{ id: "3", name: "Done", color: "#10B981" },
	];

	const features: GanttFeature[] = [
		{
			id: "1",
			name: "Design System Setup",
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
			name: "Documentation",
			startAt: addDays(today, 5),
			endAt: addDays(today, 35),
			status: statuses[0],
		},
		{
			id: "4",
			name: "API Integration",
			startAt: addDays(today, -5),
			endAt: addDays(today, 25),
			status: statuses[1],
		},
		{
			id: "5",
			name: "Testing & QA",
			startAt: addDays(today, 20),
			endAt: addDays(today, 45),
			status: statuses[0],
		},
		{
			id: "6",
			name: "Launch Preparation",
			startAt: addDays(today, 40),
			endAt: addDays(today, 55),
			status: statuses[0],
		},
	];

	const markers = [
		{
			id: "m1",
			date: addDays(today, -20),
			label: "Kickoff",
			className: "bg-blue-100 text-blue-900",
		},
		{
			id: "m2",
			date: addDays(today, 30),
			label: "Beta Release",
			className: "bg-purple-100 text-purple-900",
		},
		{
			id: "m3",
			date: addDays(today, 50),
			label: "Launch",
			className: "bg-green-100 text-green-900",
		},
	];

	return { features, markers };
}

const demoMarkers: { id: string; date: Date; label: string; className: string }[] = [];

export default function Render(props: RenderProps) {
	const [mounted, setMounted] = useState(false);
	const [data, setData] = useState<{
		features: GanttFeature[];
		markers: typeof demoMarkers;
	} | null>(null);

	useEffect(() => {
		setMounted(true);
		setData(createDemoData());
	}, []);

	const handleMoveFeature = useCallback((id: string, startAt: Date, endAt: Date | null) => {
		if (!endAt) return;
		setData((prev) =>
			prev
				? {
						...prev,
						features: prev.features.map((feature) => (feature.id === id ? { ...feature, startAt, endAt } : feature)),
					}
				: null,
		);
	}, []);

	// Prevent SSR to avoid dnd-kit hydration mismatch
	if (!mounted || !data) {
		return <div className="h-screen w-screen bg-muted/50 animate-pulse" />;
	}

	return (
		<div className="h-screen w-screen">
			<GanttProvider className="border rounded-lg" range="monthly" zoom={100}>
				<GanttSidebar>
					<GanttSidebarGroup name="Product Roadmap">
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
								<GanttFeatureItem key={feature.id} onMove={handleMoveFeature} {...feature}>
									<p className="flex-1 truncate text-xs">{feature.name}</p>
								</GanttFeatureItem>
							))}
						</GanttFeatureListGroup>
					</GanttFeatureList>
					{data.markers.map((marker) => (
						<GanttMarker key={marker.id} {...marker} />
					))}
					<GanttToday />
				</GanttTimeline>
			</GanttProvider>
		</div>
	);
}
