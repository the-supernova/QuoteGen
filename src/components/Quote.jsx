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
      className="flex flex-col gap-8 bg-[#D05252] w-3/5 rounded-3xl px-16 py-8 m-4 text-white"
    >
      <p style={hideWhenLoading} className="mb-4 font-normal text-[2.5rem]">
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
        <p style={hideWhenLoading} className="font-bold text-[1.56rem]">
          -{author}
        </p>

        <button onClick={handler}>
          <img src={icon} />
        </button>
      </div>
    </div>
  );
}
