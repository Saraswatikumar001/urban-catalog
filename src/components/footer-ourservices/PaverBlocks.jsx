import React from "react";

const PaverBlocks = () => {
  return (
    <section className="pt-24 pb-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Paver Blocks</h1>
          <p className="text-gray-600 mt-3">
            High-quality concrete paver blocks for durable and elegant flooring.
          </p>
        </div>

        {/* Paver Blocks Design */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-48 bg-gray-300 rounded-t-xl"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Zigzag Paver Blocks</h3>
              <p className="text-gray-600 text-sm mt-2">
                Ideal for driveways and heavy-load areas.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-48 bg-gray-300 rounded-t-xl"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">I-Shape Paver Blocks</h3>
              <p className="text-gray-600 text-sm mt-2">
                Interlocking design with strong grip.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-48 bg-gray-300 rounded-t-xl"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Rectangular Paver Blocks</h3>
              <p className="text-gray-600 text-sm mt-2">
                Clean, modern look for walkways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaverBlocks;
