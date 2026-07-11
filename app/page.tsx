import Background from "@/components/Background";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative isolate h-screen w-screen overflow-hidden bg-transparent flex flex-col justify-between">
      <Background />
      <Hero />
    </main>
  );
}