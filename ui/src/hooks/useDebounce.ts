import { useEffect, useState } from "react"

const debounce = (fn: Function, delay: number) => {
    let timer: NodeJS.Timeout | null
    return (...args: any[]) => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
            timer = null
        }, delay)
    }
}

const useDebounce = (fn: Function, delay: number) => {
    return debounce(fn, delay)
}

export default useDebounce