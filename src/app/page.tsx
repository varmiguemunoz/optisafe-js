import CardProducts from "../components/CardProducts";
import Input from "../components/Input";
import { IoSearchCircleOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-[90px] gap-[50px] max-w-[1114px]">
      <div>
        <h1 className="font-bold text-2xl capitalize">
          Welcome to Optisafe App 🧠
        </h1>
      </div>

      <div className="w-full max-w-[500px]">
        <Input iconPosition="left" id="1" icon={<IoSearchCircleOutline />} />
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-[1114px] w-full">
        <CardProducts />
        <CardProducts />
        <CardProducts />
      </div>
    </main>
  );
}
