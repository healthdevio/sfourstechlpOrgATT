import React from "react";

interface Props {
  className?: string;
}

const EnergyIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="19"
      fill="none"
      viewBox="0 0 25 19"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.39 1.771v5.663h4.825a.767.767 0 01.655 1.197l-6.133 9a.789.789 0 01-1.441-.426v-5.666h-4.822a.767.767 0 01-.655-1.197l6.13-8.998a.789.789 0 011.442.427z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.475 16.764H3.12M6.297 10.095H1M9.475 3.425H3.12"
      ></path>
    </svg>
  );
};

export default EnergyIcon;
