import React from "react";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  return (
    <div class="relative flex size-full flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col"></div>
      <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
        <div class="flex items-center gap-4 text-[#0d141c]">
          <div class="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 class="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">
            TaskMaster
          </h2>
          {!["/login", "/register"].includes(location.pathname) && (
            <div class="flex items-center gap-9">
              <a
                class="text-[#0d141c] text-sm font-medium leading-normal"
                href="#"
              >
                Dashboard
              </a>
              <a
                class="text-[#0d141c] text-sm font-medium leading-normal"
                href="#"
              >
                Projects
              </a>
              <a
                class="text-[#0d141c] text-sm font-medium leading-normal"
                href="#"
              >
                Reports
              </a>
              <a
                class="text-[#0d141c] text-sm font-medium leading-normal"
                href="#"
              >
                People
              </a>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
