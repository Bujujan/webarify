import Image from "next/image"
import Link from "next/link"
// import { Button } from "@/components/ui/button-custom"

export default function NotFound() {
  return (
    <div className="bg-[#FFF6EA] min-h-screen">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative">
        {/* Email sidebar */}
        {/* <div className="absolute left-0 top-1/4 transform -rotate-90 origin-left hidden md:block">
          <a href="mailto:webgrify@gmail.com" className="text-xs text-[#141414]/70">
            Email Us - Webgrify@gmail.com
          </a>
        </div> */}

        {/* 404 Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto mt-16">
          {/* If you have the actual WiFi icon image */}
          <div className="w-[400px] h-[400px]">
            <Image src="/assets/images/3dwifi.png" alt="404 WiFi Icon" width={300} height={300} className="w-full h-auto" />
          </div>

          {/* 404 Text */}
          <div className="text-center md:text-left">
            <h1 className="text-9xl font-bold mb-4">404</h1>
            <h2 className="text-5xl font-bold mb-2">Oops !</h2>
            <h3 className="text-3xl font-bold mb-4">This page disappeared</h3>
            <p className="text-[#141414]/70">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
            <Link href="/" className="text-sm underline text-[#278783]">
              Go back to home page &gt;
            </Link>
          </div>
          
        </div>
      </main>

    
    </div>
  )
}
