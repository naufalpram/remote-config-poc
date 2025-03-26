"use client"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { getConfigValue } from '@/lib/firebase';

const FeaturedSection = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    const collectionConfig = getConfigValue('featured_collection').asJSON();
    setCollections(collectionConfig ?? []);
  }, []);
  return (
    <section className="py-12 md:py-24">
        <div className="container">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">Featured Collections</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {collections.map((collection) => <FeaturedCard key={collection?.title} title={collection?.title} backdropImage={collection?.imgUrl} />)}
            </div>
        </div>
    </section>
  )
}

const FeaturedCard = ({ title, backdropImage }) => (
    <div className="group relative overflow-hidden rounded-lg">
        <Image
            src={backdropImage}
            alt={`Minimalist ${title}`}
            className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={600}
            height={400}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="text-center text-white">
                <h3 className="text-xl font-medium">{title}</h3>
                <Button variant="outline" className="mt-4 border-white text-white hover:bg-white hover:text-black">
                    Shop Now
                </Button>
            </div>
        </div>
    </div>
);

export default FeaturedSection;