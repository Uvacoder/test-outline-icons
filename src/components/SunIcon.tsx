import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

export default function SunIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C12.5523 3 13 3.44772 13 4V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V4C11 3.44772 11.4477 3 12 3ZM12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8ZM3 12C3 11.4477 3.44772 11 4 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H4C3.44772 13 3 12.5523 3 12ZM19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H19ZM13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V19ZM5.63603 5.63606C6.02656 5.24554 6.65972 5.24554 7.05025 5.63606L7.75735 6.34317C8.14788 6.73369 8.14788 7.36686 7.75735 7.75738C7.36683 8.14791 6.73366 8.14791 6.34314 7.75738L5.63603 7.05028C5.24551 6.65975 5.24551 6.02659 5.63603 5.63606ZM17.6568 16.2426C17.2663 15.8521 16.6332 15.8521 16.2426 16.2426C15.8521 16.6332 15.8521 17.2663 16.2426 17.6568L16.9497 18.3639C17.3403 18.7545 17.9734 18.7545 18.364 18.3639C18.7545 17.9734 18.7545 17.3403 18.364 16.9497L17.6568 16.2426ZM18.3639 5.63603C18.7545 6.02656 18.7545 6.65972 18.3639 7.05025L17.6568 7.75735C17.2663 8.14788 16.6331 8.14788 16.2426 7.75735C15.8521 7.36683 15.8521 6.73366 16.2426 6.34314L16.9497 5.63603C17.3402 5.24551 17.9734 5.24551 18.3639 5.63603ZM7.75737 17.6569C8.14789 17.2664 8.14789 16.6332 7.75737 16.2427C7.36685 15.8521 6.73368 15.8521 6.34316 16.2427L5.63605 16.9498C5.24553 17.3403 5.24553 17.9735 5.63605 18.364C6.02657 18.7545 6.65974 18.7545 7.05026 18.364L7.75737 17.6569Z"
      />
    </Icon>
  );
}
