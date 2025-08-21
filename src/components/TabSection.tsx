import React from "react";
import { Car } from "@/types/Car";
import { FaShieldAlt } from "react-icons/fa";

// --- Overview Tab ---
export function OverviewTab({ car, theme }: { car: Car; theme: string }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm ${theme === "dark" ? "bg-[#181f28] border-[#232b36]" : "bg-white border-gray-200"}`}>
      <h4 className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-xl font-bold mb-6`}>
        Vehicle Overview
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Dimensions */}
        <SpecGroup title="Dimensions" theme={theme}>
          <SpecItem label="Length" value={`${car.carDimensions?.length} mm`} theme={theme} />
          <SpecItem label="Width" value={`${car.carDimensions?.width} mm`} theme={theme} />
          <SpecItem label="Height" value={`${car.carDimensions?.height} mm`} theme={theme} />
          <SpecItem label="Wheelbase" value={`${car.carDimensions?.wheelbase} mm`} theme={theme} />
        </SpecGroup>
        {/* Engine */}
        <SpecGroup title="Engine Details" theme={theme}>
          <SpecItem label="Displacement" value={`${car.carSpecifications?.engine_displacement} cc`} theme={theme} />
          <SpecItem label="Cylinders" value={car.carSpecifications?.cylinders} theme={theme} />
          <SpecItem label="Drive Train" value={car.carSpecifications?.drive_train} theme={theme} />
        </SpecGroup>
        {/* Capacity */}
        <SpecGroup title="Capacity" theme={theme}>
          <SpecItem label="Boot Space" value={`${car.carSpecifications?.boot_space} L`} theme={theme} />
          <SpecItem label="Fuel Tank" value={`${car.carSpecifications?.fuel_tank_capacity} L`} theme={theme} />
          <SpecItem label="Weight" value={`${car.carDimensions?.curb_weight} kg`} theme={theme} />
        </SpecGroup>
      </div>
    </div>
  );
}

// --- Features Tab ---
export function FeaturesTab({ car, theme }: { car: Car; theme: string }) {
  const categoryMap: Record<string, typeof car.carFeatures> = {};
  car.carFeatures.forEach((feat) => {
    if (!categoryMap[feat.category]) categoryMap[feat.category] = [];
    categoryMap[feat.category].push(feat);
  });

  return (
    <div className="flex flex-col gap-6">
      {Object.entries(categoryMap).map(([cat, feats]) => (
        <div
          key={cat}
          className={`rounded-2xl border p-6 shadow-sm ${theme === "dark" ? "bg-[#181f28] border-[#232b36]" : "bg-white border-gray-200"}`}
        >
          <h4 className={`flex items-center font-bold text-lg mb-4 ${theme === "dark" ? "text-[#19e796]" : "text-[#18bc8a]"}`}>
            <FaShieldAlt className="mr-2" /> {cat}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
            {feats.map((f) => (
              <div key={f.feature_id} className={`flex items-center justify-between pb-2 border-b ${
    theme === "dark" ? "border-gray-700" : "border-gray-200"
  }`}>
                <span className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>{f.name}</span>
                <span
                  className={`px-3 py-1 rounded-lg font-semibold text-xs ${
                    f.value === "Yes"
                      ? theme === "dark"
                        ? "bg-[#19e796]/15 text-[#19e796]"
                        : "bg-[#b6efe2] text-[#08bc7c]"
                      : theme === "dark"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Specifications Tab ---
export function SpecificationsTab({ car, theme }: { car: Car; theme: string }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm ${theme === "dark" ? "bg-[#181f28] border-[#232b36]" : "bg-white border-gray-200"}`}>
      <h4 className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-xl font-bold mb-6`}>
        Technical Specifications
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SpecGroup title="Performance" theme={theme}>
          <SpecItem label="Horsepower" value={`${car.carSpecifications?.horsepower} HP`} theme={theme} />
          <SpecItem label="Torque" value={`${car.carSpecifications?.torque} Nm`} theme={theme} />
          <SpecItem label="Top Speed" value={`${car.carSpecifications?.top_speed} km/h`} theme={theme} />
          <SpecItem label="0-100 km/h" value={`${car.carSpecifications?.acceleration_0_100_kmph}s`} theme={theme} />
        </SpecGroup>
        <SpecGroup title="Fuel Economy" theme={theme}>
          <SpecItem label="City" value={`${car.carSpecifications?.fuel_efficiency_city} km/L`} theme={theme} />
          <SpecItem label="Highway" value={`${car.carSpecifications?.fuel_efficiency_highway} km/L`} theme={theme} />
          <SpecItem label="Ground Clearance" value={`${car.carDimensions?.ground_clearance} mm`} theme={theme} />
        </SpecGroup>
      </div>
    </div>
  );
}

// --- Reusable Spec Components ---
function SpecGroup({ title, children, theme }: { title: string; children: React.ReactNode; theme: string }) {
  return (
    <div>
      <div className={`${theme === "dark" ? "text-[#19e796]" : "text-[#18bc8a]"} font-semibold mb-3`}>{title}</div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function SpecItem({ label, value, theme }: { label: string; value: string | number; theme: string }) {
  return (
    <div
      className={`flex items-center justify-between pb-2 border-b ${
        theme === "dark" ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <span className="text-gray-500">{label}</span>
      <span className={`${theme === "dark" ? "text-white" : "text-gray-900"} font-normal text-sm`}>
        {value}
      </span>
    </div>
  );
}

