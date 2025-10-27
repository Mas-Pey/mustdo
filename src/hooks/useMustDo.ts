import { useEffect, useState } from "react"
import { dummyData } from "../data/dummy"
import type { MustDo } from "../types/mustdo"

export default function useMustDo() {
    const [mustdo, setMustDo] = useState(() => {
        const nowMustDo: MustDo[] = JSON.parse(
            localStorage.getItem("mustdo") || "[]"
        )
        return nowMustDo.length > 0 ? nowMustDo : dummyData
    })

    useEffect(() => {
        localStorage.setItem("mustdo", JSON.stringify(mustdo))
    }, [mustdo])

    function setMustdoCompleted(id: number, completed: boolean) {
        setMustDo((prevMustDo) =>
            prevMustDo.map(list => list.id === id ? { ...list, completed } : list)
        )
    }

    function addMustDo(title: string) {
        setMustDo((prevMustDo) => [
            {
                id: Date.now(),
                title,
                completed: false
            },
            ...prevMustDo
        ])
    }

    function deleteMustDo(id: number) {
        setMustDo((prevMustDo) =>
            prevMustDo.filter(list => list.id !== id))
    }

    function deleteAllMustDo() {
        setMustDo((prevMustDo) =>
            prevMustDo.filter(list => !list.completed))
    }

    return {
        mustdo,
        setMustdoCompleted,
        addMustDo,
        deleteMustDo,
        deleteAllMustDo
    }

}