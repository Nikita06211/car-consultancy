// src/types/Car.ts
export interface Car {
  car_id: number;
  year: number;
  brand: string,
  body_type: string,
  model:string,
  price: number;
  mileage: number;
  carFeatures: { name: string; value: string; category: string; feature_id: number; car_id: number }[];
  carSpecifications: {
    transmission_type: string;
    drive_train: string;
    gearbox: string;
    top_speed: number;
    fuel_efficiency_highway: number;
    cylinders: number;
    engine?:string,
    engine_type?: string,
    engine_displacement: number;
    specifications_id: number;
    acceleration_0_100_kmph: number;
    fuel_efficiency_city: number;
    valves_per_cylinder: number;
    car_id: number;
    horsepower: number;
    torque: number;
    boot_space: number;
    fuel_tank_capacity: number;
    ground_clearance: number;
  };
  carDimensions: {
    dimensions_id: number;
    car_id: number;
    length: number;
    width: number;
    height: number;
    wheelbase: number;
    ground_clearance: number;
    curb_weight: number;
  };
  status?: string; 
}
