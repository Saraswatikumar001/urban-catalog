import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">
        {service.title}
      </h1>

      <div className="text-lg text-gray-700 whitespace-pre-line leading-8">
        {service.content}
      </div>
    </div>
  );
};

export default ServiceDetails;
