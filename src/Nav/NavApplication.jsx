import { Children } from "react";

export function NavApplication({ children }) {
  return (
    <div className="text-lg hover:text-xl hover:underline hover:transition duration-500 underline-offset-8 hover:cursor-pointer">
      {children}
    </div>
  );
}
