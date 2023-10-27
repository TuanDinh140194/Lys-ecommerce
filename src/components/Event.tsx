export default function Product() {
  return (
    <div className="container py-10">
      <div className="text-center">
        <p className="mb-6 text-lg sm:text-2x">
        Health and fitness
        </p>
        <h2 className="mb-4 text-3xl font-bold sm:text-5xl md:mb-14">Turn insights into improvements.</h2>
      </div>
      
      <div
        className="hero min-h-64 h-[600px] rounded-3xl bg-base-100"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
  
    </div>
  );
}
