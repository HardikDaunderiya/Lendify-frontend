import BodyIIR from "./BodyIIR";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <section className="relative w-full h-[120dvh] bg-gray-900">
          <img
            src="/src/assets/PIC.jpg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center h-full space-y-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
              Connect Investors and Business Owners
            </h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Discover the best investment opportunities and connect with
              business owners who need funding.
            </p>
          </div>
        </section>
      </div>
      <BodyIIR />
    </>
  );
}
