import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        <div className="lg:w-3/4 mx-auto space-y-3">
          <p className="text-sm text-slate-500 text-center">Lorem, ipsum.</p>
          <h3 className="text-3xl font-medium text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="text-sm text-slate-500 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            commodi quos pariatur odit eos ullam harum provident accusantium
            ducimus veniam!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:place-items-center">
          <div className="flex flex-col gap-8 ">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="lg:text-right space-y-1.5 order-1 lg:order-0">
                  <h4 className="font-medium">Lorem ipsum dolor sit amet.</h4>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="w-16 h-16 bg-slate-300 flex items-center justify-center rounded-full">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-slate-300 rounded-md flex items-center justify-center lg:w-[400px] h-[400px]">
            2
          </div>
          <div className="flex flex-col gap-8 ">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-300 flex items-center justify-center rounded-full">
                  {index + 4}
                </div>
                <div className="lg:text-left space-y-1.5">
                  <h4 className="font-medium">Lorem ipsum dolor sit amet.</h4>
                  <p>Lorem, ipsum dolor.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-1 w-20 lg:w-24 bg-amber-500 rounded-full" />
            <p className="text-slate-500">Lorem, ipsum.</p>
            <div className="h-1 w-20 lg:w-24 bg-amber-500 rounded-full" />
          </div>
          <h2 className="font-medium text-lg lg:text-2xl text-center lg:w-3/4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            autem harum porro. Quia eum deleniti facere cupiditate itaque sunt
            provident.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="bg-slate-300 w-full h-[200px] rounded-md flex items-center justify-center">
            <span>Image 1</span>
          </div>
          <div className="bg-slate-300 w-full h-[200px] lg:h-full rounded-md flex items-center justify-center lg:row-span-2">
            <span>Image 2</span>
          </div>
          <div className="bg-slate-300 w-full h-[200px] rounded-md flex items-center justify-center lg:col-span-2">
            <span>Image 3</span>
          </div>
          <div className="bg-slate-300 w-full h-[200px] rounded-md flex items-center justify-center">
            <span>Image 4</span>
          </div>
          <div className="bg-slate-300 w-full h-[200px] rounded-md flex items-center justify-center lg:col-span-2">
            <span>Image 5</span>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <p className="text-slate-500 text-sm text-pretty">
                Lorem, ipsum dolor.
              </p>
              <h3 className="font-medium text-lg">Lorem ipsum dolor sit.</h3>
              <p className="text-slate-500 text-sm text-pretty">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                doloribus optio delectus distinctio mollitia, at molestias
                veniam nesciunt dicta dolorem aspernatur dolores aut. Laborum,
                voluptatibus.
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="font-medium text-lg">Lorem ipsum dolor sit.</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="shadow rounded-md p-4 space-y-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-300 grid place-items-center">
                        <span>{index + 1}</span>
                      </div>
                      <p className="text-sm text-pretty text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime totam dolores repudiandae, beatae quam voluptatum
                        alias consectetur. Debitis, rem odio.
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-6 justify-center">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <div
                      key={index}
                      className="shadow rounded-md p-4 space-y-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-300 grid place-items-center">
                        <span>{index + 4}</span>
                      </div>
                      <p className="text-sm text-pretty text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime totam dolores repudiandae, beatae quam voluptatum
                        alias consectetur. Debitis, rem odio.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-300 h-[400px] lg:h-full flex justify-center items-center rounded-md">
            <span>Image</span>
          </div>
        </div>
      </section>
    </div>
  );
}
