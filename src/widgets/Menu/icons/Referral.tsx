import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path d="M18.667 12.8335C20.6037 12.8335 22.1553 11.2702 22.1553 9.3335C22.1553 7.39683 20.6037 5.8335 18.667 5.8335C16.7303 5.8335 15.167 7.39683 15.167 9.3335C15.167 11.2702 16.7303 12.8335 18.667 12.8335ZM9.33366 12.8335C11.2703 12.8335 12.822 11.2702 12.822 9.3335C12.822 7.39683 11.2703 5.8335 9.33366 5.8335C7.39699 5.8335 5.83366 7.39683 5.83366 9.3335C5.83366 11.2702 7.39699 12.8335 9.33366 12.8335ZM9.33366 15.1668C6.61533 15.1668 1.16699 16.5318 1.16699 19.2502V22.1668H17.5003V19.2502C17.5003 16.5318 12.052 15.1668 9.33366 15.1668ZM18.667 15.1668C18.3287 15.1668 17.9437 15.1902 17.5353 15.2252C18.8887 16.2052 19.8337 17.5235 19.8337 19.2502V22.1668H26.8337V19.2502C26.8337 16.5318 21.3853 15.1668 18.667 15.1668Z" fill="#FCFCFC"/>
    </Svg>
  );
};

export default Icon;
