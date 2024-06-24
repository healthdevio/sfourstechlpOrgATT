import React from "react";

interface Props {
  className?: string;
}

const EnergyIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="24"
      fill="none"
      viewBox="0 0 23 24"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M10.063 18.708a8.146 8.146 0 100-16.292 8.146 8.146 0 000 16.292z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.773 7.373a3.821 3.821 0 00-2.71-1.123c-1.059 0-2.017.43-2.711 1.123M15.919 16.419l4.066 4.066"
      ></path>
    </svg>
  );
};

export default EnergyIcon;
