import Header from "../Header/Header";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-inter border-[1px] border-black p-[1rem]">
      <div className="mx-auto max-w-[600px] bg-white lg:max-w-[800px]">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Wrapper;
