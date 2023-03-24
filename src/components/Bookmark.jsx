import Quote from "./Quote";
export default function Bookmark({bookmarks, handler, icon}) {
    return (
        <>
            {bookmarks.map((bookmark) => (
                <Quote id={bookmark._id} content={bookmark.content} author={bookmark.author} handler={handler} icon={icon} />
            ))}
        </>
    )
}
