import React from "react";

export default function KeyIcon({color = "#D2D8E8"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M7 6.515c0-.808.24-1.601.696-2.297A4.809 4.809 0 019.589 2.56a5.435 5.435 0 012.563-.558 5.39 5.39 0 012.521.698 4.723 4.723 0 011.778 1.759c.407.719.594 1.524.54 2.33a4.235 4.235 0 01-.848 2.256 4.895 4.895 0 01-2 1.552v9.467L12 22l-2.143-1.936 1.429-1.29-1.429-1.29 1.429-1.29-1.429-1.291 1.429-1.29-1.429-1.29v-1.726A4.873 4.873 0 017.774 8.93 4.202 4.202 0 017 6.515zm3.571-1.29c0 .342.15.67.419.912a1.51 1.51 0 001.01.378 1.51 1.51 0 001.01-.378 1.23 1.23 0 00.419-.912c0-.342-.15-.67-.419-.912A1.51 1.51 0 0012 3.935a1.51 1.51 0 00-1.01.378 1.23 1.23 0 00-.419.912z"
      ></path>
    </svg>
  );
}
