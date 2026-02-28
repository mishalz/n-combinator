import React, { ReactNode } from "react";
import Navbar from "../../components/custom/Navbar";

function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="font-work-sans ">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
