import React from "react";

interface Props {
    className?: string;
}

const DeliveryIcon: React.FC<Props> = ({ className }) => {
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
        d="M9.583 16.313l2.875.958s7.188-1.438 8.146-1.438c.959 0 .959.959 0 1.917-.958.959-4.312 3.834-7.187 3.834s-4.792-1.438-6.709-1.438H1.917"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.917 14.396C2.875 13.437 4.792 12 6.708 12c1.917 0 6.47 1.917 7.188 2.875.719.958-1.438 2.396-1.438 2.396M7.667 9.125V5.292c0-.53.429-.958.958-.958h11.5c.53 0 .958.429.958.958v7.667"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.77 4.333h-4.79v4.313h4.79V4.333z"
      ></path>
    </svg>
  );
}

export default DeliveryIcon;