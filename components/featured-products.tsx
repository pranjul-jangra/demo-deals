import ProductCard from "@/components/product-card"

async function getFeaturedProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4")
  if (!res.ok) throw new Error("Failed to fetch products")
  return res.json()
}

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
