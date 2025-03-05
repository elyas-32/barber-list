import Card from '@/components/Card';
import Header from '@/components/Header';
import { API } from '@/data';
import { Container } from "@mui/material";
import axios from 'axios';
const getBarbers = async (searchParams?: SearchParams) => {
  const params = searchParams ? new URLSearchParams(searchParams) : ""
  try {
    const {data} =  await axios.get(`${API}/barbers?${params}`)
    return data
  } catch (error) {
    console.log("fetch barbers error: ", error);
  }

}
interface SearchParams { [key: string]: string }
export const dynamic = 'force-dynamic'
export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>
}) {

  const barbers = await getBarbers(await searchParams)
  // const barbers = 
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(312px,1fr))] gap-1.5'>
            {
              (barbers ?? []).map(() => {
                return <Card />
              })
            }
          </div>
        </Container>
      </main>
    </>
  );
}
