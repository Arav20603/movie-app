import { useEffect, useState } from "react"
import { fetchMovies } from "./api"

export const useFetchMovies = () => {
    const [movies, setMovies] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)


    useEffect(() => {
        const getMovies = async () => {
            setLoading(true)
            try {
                const movies = await fetchMovies()
                setMovies(movies)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }
        getMovies()
    }, [])


    return { movies, loading, error }
}