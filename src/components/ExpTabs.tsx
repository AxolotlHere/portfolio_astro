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
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="ospc">OSPC</TabsTrigger>
        <TabsTrigger value="ras">IEEERAS</TabsTrigger>
        <TabsTrigger value="compsoc">IEEE COMPSOC</TabsTrigger>
        <TabsTrigger value="others">OTHERS</TabsTrigger>
      </TabsList>
      <TabsContent value="ospc">
        <div className="w-[300px] h-[300px] rounded-xl bg-[#1D1F2F]/50 border-1 border-white/80"></div>
      </TabsContent>
      <TabsContent value="ras">
        <div className="w-[300px] h-[300px] rounded-xl bg-[#1D1F2F]/75"></div>
      </TabsContent>
      <TabsContent value="compsoc">
        <div className="w-[300px] h-[300px] rounded-xl bg-[#1D1F2F]/75"></div>
      </TabsContent>
      <TabsContent value="others">
        <div className="w-[300px] h-[300px] rounded-xl bg-[#1D1F2F]/75"></div>
      </TabsContent>
    </Tabs>
  );
}
