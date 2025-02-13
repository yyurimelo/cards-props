import Cards from "./web";


export default function Home() {
  return (
    <>
      <div className="flex text-white bg-orange-500 flex-col items-center justify-center p-20">
        <h1 className="text-6xl font-bold">choose your application</h1>
        <p className="text-3xl">free access, good otimization</p>
      </div>

      <Cards />

    </>

  );
}
