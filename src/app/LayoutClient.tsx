"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide Navbar on auth pages
  const hideNavbarOn = ["/SignIn", "/SignUp","/SetUpYourProfile","/SetNewPassword","/Loginpage","/ForgetPassword","/Code","/"];
  const shouldShowNavbar = !hideNavbarOn.includes(pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  );
}
