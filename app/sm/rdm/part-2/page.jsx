import Exel from "@components/part2/exel"

const page = () => {
  return (
    <div className="container bg">
      <div className=" mt-5 flex flex-col  justify-center  bg-slate-600">
        <p className="neon flickers text-center text-5xl font-bold text-red-700 " data-text="NEON" > NEON </p>
        <p className="text-center text-5xl font-bold animate-bounce"> test </p>
      </div>
    <Exel />
    </div>
  )
}

export default page