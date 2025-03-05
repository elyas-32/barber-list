"use client"
import { Container } from "@mui/material";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Services from './Services';
import TabsContainer from './TabsContainer';
export type ServicesType = [] | Promise<any>
export interface QueryParams {
  search?: string,
  is_shop?: boolean | "",
  services: string[];
}
export default function Header() {
  const [queryParams, setQueryParams] = useState<QueryParams>({ services: [] })
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      const searchParamsObj = new URLSearchParams(queryParams as {});
      router.push(`/?${searchParamsObj}`)

    }, 400);
    return () => {
      clearTimeout(timeout)
    }
  }, [queryParams])
  return <header className="sticky top-0 bg-gray-50 z-999 p-2">
    <Container className='flex flex-col gap-2'>
      <SearchBar setQueryParams={setQueryParams} />
      <Services queryParams={queryParams} setQueryParams={setQueryParams} />
      <TabsContainer setQueryParams={setQueryParams} />
    </Container>
  </header>
}
