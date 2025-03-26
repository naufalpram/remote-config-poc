import { getConfigValue } from "@/lib/firebase";
import { cn } from "@/lib/utils"
import { MapPin, Plus, Shield } from "lucide-react"
import { useEffect, useState } from "react"

const features = [
    {
      icon: <Plus className="h-6 w-6" />,
      title: "Free Shipping",
      description: "On all orders over $50",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Payment",
      description: "100% secure payment",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Easy Returns",
      description: "30 days return policy",
    },
  ]

export default function FeaturesSection({ className }) {
  const [layout, setLayout] = useState("layout_grid");
  useEffect(() => {
    const layoutConfig = getConfigValue('layout_features_section').asString();
    setLayout(layoutConfig);
  }, []);

  if (layout === "layout_horizontal") {
    return (
      <section className={cn("border-t border-b py-12 md:py-16", className)}>
        <div className="container">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-between">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 md:max-w-[30%]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-background">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={cn("border-t border-b py-12 md:py-24", className)}>
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full border p-4">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
