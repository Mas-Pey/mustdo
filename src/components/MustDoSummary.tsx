import type { MustDo } from "../types/mustdo";

interface MustDoSummaryProps {
    mustdo: MustDo[]
    deleteAllCompleted: () => void 
}

export default function MustDoSummary({
    mustdo,
    deleteAllCompleted
}: MustDoSummaryProps) {
    const completedMustDo = mustdo.filter(mustdo => mustdo.completed)
    return (
        <div className="text-center font-medium text-amber-100 pb-1">
            <p>
                {completedMustDo.length}/{mustdo.length} completed
            </p>
            {completedMustDo.length > 0 && (
                <button onClick={deleteAllCompleted} className="bg-red-500 hover:bg-red-600 underline py-1 px-2 m-1 rounded-md">
                    Delete All Completed ?
                </button>
            )}
        </div>
    ) 
} 