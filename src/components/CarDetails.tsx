"use client";
import { useTheme } from "@/contexts/ThemeContext";
import CarImages from "./CarImages";
import CarSummary from "./CarSummary";
import SpecificationsBox from "./SpecificationsBox";
import TabsBar from "./TabsBar";
import { useState } from "react";
import { Car } from "@/types/Car";
import {
  OverviewTab,
  FeaturesTab,
  SpecificationsTab,
} from "@/components/TabSection";

interface CarDetailsProps {
  car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
  const { theme } = useTheme();
  const [tab, setTab] = useState("Overview");

  return (
    <div
      className={`min-h-screen w-full ${
        theme === "dark" ? "bg-[#0f141a]" : "bg-gray-50"
      }`}
    >
      <div className="w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 mx-auto py-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        <CarImages car={car} theme={theme} />

        <div className="flex flex-col gap-6">
          <CarSummary car={car} />
          <SpecificationsBox car={car} theme={theme} />
        </div>

        <div className="col-span-1 lg:col-span-2 mt-8">
          <TabsBar tab={tab} setTab={setTab} theme={theme} />
          <div className="mt-4">
            {tab === "Overview" && <OverviewTab car={car} theme={theme} />}
            {tab === "Features" && <FeaturesTab car={car} theme={theme} />}
            {tab === "Specifications" && <SpecificationsTab car={car} theme={theme} />}
          </div>
        </div>
      </div>
    </div>
  );
}
