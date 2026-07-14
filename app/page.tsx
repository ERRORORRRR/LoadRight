export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">LoadRight</h1>
          <p className="text-slate-400 mt-2">
            Professional Weight & Balance Calculator
          </p>
        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT SIDE */}

          <div className="space-y-6">

            {/* Aircraft */}

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-xl font-semibold mb-4">
                Aircraft Setup
              </h2>

              <div className="space-y-4">

                <input
                  className="w-full p-3 rounded bg-slate-800"
                  placeholder="Aircraft Registration"
                />

                <select className="w-full p-3 rounded bg-slate-800">

                  <option>Cessna 172R</option>

                  <option>Cessna 172S</option>

                </select>

                <input
                  className="w-full p-3 rounded bg-slate-800"
                  placeholder="Basic Empty Weight (lb)"
                />

                <input
                  className="w-full p-3 rounded bg-slate-800"
                  placeholder="Empty CG (in)"
                />

              </div>

            </div>

            {/* Crew */}

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-xl font-semibold mb-4">
                Crew
              </h2>

              <div className="grid grid-cols-2 gap-4">

                <input
                  className="p-3 rounded bg-slate-800"
                  placeholder="Pilot"
                />

                <input
                  className="p-3 rounded bg-slate-800"
                  placeholder="Front Passenger"
                />

                <input
                  className="p-3 rounded bg-slate-800"
                  placeholder="Rear Left"
                />

                <input
                  className="p-3 rounded bg-slate-800"
                  placeholder="Rear Right"
                />

              </div>

            </div>

            {/* Fuel */}

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-xl font-semibold mb-4">
                Fuel
              </h2>

              <div className="grid grid-cols-3 gap-4">

                <input
                  className="p-3 rounded bg-slate-800"
                  placeholder="Fuel On Board"
                />

                <input
                  className="p-3 rounded bg-slate-800"
                  placeholder="Taxi Fuel"
                />

                <input
                  className="p-3 rounded bg-slate-800"
                  placeholder="Trip Fuel"
                />

              </div>

            </div>

            {/* Baggage */}

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-xl font-semibold mb-4">
                Baggage
              </h2>

              <div className="grid grid-cols-2 gap-4">

                <input
                  className="p-3 rounded bg-slate-800"
                  placeholder="Area 1"
                />

                <input
                  className="p-3 rounded bg-slate-800"
                  placeholder="Area 2"
                />

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-6">

            {/* Results */}

            <div className="bg-slate-900 rounded-xl p-6">

              <h2 className="text-xl font-semibold mb-6">
                Results
              </h2>

              <div className="space-y-3 text-lg">

                <div className="flex justify-between">

                  <span>Ramp Weight</span>

                  <span>------</span>

                </div>

                <div className="flex justify-between">

                  <span>Takeoff Weight</span>

                  <span>------</span>

                </div>

                <div className="flex justify-between">

                  <span>Landing Weight</span>

                  <span>------</span>

                </div>

                <div className="flex justify-between">

                  <span>CG</span>

                  <span>------</span>

                </div>

              </div>

            </div>

            {/* Graph Placeholder */}

            <div className="bg-slate-900 rounded-xl p-6 h-[450px]">

              <h2 className="text-xl font-semibold mb-4">
                CG Envelope
              </h2>

              <div className="min-h-[320px] border-2 border-dashed border-slate-700 rounded flex items-center justify-center text-slate-500">

                CG Graph Coming Soon

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}