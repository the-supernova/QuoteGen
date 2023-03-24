import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Quote from "./components/Quote";
import Bookmark from "./components/Bookmark";
import quoteService from "./services/quote";

import bookmark from "./assets/bookmark.png";
import remove from "./assets/remove.png";

function App() {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [tag, setTag] = useState("Choose a tag");
  const [tags, setTags] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
    e.target.reset();
  };

  const addBookmark = () => {
    if (bookmarks.find((bookmark) => bookmark._id === quote._id) === undefined)
      setBookmarks([...bookmarks, quote]);
  };

  const removeBookmark = (e) => {
    const id = e.target.parentElement.parentElement.parentElement.id;
    setBookmarks(bookmarks.filter((bookmark) => bookmark._id !== id));
  };
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await quoteService.getRandom(tag);
      setQuote(data);
      setIsLoading(false);
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
      <nav className="w-full flex max-[580px]:flex-col justify-between text-white px-[3em] py-[2em]">
        <button className="font-normal focus:font-bold text-[2.5rem]">
          Home
        </button>
        <button className="font-normal focus:font-bold text-[2.5rem]">
          Bookmarks
        </button>
      </nav>

      <Quote
        id={quote._id}
        content={quote.content}
        author={quote.author}
        handler={addBookmark}
        icon={bookmark}
        isLoading={isLoading}
      />
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
            className="cursor-pointer bg-[#009C51] text-white rounded-[1.9rem] px-8 py-2 font-normal text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]"
          />
        </form>
      </div>
      <Bookmark bookmarks={bookmarks} handler={removeBookmark} icon={remove} />
    </div>
  );
}

export default App;
