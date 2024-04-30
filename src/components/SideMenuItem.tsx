import React from "react"
import { ReactNode } from "react";
interface Props {
  href?: string;
  children?: ReactNode;
}
const SideMenuItem: React.FC<Props> = ({children }) => {
  return (
    <li>
      <a
        className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"
      >
        {children}
      </a>
    </li>
  );
};

export default SideMenuItem;
