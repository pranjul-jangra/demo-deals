import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories")
  if (!res.ok) throw new Error("Failed to fetch categories")
  return res.json()
}

export default async function Categories() {
  const categories = await getCategories()

  const categoryIcons = {
    electronics: "📱",
    jewelery: "💎",
    "men's clothing": "👔",
    "women's clothing": "👗",
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category: string) => (
          <Link key={category} href={`/category/${category}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="text-4xl mb-2">{categoryIcons[category as keyof typeof categoryIcons] || "🛍️"}</div>
                <h3 className="font-semibold capitalize">{category}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
