import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./PlanCard.css"; // Import custom CSS for styling

interface PlanCardProps {
  title: string;
  info: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="plan-card" onClick={toggleDropdown} data-open={isOpen}>
      <div className="plan-card-header">
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="plan-card-icon"
        />
      </div>
      {isOpen && <div className="plan-card-info">{info}</div>}
    </div>
  );
};

export default PlanCard;
