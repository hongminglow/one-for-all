
import re

def parse_component_list(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    components = []
    current_library = "Unknown"

    # Simple logic to group by library based on ID ranges or just list them all
    # The input list is just numbered 1-158.
    # I'll just list them all in one big table for now, or try to infer library from URL

    for line in lines:
        line = line.strip()
        if not line or line.startswith('#') or line.startswith('|') or line.startswith('---'):
            continue

        match = re.match(r'(\d+)\.\s+(.*?)\s+:\s+(.*)', line)
        if match:
            id_num = int(match.group(1))
            name = match.group(2).strip()
            url = match.group(3).strip()

            # Infer library
            if "reactbits.dev" in url:
                lib = "React Bits"
            elif "shadcn.io" in url:
                lib = "Shadcn UI"
            elif "jolyui.dev" in url:
                lib = "Joly UI"
            elif "animate-ui.com" in url:
                lib = "Animate UI"
            elif "magicui.design" in url:
                lib = "Magic UI"
            elif "aceternity.com" in url:
                lib = "Aceternity UI"
            else:
                lib = "Other"

            components.append({
                "id": id_num,
                "name": name,
                "url": url,
                "library": lib
            })

    return components

def generate_readme(components, output_path):
    readme_content = """# One for All - UI Component Library

A comprehensive collection of 158+ high-quality, animated, and interactive UI components for modern web applications.

## Overview
This project serves as a central registry for diverse UI components from various libraries, including React Bits, Shadcn UI, Joly UI, Animate UI, Magic UI, and Aceternity UI. It provides a consistent interface and easy integration for developers.

## Features
- **158+ Components**: A vast array of components ranging from simple buttons to complex 3D animations.
- **Library Agnostic**: Integrates components from multiple sources.
- **Storybook Ready**: Includes demos and documentation for each component.
- **Easy Integration**: Follow our [SOP](SOP_ADD_COMPONENT.md) to add new components.

## Component List

| ID | Component Name | Library | Reference URL |
|----|----------------|---------|---------------|
"""

    for comp in components:
        readme_content += f"| {comp['id']} | {comp['name']} | {comp['library']} | [Link]({comp['url']}) |\n"

    readme_content += """
## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```

## Adding New Components

Please refer to the [Standard Operating Procedure (SOP)](SOP_ADD_COMPONENT.md) for detailed instructions on adding new components.

## License
MIT
"""

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(readme_content)
    print(f"Generated {output_path}")

if __name__ == "__main__":
    components = parse_component_list("component-list.md")
    generate_readme(components, "README.md")
