import React from "react";

interface Props {
    className?: string;
}

const BookMountain: React.FC<Props> = ({ className }) => {
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
        stroke="currenqtColor"
        strokeLinejoin="round"
        d="M1.917 6.21L11.5 9.603l9.583-3.395L11.5 2.896 1.917 6.209z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.917 10.084l9.583 3.354 9.583-3.354M1.917 13.916l9.583 3.355 9.583-3.355M1.917 17.75l9.583 3.354 9.583-3.354"
      ></path>
    </svg>
  );
}

export default BookMountain;