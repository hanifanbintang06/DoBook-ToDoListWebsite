'use client'

import ButtonDropDown from "@/Components/ButtonDropDown";
import NotesList from "@/Components/NotesList";
import SearchBar from "@/Components/SearchBar";
import { Note } from "@/Type/Note";
import { useEffect, useState } from "react";

export default function Notes() {
  const [ activeId, setActiveId ] = useState<number | null>(null)
  const [ notes, setNotes ] = useState<Note[]>([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState<string | null>(null)
      
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

  const activeNote = notes.find(note => note.id === activeId) || null
  return (
    <div className="w-full h-full flex flex-row gap-4 overflow-y-auto">
      <div className="w-full h-full p-4 rounded-2xl bg-white flex flex-col gap-3">
        <div className="w-full h-fit flex flex-row items-center gap-4">
            <input type="text" value={activeNote?.noteName}
            className="w-full text-lg font-medium mr-auto focus:outline-none" />
            <p className="text-sm">12/12/25</p>
            <ButtonDropDown />
        </div>
        <textarea value={activeNote?.noteContent} 
        className="w-full h-full items-start focus:outline-none" />
      </div>
      <div className="w-120 h-full p-4 rounded-2xl bg-white flex flex-col gap-6">
        <div className="w-full h-fit flex flex-row gap-3">
          <SearchBar />
          <ButtonDropDown />
        </div>
        <div className="w-full h-full gap-5 flex flex-col overflow-hidden">
          <NotesList notes={notes} loading={loading} error={error} onSelect={setActiveId} activeId={activeId} />
        </div>
      </div>
    </div>
  );
}
