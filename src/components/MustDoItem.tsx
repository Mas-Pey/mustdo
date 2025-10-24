import { Trash2 } from "lucide-react"
import type { MustDo } from "../types/mustdo"

interface MustDoItemProps {
    mustdo: MustDo
    onCompletedChange: (id: number, completed: boolean) => void
    onDelete: (id: number) => void
}

export default function MustDoItem({ mustdo, onCompletedChange, onDelete }: MustDoItemProps) {
    return (
        <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 grow border rounded-2xl p-3 text-amber-200 hover:bg-green-950 not-dark:hover:bg-green-300">
                <input type="checkbox"
                    checked={mustdo.completed}
                    onChange={(e) => onCompletedChange(mustdo.id, e.target.checked)}
                    className="scale-110"></input>
                <span className={mustdo.completed ? "line-through opacity-50" : ""}>
                    {mustdo.title}
                </span>
            </label>
            <button onClick={() => onDelete(mustdo.id)}>
                <Trash2 className="text-amber-950" />
            </button>
        </div>
    )
}