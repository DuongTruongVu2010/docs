"use client"

import { usePaginatedQuery } from "convex/react";

import Navbar from "./navbar";
import TemplateGallery from "./templates-gallery";
import { api } from "../../../convex/_generated/api";
import DocumentsTable from "./documents-table";
import { useSearchParam } from "@/hooks/use-search-param";
export default function Home() {

  const [search] = useSearchParam()

  const {results, status, loadMore} = usePaginatedQuery(api.documents.get, {search}, {initialNumItems: 5 })



  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed p-4 top-0 left-0 right-0 z-10 h-16 bg-white">
        <Navbar />
      </div>
      <div  className="mt-16">
        <TemplateGallery />
        <DocumentsTable 
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      
      </div>
    </div>
  );
}
