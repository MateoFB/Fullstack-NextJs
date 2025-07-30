import { Header } from "@/components/Header"
import  React from "react";


export default async function RSLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  console.log('CHILDREN IN LAYOUT:', children);
  return (
    <>
          <Header />
     <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>

      <div className="px-4 py-2">
        {children}
      </div>
    </div>
    </>
  )
}