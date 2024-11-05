import { CardsSkeleton } from "@/ui/skeletons";
import { Suspense } from "react";
import Messages from "./components/Messages";
import { fetchMessageData } from "./lib/data";
import { Search } from "./components/Search";

export default async function Page({ searchParams, }: {
  searchParams?: { query?: string; page?: string; };
}) {

console.log("searchParams", searchParams);
console.log("searchParams?.query", searchParams?.query);

  const query = searchParams?.query || '';
  const messages = await fetchMessageData(query);
  

  return (
    <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        
        <Search placeholder="Search messages..." />

        <Suspense fallback={<CardsSkeleton />}>
          <Messages messages={messages} />
        </Suspense>
      </main>
    </div>
  );
}
