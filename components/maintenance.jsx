"use client"
import { useState } from "react"
import { AlertCircle, Clock, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MaintenancePage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <div className="mx-auto max-w-md">
        {/* Logo */}
        <div className="mb-8 text-3xl font-bold">MINIMAL</div>

        {/* Maintenance Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-muted bg-muted/30">
              <AlertCircle className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-background">
              <Clock className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="mb-3 text-2xl font-bold sm:text-3xl">We&apos;re under maintenance</h1>
        <p className="mb-6 text-muted-foreground">
          We&apos;re working to improve your shopping experience. Our site will be back online shortly.
        </p>

        {/* Estimated Time */}
        <div className="mb-8 flex items-center justify-center gap-2 rounded-full border border-muted bg-muted/30 px-4 py-2 text-sm">
          <Clock className="h-4 w-4" />
          <span>Estimated completion: March 26, 2025 at 8:00 PM</span>
        </div>

        {/* Notification Form */}
        <div className="mb-8 rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium">Get notified when we&apos;re back</h2>

          {isSubmitted ? (
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Thank you! We&apos;ll notify you when we&apos;re back online.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                />
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  trailingIcon={!isSubmitting ? <ArrowRight className="h-4 w-4" /> : undefined}
                >
                  Notify Me
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                We&apos;ll only use your email to notify you when the site is back online.
              </p>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="#"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-primary/5"></div>
        <div className="absolute -right-4 bottom-1/4 h-96 w-96 rounded-full bg-primary/5"></div>
      </div>
    </div>
  )
}

