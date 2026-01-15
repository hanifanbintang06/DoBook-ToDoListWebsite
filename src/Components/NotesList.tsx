import { useEffect, useState } from "react";
import ButtonList from "./ButtonList";

type Note = {
    id: number,
    noteName: string,
    noteContent: string,
    noteDate: string
}

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

export default function NotesList() {
    const [ notes, setNotes ] = useState<Note[]>([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState<String | null>(null)
    const groupedNotes = groupByDate(notes)
    
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await fetch('/notes.json') 

                if (!res.ok) {
                    throw new Error("Gagal Masuk")
                }

                const data: Note[] = await res.json()
                setNotes(data)
            } catch (err) {
                setError("gagal di fetchnotes")
            } finally {
                setLoading(false)
            }
        }

        fetchNotes()
    }, [])

    if (loading) return <p className="text-sm px-4">Loading...</p>
    if (error) return <p className="text-sm px-4">{error}</p>

    return(
        <div className="w-full h-full flex flex-col gap-5 overflow-y-auto">
            {Object.entries(groupedNotes).map(([date, item]) => (
                <div key={date} className="w-full h-fit flex flex-col gap-3">
                    <h2 className="text-sm text-[#767676] px-4">{date}</h2>
                    <div className="w-full h-fit flex flex-col">
                        {item.map((item) => (
                            <ButtonList key={item.id}>{item.noteName}</ButtonList>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}