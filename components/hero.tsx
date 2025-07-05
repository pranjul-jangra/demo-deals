import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Amazing Products at Great Prices</h1>
          <p className="text-xl mb-8 opacity-90">
            Shop from our curated collection of electronics, clothing, jewelry, and more. Quality products with fast
            shipping and excellent customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Shop Now
              </Button>
            </Link>
            <Link href="/categories">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
