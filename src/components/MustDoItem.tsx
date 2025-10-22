import type { MustDo } from "../types/mustdo"

interface MustDoItemProps {
    mustdo: MustDo
}

export default function MustDoItem({ mustdo }: MustDoItemProps) {
    return (
        <div>
            <label className="flex items-center gap-5 border rounded-3xl p-4 text-amber-200 hover:bg-green-950 not-dark:hover:bg-green-300">
                <input type="checkbox" className="scale-150"></input>
                <span className={mustdo.completed ? "line-through opacity-50" : ""}>
                    {mustdo.title}
                </span>
            </label>
        </div>
    )
}