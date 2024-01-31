import { Send } from "@/Icons";

export default function Chat() {
  return (
    <>
      <div className="relative h-full bg-gray-900 px-4 pt-4 md:w-[20%] rounded-md m-3">
        <div className="bg-gray-950 rounded p-2">
          <div className="flex items-center text-pink-400 space-x-2">
            <span>Susilane Assis</span>
            <span>10:00</span>
          </div>
          <div className="mt-5 text-sm">
            <p>texto</p>
          </div>
        </div>

        <form action="" className="absolute bottom-2">
          <div className="flex relative">
            <input
              type="text"
              className="px-3 py-2 bg-gray-950 rounded-md w-full"
            />
            <Send className="h-6 w-6 absolute right-2 top-2 cursor-pointer" />
          </div>
        </form>
      </div>
    </>
  );
}
