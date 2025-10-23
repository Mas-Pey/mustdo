import { useState } from "react"

interface AddMustDoFormProps{
    onSubmit: (title: string) => void
}

export default function AddMustDoForm({onSubmit}: AddMustDoFormProps) {
    const [input, setInput] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
        if (!input.trim()) return

        onSubmit(input)
        setInput("asu")
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What's your must-do?"
                className="rounded-s-2xl grow border border-amber-100 text-amber-100 p-3"
            />
            <button type="submit" className="w-20 rounded-e-2xl bg-amber-200 text-amber-950 hover:bg-amber-300">
                Add
            </button>
        </form>
    )
}