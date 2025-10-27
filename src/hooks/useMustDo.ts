import { useState } from "react"
import { dummyData } from "../data/dummy"

export default function useMustDo() {
    const [mustdo, setMustDo] = useState(dummyData)

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