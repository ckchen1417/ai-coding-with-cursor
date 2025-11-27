import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Check,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Users,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary"></div>
            <span className="text-xl font-bold">YourSaaS</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your Amazing SaaS
            <span className="text-primary"> Solution</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Add your compelling headline here. Describe what makes your product unique and why
            customers should choose you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>
          <div className="mt-16">
            <div className="mx-auto h-64 w-full max-w-3xl rounded-lg border bg-muted">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <p className="text-sm">[Your Hero Image/Video Placeholder]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to succeed, all in one place.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Experience blazing fast performance with our optimized infrastructure.",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Your data is protected with enterprise-grade security measures.",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description: "Get insights with comprehensive analytics and reporting tools.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Work seamlessly with your team using our collaboration features.",
              },
              {
                icon: Zap,
                title: "Feature 5",
                description: "Add your feature description here.",
              },
              {
                icon: Zap,
                title: "Feature 6",
                description: "Add your feature description here.",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-t py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that's right for you. All plans include a 14-day free trial.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$9",
                period: "/month",
                description: "Perfect for individuals getting started",
                features: [
                  "Feature 1 included",
                  "Feature 2 included",
                  "Feature 3 included",
                  "Feature 4 included",
                  "Feature 5 included",
                ],
                cta: "Start Free Trial",
                popular: false,
              },
              {
                name: "Professional",
                price: "$29",
                period: "/month",
                description: "Best for growing teams",
                features: [
                  "Everything in Starter",
                  "Feature 6 included",
                  "Feature 7 included",
                  "Feature 8 included",
                  "Feature 9 included",
                  "Priority support",
                ],
                cta: "Start Free Trial",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$99",
                period: "/month",
                description: "For large organizations",
                features: [
                  "Everything in Professional",
                  "Feature 10 included",
                  "Feature 11 included",
                  "Feature 12 included",
                  "Custom integrations",
                  "Dedicated support",
                  "SLA guarantee",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={plan.popular ? "border-primary shadow-lg" : ""}
              >
                <CardHeader>
                  {plan.popular && (
                    <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-t bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about our product.
              </p>
            </div>
            <div className="mt-16">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What is your product?",
                    answer:
                      "Add your answer here. Explain what your product does and how it helps customers solve their problems.",
                  },
                  {
                    question: "How does pricing work?",
                    answer:
                      "Add your answer here. Explain your pricing model, billing cycles, and any special offers or discounts.",
                  },
                  {
                    question: "Can I change my plan later?",
                    answer:
                      "Add your answer here. Explain how customers can upgrade, downgrade, or modify their plans.",
                  },
                  {
                    question: "What kind of support do you offer?",
                    answer:
                      "Add your answer here. Describe your support channels, response times, and available resources.",
                  },
                  {
                    question: "Is there a free trial?",
                    answer:
                      "Add your answer here. Explain the terms of your free trial, what's included, and how to get started.",
                  },
                  {
                    question: "How secure is my data?",
                    answer:
                      "Add your answer here. Describe your security measures, compliance certifications, and data protection policies.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as
                soon as possible.
              </p>
            </div>
            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <p className="mt-2 text-muted-foreground">
                    Fill in your contact details here.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">your-email@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        123 Your Street, City, State 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary"></div>
                <span className="text-xl font-bold">YourSaaS</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building amazing products for amazing people.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} YourSaaS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
