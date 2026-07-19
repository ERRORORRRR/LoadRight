import { calculateWeightBalance } from "@/lib/calculateWeightBalance";
import { C172R } from "@/data/aircraft/c172r";export default function Home() {  const result = calculateWeightBalance(C172R, {
    emptyWeight: 1668,
    emptyCG: 40.8,

    pilot: 180,
    frontPassenger: 170,

    rearLeft: 0,
    rearRight: 0,

    fuelGallons: 40,

    baggage1: 20,
    baggage2: 0,
  });  console.log(result);
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

           {/* Calculation Results */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

  <div className="bg-slate-800 rounded-xl p-6">
    <p className="text-slate-400 text-sm">
      Total Weight
    </p>

    <p className="text-4xl font-bold mt-2">
      {result.totalWeight.toFixed(0)} lb
    </p>
  </div>

  <div className="bg-slate-800 rounded-xl p-6">
    <p className="text-slate-400 text-sm">
      Center of Gravity
    </p>

    <p className="text-4xl font-bold mt-2">
      {result.cg.toFixed(2)} in
    </p>
  </div>

</div>
{/* CG Envelope */}

<div className="bg-slate-900 rounded-xl p-6">
  <h2 className="text-xl font-semibold mb-4">
    CG Envelope
  </h2>

  <div className="relative w-full aspect-[4/3] border border-slate-700 rounded-lg bg-slate-950 overflow-hidden">

    {/* CG Envelope */}
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      {/* Envelope boundary */}
      <polygon
        points="10,85 10,20 35,10 90,10 90,85"
        fill="none"
        stroke="white"
        strokeWidth="0.8"
      />

      {/* Current CG point */}
      <circle
        cx="48"
        cy="35"
        r="2"
        fill="red"
      />
    </svg>

    {/* Labels */}
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-slate-400">
      Center of Gravity (in)
    </div>

    <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-slate-400">
      Weight (lb)
    </div>

  </div>
</div>


          </div>

        </div>

      </div>
    </main>
  );
}