import Hero from "@/components/Hero";
import TransformationLevels from "@/components/TransformationLevels";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <TransformationLevels />
    </main>
  );
}
