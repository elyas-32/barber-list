import TabsContainer from '@/components/TabsContainer';
import { API } from '@/data';
import { Container, TextField } from "@mui/material";
import axios from 'axios';
import Services from './Services';
import SearchBar from './SearchBar';

export default async function Header() {
    let data = null
    try {
        // data = await axios.get(`${API}/services`,{
        // })
      } catch (error) {
        console.log("fetch barbers error: ", error);
      }
    return <header className="sticky top-0 bg-gray-50 z-999 p-2">
        <Container className='flex flex-col gap-2'>
            <SearchBar />
            <Services />
            <TabsContainer />
        </Container>
    </header>
}