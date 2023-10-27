export default function Benefit() {
  return (
    <section className="py-10 md:py-20">
      <div className="pb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          A little help keeping your stress in check.
        </h2>
      </div>

      <div className="flex w-full gap-6 lg:gap-8 xl:gap-10 pb-10">
        <div className="card grid h-[600px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          content
        </div>

        <div className="card rounded-box grid h-[600px] flex-grow place-items-center bg-base-100 ">
          content
        </div>
      </div>

      <div className="flex w-full gap-6 py-10 lg:gap-8 xl:gap-10">
        <div className="card rounded-box grid h-[600px] flex-grow place-items-center bg-base-100">
          content
        </div>
        <div className="card grid h-[600px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          content
        </div>
      </div>

      <div className="flex w-full gap-6 lg:gap-8 xl:gap-10 py-10">
        <div className="card grid h-[600px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          content
        </div>

        <div className="card rounded-box grid h-[600px] flex-grow place-items-center bg-base-100 ">
          content
        </div>
      </div>
    </section>
  );
}
