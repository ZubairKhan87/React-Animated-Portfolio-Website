import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state || {};

  if (!project) {
    return (
      <div className="w-full px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Project not found.</h2>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-10 flex justify-center">
      <div className="w-full max-w-4xl bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">{project.title}</h1>

        {/* Image */}
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-auto max-h-[400px] object-contain border-2 border-yellow-400 rounded-lg mb-6"
        />

        {/* Sections */}
        {project.sections?.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              {section.heading}
            </h3>

            {section.type === "paragraph" && (
              <p className="text-base leading-relaxed text-gray-300">{section.content}</p>
            )}

            {section.type === "list" && (
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-300">
                {section.content.map((item, i) => {
                  const [title, ...rest] = item.split(":");
                  return (
                    <li key={i}>
                      <strong className="text-white">{title}:</strong> {rest.join(":").trim()}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Source Code
          </a>

          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
