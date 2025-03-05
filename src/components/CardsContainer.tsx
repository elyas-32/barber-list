import { API, controllCall } from '@/lib/data';
import axios from 'axios';
import { SearchParams } from 'next/dist/server/request/search-params';
import Card from './Card';
import { Barber } from '@/lib/definition';
const getBarbers = async (abortController: AbortController, searchParams?: SearchParams) => {
    const params = searchParams ? new URLSearchParams(searchParams as {}) : ""
    try {
        const { data } = await axios.get(`${API}/barbers?${params}`, {
            signal: abortController.signal
        })
        console.log('got data', data);

        return data
    } catch (error) {
        console.log("fetch barbers error: ", error);
    }
}
export default async function CardsContainer({ searchParams }: { searchParams?: Promise<SearchParams> }) {
    const waitedParams = await searchParams;
    const controlledGetUsers = controllCall(getBarbers);
    const results = await controlledGetUsers(waitedParams);
    return (results?.results ?? []).map((b: Barber, i: number) => {
        return <Card barber={b} key={i} />
    })
}