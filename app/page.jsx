import Header from "@/components/Header";

function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col sm:flex-row justify-between md:gap-8">
        <section className="w-full md:w-3/4 bg-blue-400">
          Preview Component
        </section>
        <aside className="w-full md:w-1/4 bg-red-300">
          Configurator Component
        </aside>
      </main>
    </>
  );
}
export default HomePage;
