
import json
import os

files_map = {
    "image-crop.json": "src/components/shadcn/ImageCrop.tsx",
    "3d-marquee.json": "src/components/shadcn/ThreeDMarquee.tsx",
    "animated-cursor.json": "src/components/shadcn/AnimatedCursor.tsx",
    "animated-testimonials.json": "src/components/shadcn/AnimatedTestimonials.tsx",
    "animated-tooltip.json": "src/components/shadcn/AnimatedTooltip.tsx",
    "glimpse.json": "src/components/shadcn/Glimpse.tsx",
    "spinner.json": "src/components/shadcn/Spinner.tsx",
    "marquee.json": "src/components/shadcn/Marquee.tsx",
    "video-player.json": "src/components/shadcn/VideoPlayer.tsx",
    "beams-collision.json": "src/components/shadcn/BeamCollision.tsx",
    "hover-card.json": "src/components/ui/hover-card.tsx"
}

for json_file, target_path in files_map.items():
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            # The structure might be slightly different depending on if it's a registry item list or single item
            # Based on previous output, it seems to be single object like {"files": [...]}
            if "files" in data and len(data["files"]) > 0:
                content = data["files"][0]["content"]

                # Fix specific imports if needed. Example: ensure we point to existing ui components
                # Replace @/components/ui/button with local path or just keep it if it works

                # Manual fixes
                content = content.replace('"~/lib/utils"', '"@/lib/utils"')

                # Fix for hover-card to use radix-ui if fetched directly and it doesn't match local setup
                if json_file == "hover-card.json":
                    # Ensure path matches if needed, but usually registry items assume standard shadcn setup
                    pass

                # Fix for VideoPlayer - media-chrome might use standard CSS vars or need adjustment
                # The content seems standard.

                # Ensure directory exists for target path
                os.makedirs(os.path.dirname(target_path), exist_ok=True)

                with open(target_path, 'w', encoding='utf-8') as tf:
                    tf.write(content)
                print(f"Updated {target_path}")
            else:
                print(f"No content found in {json_file}")
    except Exception as e:
        print(f"Error processing {json_file}: {e}")
