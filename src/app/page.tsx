import CardsContainer from '@/components/CardsContainer';
import CardsFallBack from '@/components/CardsFallback';
import Header from '@/components/Header';
import { Container } from "@mui/material";
import { Suspense } from 'react';
export interface SearchParams { [key: string]: string }
export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>
}) {

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(312px,1fr))] gap-1.5'>
            <Suspense fallback={<CardsFallBack />}>
              <CardsContainer searchParams={searchParams} />
            </Suspense>
          </div>
        </Container>
      </main>
    </>
  );
}
