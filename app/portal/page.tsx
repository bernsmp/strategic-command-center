import Hero from "@/components/Hero";
import TransformationLevels from "@/components/TransformationLevels";
import Navigation from "@/components/Navigation";

// The book-cover Portal. Was the homepage until the Step Inside doorway took
// the root; still reachable via nav ("The Portal") and the doorway's last-door
// "Back to the Portal" CTA.
export default function PortalPage() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <TransformationLevels />
    </main>
  );
}
