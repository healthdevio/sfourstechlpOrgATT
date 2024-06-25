import React from "react";

interface Props {
    className?: string;
}

const CodeIcon: React.FC<Props> = ({ className }) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.313 3.854l6.708 6.708-6.709 6.709M8.146 20.146h10.541"
      ></path>
    </svg>
  );
}

export default CodeIcon;