import bookmark from '../assets/bookmark.png'
export default function Quote() {
    return (
        <div className="bg-[#D05252] rounded-xl p-8 text-white">
            <p className="mb-4 font-normal text-[2.5rem]">The human spirit must prevail over technology</p>
            <div className="flex justify-around">
                <p className="font-bold text-[1.56rem]">-Albert Einstein</p>
                <button><img src={bookmark}/></button>
            </div>
        </div>
    )
}
