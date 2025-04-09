'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { products } from "../lib/products"
import { fetchRemoteConfig, getAllConfig, getConfigValue } from "@/lib/firebase"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import LoadingIndicator from "@/components/ui/loading-indicator"
import ProductCard from "@/components/product-card"
import MaintenancePage from "@/components/maintenance"
import CollectionSection from "./components/collections"
import PromoMarquee from "./components/promo-marquee"
import FeaturesSection from "./components/features"

export default function Home() {
  const [isMaintenance, setIsMaintenance] = useState(null);

  useEffect(() => {
    const getConfig = async () => {
      const data = await fetch('/api/get-config');
      console.log(await data.json());
      
      await fetchRemoteConfig();
      const maintenanceConfig = getConfigValue('is_under_maintenance').asBoolean();
      const maintenanceConfig2 = getAllConfig();
      console.log(maintenanceConfig2);
      
      setIsMaintenance(maintenanceConfig);
    };
    getConfig();
  }, []);
  
  if (isMaintenance === null) return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoadingIndicator size="page" />
    </div>
  );
  if (isMaintenance) return <MaintenancePage />;
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
            <PromoMarquee className="mb-8 py-3 text-sm font-medium tracking-wide"/>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <FeaturesSection />
        <CollectionSection />
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
