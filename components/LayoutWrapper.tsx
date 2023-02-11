import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default LayoutWrapper;
