import { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import { Note } from "@/Type/Note";

function groupByDate(data: Note[]) {
    return data.reduce<Record<string, Note[]>>((item, note) => {
        const date = note.noteDate

        if (!item[date]) {
            item[date] = []
        }

        item[date].push(note)
        return item
    }, {})
}

type NotesListProps = {
    notes: Note[],
    loading: boolean,
    error: string | null,
    onSelect: (id: number) => void,
    activeId: number | null
}

export default function NotesList({ notes, loading, error, onSelect, activeId }: NotesListProps) {
    const groupedNotes = groupByDate(notes)

    if (loading) return <p className="text-sm px-4">Loading...</p>
    if (error) return <p className="text-sm px-4">{error}</p>

    return(
        <div className="w-full h-full flex flex-col gap-5 overflow-y-auto">
            {Object.entries(groupedNotes).map(([date, item]) => (
                <div key={date} className="w-full h-fit flex flex-col gap-3">
                    <h2 className="text-sm text-[#767676] px-4">{date}</h2>
                    <div className="w-full h-fit flex flex-col">
                        {item.map((item) => (
                            <div key={item.id} onClick={() => onSelect(item.id)} className={`w-auto 
                            h-fit text-sm px-4 py-3 flex flex-row rounded-2xl items-center
                            ${activeId === item.id ? `bg-[#3F51B5] text-white` : `bg-white text-black`}
                            hover:text-black hover:bg-[#F4F5FC] 
                            transition-all duration-300 cursor-pointer`}>
                                {item.noteName}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}