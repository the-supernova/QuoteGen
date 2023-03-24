const Loader = () => {
  return <div className="skeleton skeleton-text"></div>;
};

export default function Quote({
  id,
  content,
  author,
  handler,
  icon,
  isLoading,
}) {
  const hideWhenLoading = { display: isLoading ? "none" : "" };
  const showWhenLoading = { display: isLoading ? "" : "none" };
  return (
    <div
      id={id}
      className="flex flex-col gap-8 bg-[#D05252] w-3/5 rounded-3xl px-4 sm:px-8 md:px-12 lg:px-16 py-8 m-4 text-white"
    >
      <p style={hideWhenLoading} className="mb-4 font-normal text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">
        {content}
      </p>
      <div style={showWhenLoading}>
        <Loader />
        <Loader />
        <Loader />
      </div>
      <div className="flex justify-around">
        <div style={showWhenLoading}>
          <Loader />
        </div>
        <p style={hideWhenLoading} className="font-bold text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.56rem]">
          -{author}
        </p>

        <button onClick={handler}>
          <img src={icon} />
        </button>
      </div>
    </div>
  );
}
