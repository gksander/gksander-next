import React from "react";

const GksSectionTitle: React.FC<{
  title: string;
  subtitle: string;
  id: string;
}> = ({ title, subtitle, id }) => (
  <div className="mb-4" id={id}>
    <div className="text-3xl text-primary-900 leading-tight">{title}</div>
    <div className="text-xl text-primary-800">{subtitle}</div>
  </div>
);

export default GksSectionTitle;
