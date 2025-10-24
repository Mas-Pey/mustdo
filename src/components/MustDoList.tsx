import type { MustDo } from "../types/mustdo";
import MustDoItem from "./MustDoItem";

interface MustDoProps {
    mustdo: MustDo[]
    onCompletedChange: (id: number, completed: boolean) => void,
    onDelete: (id: number) => void
}

export default function MustDoList({
    mustdo,
    onCompletedChange,
    onDelete
}: MustDoProps) {
    const listSorted = mustdo.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id
        }
        return a.completed ? 1 : -1
    })
    return (
        <>
            <div className="space-y-3">
                {listSorted.map(list => (
                    <MustDoItem
                        mustdo={list}
                        key={list.id}
                        onCompletedChange={onCompletedChange}
                        onDelete={onDelete}
                    />
                ))}
            </div>
            {mustdo.length === 0 && (
                <p className="text-center italic text-amber-200 mt-4">
                    Really? You have nothing to do? Take a break!
                </p>
            )}
        </>
    )
}