import { Car } from '@/types/Car';
import { FaDotCircle, FaCar, FaCalendarAlt } from 'react-icons/fa';
export default function CarSummary({ car }: { car: Car }) {
  return (
    <div
      className="rounded-2xl h-fit p-6 shadow-md flex flex-col gap-6 border"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--card-border)",
        minWidth: 370,
        maxWidth: 420,
        width: "100%",
      }}
    >
      <div className="flex items-center gap-2">
        <FaDotCircle style={{ color: "var(--accent)" }} className="text-xs" />
        <span
          style={{ color: "var(--accent)" }}
          className="font-semibold tracking-wide text-sm uppercase"
        >
          {car.brand}
        </span>
      </div>

      <h2
        style={{ color: "var(--text-primary)" }}
        className="text-2xl font-bold"
      >
        {car.model}
      </h2>

      <div className="flex flex-col gap-3 text-[1rem] font-normal">
        <SpecRow label="Engine" value={car.carSpecifications?.engine_type ?? "-"} />
        <SpecRow label="Body Type" value={car.body_type ?? "-"} />
        <SpecRow label="Transmission" value={car.carSpecifications?.transmission_type ?? "-"} />
        <SpecRow label="Mileage" value={car.mileage + " MPG"} />
      </div>

      <div
        className="rounded-xl text-center py-4 px-3 flex flex-col items-center"
        style={{ backgroundColor: "var(--price-bg)" }}
      >
        <div style={{ color: "var(--text-secondary)" }} className="text-sm mb-1">
          Price on request
        </div>
        <div style={{ color: "var(--accent)" }} className="font-bold text-2xl">
          ${car.price}/day
        </div>
        <div style={{ color: "var(--text-secondary)" }} className="text-xs">
          Ex-showroom price range
        </div>
      </div>

      <div className="flex gap-3">
        <button
          className="flex-1 flex gap-2 items-center justify-center px-4 py-3 rounded-lg font-semibold text-base transition"
          style={{
            backgroundColor: "var(--button-primary-bg)",
            color: "var(--button-primary-text)",
          }}
        >
          <FaCar /> Get Quote
        </button>
        <button
          className="flex-1 flex gap-2 items-center justify-center px-4 py-3 rounded-lg font-semibold text-base transition border"
          style={{
            backgroundColor: "var(--button-secondary-bg)",
            color: "var(--button-secondary-text)",
            borderColor: "var(--button-secondary-border)",
          }}
        >
          <FaCalendarAlt /> Book Test Drive
        </button>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span style={{ color: "var(--text-secondary)" }}>{label}</span>
      <span style={{ color: "var(--text-primary)" }} className="font-semibold">
        {value}
      </span>
    </div>
  );
}
