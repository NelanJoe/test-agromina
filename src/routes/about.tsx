import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div>
        <p>About page</p>
      </div>
    </section>
  );
}
