import { useState } from "react"
export const useFetch = (callback) => {
    const [elPreload, setUsePreload] = useState(false);
    const [mesError, setMesError] = useState('');
    const fetch = async () => {
        try {
            setUsePreload(true)
            await callback()
        } catch (e) {
            setMesError(e.message)
            console.log(e);
        } finally {
            setUsePreload(false)
        }
    }
    return [fetch, elPreload, mesError]
}