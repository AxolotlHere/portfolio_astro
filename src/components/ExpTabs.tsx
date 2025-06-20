// components/TabsDemo.tsx
"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export function ExpTabs() {
  return (
    <Tabs defaultValue="ospc" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="ospc">OSPC</TabsTrigger>
        <TabsTrigger value="ras">IEEERAS</TabsTrigger>
        <TabsTrigger value="compsoc">IEEE COMPSOC</TabsTrigger>
        <TabsTrigger value="others">OTHERS</TabsTrigger>
      </TabsList>
      <TabsContent value="ospc">
        <div className="w-[300px] h-[300px]">
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              OPEN SOURCE LEAD
            </p>
            <p className="text-left font-clash font-normal text-xs text-white">
              April 2025-present
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              SPECTRUM HACKATHON - TECHNICAL POC
            </p>
            <p className="text-left font-clash font-normal text-xs text-white">
              April 2025-April 2025
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              CYBERSECURITY LEAD
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              October 2024-April 2025
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              WEB DEVELOPER
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              July 2024-October 2024
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="ras">
        <div className="w-[300px] h-[300px]">
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              SECRETARY
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              December 2024-Present
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              APP DEV TEAM - RASCADE
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              November 2024-November 2024
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              LEAD - DISCORD BOT DEV
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              March 2024-May 2024
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              WEBDEV AND PROJECTS TEAM{" "}
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              Dec 2023-November 2024
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="compsoc">
        <div className="w-[300px] h-[300px]">
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              BITWARS'25 WEBDEV TEAM
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              April 2025-May 2025
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              HACKHUB'25 TECHNICAL VOLUNTEER
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              March 2025-March 2025
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              TECHNICAL TEAM
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              September 2024-Present
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="others">
        <div className="w-[300px] h-[300px] overflow-y-scroll">
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              CYSCOM INTERNAL CTF - 3rd PLACE
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              March 2025-March 2025
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              HHRH CTF - 6th PLACE
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              September 2024-September 2024
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4 scroll-smooth">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              TOP 50 - SMART INDIA HACKATHON
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              October 2024-October 2024
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              WEBDEV TEAM - VIBRANCE'25
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              February 2024-February 2024
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              APPDEV INTERN - SPECTOV
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              August 2024-October 2024
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              DEVELOPMENT TEAM - CYSCOM
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              September 2024-Present
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              CYBERSECURITY AND APPDEV TEAM - MICROSOFT INNOVATIONS CLUB
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              October 2024-April 2025
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              OPEN SOURCE DEVELOPER - HACKTOBERFEST'24
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              October 2024-October 2024
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              APPDEV TEAM - HACKCLUB
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              September 2024-March 2025
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80 w-full p-2 my-4">
            <p className="text-left font-clash font-semibold text-sm text-white pb-[2px]">
              MANAGEMENT TEAM - DAO VITC
            </p>
            <p className="text-left font-clash font-normal text-sm text-white">
              March 2025-March 2025
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
