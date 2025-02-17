import React from "react";

const SkillsCard = ({ icon, title, level }) => {
  return (
    <div className="bg-darkBg p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        {/* Display an image icon for tech skills like Python logo */}
        {icon.includes('.svg') ? (
          <image src={icon} alt={title} className="w-8 h-8 object-cover" />
        ) : (
          <span className="material-icons text-primary text-6xl">{icon}</span>
        )}
      </div>

      {/* Skill Title */}
      <h3 className="sm:text-xs font-semibold">{title}</h3>

      {/* Progress Bar */}
      {level && (
        <div className="mt-4 h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 bg-primary rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SkillsCard;
