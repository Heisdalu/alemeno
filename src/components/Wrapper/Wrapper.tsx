import Header from "../Header/Header";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-inter p-[1rem]">
      <div className="mx-auto max-w-[600px] bg-white lg:max-w-[800px]">
        <Header />
        <div className="lg:py-[1rem]">{children}</div>
      </div>
    </div>
  );
};
export default Wrapper;
