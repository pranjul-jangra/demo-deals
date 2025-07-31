import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-blue-600 text-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-white text-black hover:bg-gray-100">
          <Link href="/">Go Back to Home</Link>
        </Button>
      </div>
    </main>
  )
}
