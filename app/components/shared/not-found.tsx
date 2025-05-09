import { Link } from "@remix-run/react";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center md:px-56 px-8 pt-4 pb-36 dark:bg-backgroundDarkBlue bg-white">
      <section className="flex flex-col items-center">
        <div className="dark:bg-gray-300 bg-black rounded-full p-10">
          <img
            src="/images/worker-of-construction-white.png"
            alt="worker-construction"
            className="md:w-40 md:h-40 w-28 h-28"
          />
        </div>
        <p className="mt-6 mb-1 font-lexendDeca md:text-lg text-xs font-medium text-center dark:text-white text-black">This page is under construction. We’re working hard to bring you an amazing experience.</p>
        <p className="font-lexendDeca md:text-lg text-xs font-medium dark:text-white text-black">Stay Tuned!</p>
      </section>
      <Link to='/' className="md:mt-14 mt-10 bg-backgroundDarkBlue dark:bg-[#0e76a8] md:py-3 md:px-3 px-2 py-2 rounded-md text-white font-lexendDeca md:font-normal text-sm">
        Back to Home
      </Link>
    </div>
  )
}