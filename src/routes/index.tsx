import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <section>
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p>Lorem, ipsum.</p>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus at
          aspernatur vitae delectus nam quo alias omnis perferendis facere
          impedit.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          laudantium expedita saepe optio distinctio perferendis quod sint
          praesentium quo dolores?
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-row gap-3">
              <div className="flex flex-col justify-self-end gap-3">
                <h4>Lorem, ipsum.</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="w-12 h-12 bg-slate-200 rounded-full inline-flex items-center justify-center">
                1
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="flex flex-col gap-3">
                <h4>Lorem, ipsum.</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="w-12 h-12 bg-slate-200 rounded-full inline-flex items-center justify-center">
                2
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] bg-slate-200 rounded-md">2</div>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-row gap-3">
              <div className="w-12 h-12 bg-slate-200 rounded-full inline-flex items-center justify-center">
                3
              </div>
              <div className="flex flex-col gap-3">
                <h4>Lorem, ipsum.</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="w-12 h-12 bg-slate-200 rounded-full inline-flex items-center justify-center">
                4
              </div>
              <div className="flex flex-col gap-3">
                <h4>Lorem, ipsum.</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
