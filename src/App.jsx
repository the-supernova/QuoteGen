import { useState, useEffect } from "react";
import Quote from "./components/Quote";
import quoteService from "./services/quote";

function App() {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [tag, setTag] = useState("Choose a tag");
  const [tags, setTags] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
    e.target.reset();
  };
  useEffect(() => {
    (async () => {
      const data = await quoteService.getRandom(tag);
      setQuote(data);
      setTag("Choose a tag");
    })();
  }, [isClicked]);

  useEffect(() => {
    async function fetchTags() {
      const data = await quoteService.getTags();
      setTags(data);
    }
    fetchTags();
  }, []);
  return (
    <div className="flex flex-col items-center gap-8">
      <nav className="w-full flex justify-between text-white px-[3em] py-[2em]">
        <button className="font-normal focus:font-bold text-[2.5rem]">
          Home
        </button>
        <button className="font-normal focus:font-bold text-[2.5rem]">
          Bookmarks
        </button>
      </nav>
      <Quote content={quote.content} author={quote.author} />
      <div>
        <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
          <select
            name="tags"
            className="bg-[#D9D9D9] rounded-[1.9rem] py-2 border-r-[16px] border-transparent"
            onChange={(e) => setTag(e.target.value)}
          >
            <option value="all">&nbsp;&nbsp;{tag}</option>
            {tags.map((tag) => (
              <option key={tag._id} value={tag.name}>
                &nbsp;&nbsp;{tag.name}
              </option>
            ))}
          </select>
          <input
            type="submit"
            value="Next Quote"
            className="bg-[#009C51] text-white rounded-[1.9rem] px-8 py-2 font-normal text-[2.5rem]"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
