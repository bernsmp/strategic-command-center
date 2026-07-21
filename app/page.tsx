import StepInside from "@/components/StepInside";

// Homepage = the Step Inside doorway. The first thing every visitor sees is the
// cinematic walk into the mind, not the book cover. The book-cover Portal moved
// to /portal (reachable via nav). The doorway is chrome-free by design — it
// carries the engine's own section nav, not the site's main Navigation bar.
export default function Home() {
  return <StepInside />;
}
