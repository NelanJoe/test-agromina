import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/discussion")({
  component: Discussion,
});

function Discussion() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div>
        <p>Discussion page</p>
      </div>
    </section>
  );
}
