export default function Quote({id, content, author, handler, icon}) {
    return (
        <div id={id} className="flex flex-col gap-8 bg-[#D05252] w-3/5 rounded-3xl px-16 py-8 m-4 text-white">
            <p className="mb-4 font-normal text-[2.5rem]">{content}</p>
            <div className="flex justify-around">
                <p className="font-bold text-[1.56rem]">-{author}</p>
                <button onClick={handler}><img src={icon}/></button>
            </div>
        </div>
    )
}
