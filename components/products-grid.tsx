import ProductCard from "@/components/product-card"

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=8")
  if (!res.ok) throw new Error("Failed to fetch products")
  return res.json()
}

export default async function ProductsGrid() {
  const products = await getProducts()

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
