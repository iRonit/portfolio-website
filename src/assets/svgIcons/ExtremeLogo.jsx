import * as React from "react";

function ExtremeLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 200 200"
      fill="currentColor"
      {...props}
    >
      <path d="M23 83.2v65.3L39.5 132 56 115.5V50h120V18H23v65.2zM195.3 21.5c0 2.2.2 3 .4 1.7.2-1.2.2-3 0-4-.3-.9-.5.1-.4 2.3z" />
      <path d="M89 99.5V116h65V83H89v16.5zM39.5 165l16 16H176v-32H23.5l16 16z" />
    </svg>
  );
}

export default ExtremeLogo;
