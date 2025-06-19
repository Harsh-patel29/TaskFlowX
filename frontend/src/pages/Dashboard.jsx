import React from "react";

const DashBoard = () => {
  return (
    <>
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="flex flex-wrap justify-between gap-3 p-4">
            <div class="flex min-w-72 flex-col gap-3">
              <p class="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight">
                Task Dashboard
              </p>
              <p class="text-[#49739c] text-sm font-normal leading-normal">
                Manage your tasks efficiently and effectively.
              </p>
            </div>
          </div>
          <div class="px-4 py-3">
            <label class="flex flex-col min-w-40 h-12 w-full">
              <div class="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div
                  class="text-[#49739c] flex border-none bg-[#e7edf4] items-center justify-center pl-4 rounded-l-lg border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  placeholder="Search tasks..."
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] focus:border-none h-full placeholder:text-[#49739c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                />
              </div>
            </label>
          </div>
          <div class="px-4 py-3 @container">
            <div class="flex overflow-hidden rounded-lg border border-[#cedbe8] bg-slate-50">
              <table class="flex-1">
                <thead>
                  <tr class="bg-slate-50">
                    <th class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-120 px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium leading-normal">
                      Title
                    </th>
                    <th class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-240 px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium leading-normal">
                      Description
                    </th>
                    <th class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-360 px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium leading-normal">
                      Assigned To
                    </th>
                    <th class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-480 px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium leading-normal">
                      Creator
                    </th>
                    <th class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-600 px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium leading-normal">
                      Created
                    </th>
                    <th class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-720 px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium leading-normal">
                      Due Date
                    </th>
                    <th class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-840 px-4 py-3 text-left text-[#0d141c] text-sm font-medium leading-normal">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-t border-t-[#cedbe8]">
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d141c] text-sm font-normal leading-normal">
                      Project Alpha Task 1
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-240 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Initial project setup and planning
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-360 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Emily Carter
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-480 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      David Lee
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-600 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      2024-07-20
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-720 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      2024-07-27
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-840 h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                      false
                    </td>
                  </tr>
                  <tr class="border-t border-t-[#cedbe8]">
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d141c] text-sm font-normal leading-normal">
                      Project Alpha Task 2
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-240 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Design mockups and wireframes
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-360 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Emily Carter
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-480 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      David Lee
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-600 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      2024-07-21
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-720 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      2024-07-28
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-840 h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                      false
                    </td>
                  </tr>
                  <tr class="border-t border-t-[#cedbe8]">
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d141c] text-sm font-normal leading-normal">
                      Project Beta Task 1
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-240 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Backend API development
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-360 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Michael Chen
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-480 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Sarah Johnson
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-600 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      2024-07-22
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-720 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      2024-07-29
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-840 h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                      false
                    </td>
                  </tr>
                  <tr class="border-t border-t-[#cedbe8]">
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d141c] text-sm font-normal leading-normal">
                      Project Beta Task 2
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-240 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Frontend integration and testing
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-360 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Michael Chen
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-480 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Sarah Johnson
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-600 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      2024-07-23
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-720 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      2024-07-30
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-840 h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                      false
                    </td>
                  </tr>
                  <tr class="border-t border-t-[#cedbe8]">
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d141c] text-sm font-normal leading-normal">
                      Project Gamma Task 1
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-240 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      User feedback and iteration
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-360 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Olivia Brown
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-480 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      Robert Green
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-600 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      2024-07-24
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-720 h-[72px] px-4 py-2 w-[400px] text-[#49739c] text-sm font-normal leading-normal">
                      2024-07-31
                    </td>
                    <td class="table-ff259372-240d-4d11-9af1-23f883104cb1-column-840 h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                      false
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <style> */}
            {/* @container(max-width:120px){.table-ff259372-240d-4d11-9af1-23f883104cb1-column-120{display: none;}}
                @container(max-width:240px){.table-ff259372-240d-4d11-9af1-23f883104cb1-column-240{display: none;}}
                @container(max-width:360px){.table-ff259372-240d-4d11-9af1-23f883104cb1-column-360{display: none;}}
                @container(max-width:480px){.table-ff259372-240d-4d11-9af1-23f883104cb1-column-480{display: none;}}
                @container(max-width:600px){.table-ff259372-240d-4d11-9af1-23f883104cb1-column-600{display: none;}}
                @container(max-width:720px){.table-ff259372-240d-4d11-9af1-23f883104cb1-column-720{display: none;}}
                @container(max-width:840px){.table-ff259372-240d-4d11-9af1-23f883104cb1-column-840{display: none;}} */}
            {/* </style> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
