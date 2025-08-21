import { notFound } from 'next/navigation';
import { mockData } from '@/data/mockCars';
import CarDetails from '@/components/CarDetails';

// Server Component (do not use "use client" here)
export default async function CarPage({ params }: { params: Promise<{ carId: string }> }) {
  // Await the params promise
  const { carId } = await params;
  const car = mockData.data.find((c) => c.car_id.toString() === carId);

  if (!car) {
    notFound(); // Shows 404 page
  }

  return <CarDetails car={car} />;
}
