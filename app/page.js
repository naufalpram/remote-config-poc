import Link from "next/link"
import Image from "next/image"
import { products } from "./libs/products"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center w-full">
      <header className="sticky top-0 z-10 border-b bg-background w-full flex justify-center">
        <div className="container flex h-16 items-center justify-between max-w-[1200px]">
          <Link href="/" className="text-xl font-semibold">
            MINIMAL
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="hover:text-muted-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-muted-foreground">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-muted-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-muted-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              3
            </span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24">
          <div className="container">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">New Arrivals</h1>
            <p className="mb-8 text-muted-foreground md:w-2/3">
              Discover our latest collection of minimalist products designed for modern living.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-b py-12 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full border p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On all orders over $50</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full border p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">100% secure payment</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full border p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30 days return policy</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">Featured Collections</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/600x400/png"
                  alt="Minimalist Home Collection"
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-medium">Home Collection</h3>
                    <Button variant="outline" className="mt-4 border-white text-white hover:bg-white hover:text-black">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/600x400/png"
                  alt="Minimalist Apparel Collection"
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-medium">Apparel Collection</h3>
                    <Button variant="outline" className="mt-4 border-white text-white hover:bg-white hover:text-black">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-medium">MINIMAL</h3>
              <p className="text-sm text-muted-foreground">Minimalist products for modern living.</p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-medium">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Sale
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    All Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-medium">Subscribe</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Subscribe to our newsletter for updates on new products and promotions.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-md border border-r-0 px-3 py-2 text-sm focus:outline-none"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} MINIMAL. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
