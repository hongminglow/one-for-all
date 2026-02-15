import type { ComponentProps } from "react";
import InteractiveBook from "@/components/ui/interactive-book";

type RenderProps = ComponentProps<typeof InteractiveBook>;

export default function Render(props: RenderProps) {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-gray-100 dark:bg-neutral-900 border rounded-lg">
      <InteractiveBook
        coverImage="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop"
        bookTitle="The Design of Everyday Things"
        bookAuthor="Don Norman"
        pages={[
          {
            title: "Chapter 1: The Psychopathology of Everyday Things",
            content: (
              <p>
                "Two of the most important characteristics of good design are
                discoverability and understanding. Discoverability: Is it
                possible to even figure out what actions are possible and where
                and how to perform them? Understanding: What does it all mean?
                How is the product supposed to be used? What do all the
                different controls and settings mean?"
              </p>
            ),
            pageNumber: 1,
          },
          {
            title: "Chapter 2: The Summarized Design Principles",
            content: (
              <p>
                "1. Use both knowledge in the world and knowledge in the head.
                2. Simplify the structure of tasks. 3. Make things visible:
                bridge the gulfs of execution and evaluation. 4. Get the
                mappings right. 5. Exploit constraints. 6. Design for error. 7.
                When all else fails, standardize."
              </p>
            ),
            pageNumber: 2,
          },
        ]}
      />
    </div>
  );
}
