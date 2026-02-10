import { Comparison, ComparisonHandle, ComparisonItem } from "@/components/shadcn/ComparisonSlider";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
	return (
		<div className="absolute inset-0 flex items-center justify-center p-8">
			<Comparison className="aspect-video max-w-lg rounded-xl overflow-hidden">
				<ComparisonItem position="left">
					<img
						src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
						alt="Before"
						className="size-full object-cover grayscale"
					/>
				</ComparisonItem>
				<ComparisonItem position="right">
					<img
						src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
						alt="After"
						className="size-full object-cover"
					/>
				</ComparisonItem>
				<ComparisonHandle />
			</Comparison>
		</div>
	);
}
