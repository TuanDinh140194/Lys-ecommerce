export default function Benefit() {
  return (
    <section className="py-10 md:py-20">
      <div className="pb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          A little help keeping your stress in check.
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 pb-10 md:grid-cols-2 lg:gap-8 xl:gap-10">
        <div
          className="card grid h-[600px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          style={{
            background:
              'url("https://images.unsplash.com/photo-1522322904670-5cf2a8529d21?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHNleHklMjBnaXJsfGVufDB8fDB8fHww")',
            backgroundSize: "fit",
          }}
        >
         
        </div>

        <div className="card rounded-box grid h-[600px] flex-grow place-items-center bg-base-100 ">
          content
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:gap-8 xl:gap-10">
        <div
          className="card rounded-box grid h-[600px] flex-grow place-items-center bg-base-100"
          
        >
          content
        </div>
        <div className="card grid h-[600px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
        style={{
          background:
            'url("https://images.unsplash.com/photo-1512101176959-c557f3516787?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNleHklMjBnaXJsfGVufDB8fDB8fHww")',
          backgroundSize: "fit",
        }}>
          
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:gap-8 xl:gap-10">
        <div className="card grid h-[600px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
        style={{
          background:
            'url("https://images.unsplash.com/photo-1596337635980-8d2243ea07fb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHNleHklMjBnaXJsfGVufDB8fDB8fHww")',
          backgroundSize: "fit",
        }}>
          
        </div>

        <div className="card rounded-box grid h-[600px] flex-grow place-items-center bg-base-100 ">
          content
        </div>
      </div>
    </section>
  );
}
