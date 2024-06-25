interface Props {
    color: string
}

export function PlayIcon({ color = "#FFFFFF" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill={color}
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.625 9V4.453l3.938 2.274L13.5 9l-3.938 2.273-3.937 2.274V9z"
      ></path>
    </svg>
  );
}