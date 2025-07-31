import Image from "next/image"

export const metadata = {
    title: "Not Found",
    description: "Page not found",
    }

 
export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <h2 className="text-2xl font-bold text-center">Page not Found</h2>
      <Image
        src="/images/404.png"
        alt="Not Found"
        width={500}
        height={500}
        className="m-0 rounded-xl mx-auto"
        priority={true}
        />
        
    </div>
  )
}