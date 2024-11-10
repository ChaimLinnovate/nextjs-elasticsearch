import { CardsSkeleton } from "@/ui/skeletons";
import { Suspense } from "react";
import { fetchMessageData } from "../lib/data";
import { Search } from "../components/Search";
import Messages from "../components/Messages";


export default async function Page({ searchParams, }: {
  searchParams?: { query?: string; page?: string; };
}) {


  const query = searchParams?.query || '';
  const messages = await fetchMessageData(query);
  

  return (
    <div className="items-center justify-items-center min-h-screen p-4 pb-20 gap-2 sm:p-20 ">
        
        <Search placeholder="Search messages..." />

        <Suspense fallback={<CardsSkeleton />}>
          <Messages messages={messages} />
        </Suspense>
    </div>
  );
}
