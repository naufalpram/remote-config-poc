"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-lg border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <Button variant="secondary" size="sm" className="flex items-center gap-1 cursor-pointer">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-sm font-medium">
          <Link href={`/products/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  )
}
