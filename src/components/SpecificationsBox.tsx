import { Car } from '@/types/Car';
import { Bolt, Gauge, Fuel, Timer } from "lucide-react"; // using lucide icons

export default function SpecificationsBox({ car, theme }: { car: Car; theme: string }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-2xl p-6 border ${theme === 'dark' ? 'bg-[#181f28] border-[#232b36]' : 'bg-white border-gray-200'} shadow-md`}
      style={{ minWidth: 370, maxWidth: 420, width: "100%" }}
    >
      {/* Title */}
      <h3
        className={`text-base font-semibold flex items-center gap-2 ${
          isDark ? "text-white" : "text-[#24282a]"
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isDark ? "bg-[#19e796]" : "bg-[#18bc8a]"
          }`}
        ></span>
        Key Specifications
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Power */}
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Bolt size={16} /> Power
          </div>
          <div className={`mt-1 font-bold ${isDark ? "text-white" : "text-[#24282a]"}`}>
            {car.carSpecifications?.horsepower} HP
          </div>
        </div>

        {/* Torque */}
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Gauge size={16} /> Torque
          </div>
          <div className={`mt-1 font-bold ${isDark ? "text-white" : "text-[#24282a]"}`}>
            {car.carSpecifications?.torque} Nm
          </div>
        </div>

        {/* Top Speed */}
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Fuel size={16} /> Top Speed
          </div>
          <div className={`mt-1 font-bold ${isDark ? "text-white" : "text-[#24282a]"}`}>
            {car.carSpecifications?.top_speed} km/h
          </div>
        </div>

        {/* 0–100 km/h */}
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Timer size={16} /> 0-100 km/h
          </div>
          <div className={`mt-1 font-bold ${isDark ? "text-white" : "text-[#24282a]"}`}>
            {car.carSpecifications?.acceleration_0_100_kmph}s
          </div>
        </div>
      </div>
    </div>
  );
}
