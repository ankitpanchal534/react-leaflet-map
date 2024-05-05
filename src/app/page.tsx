import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/_components/MapComponent"), {
  ssr: false,
});
export default function Page() {
  return (
    <div className="w-full">
      <MapComponent />
    </div>
  );
}
