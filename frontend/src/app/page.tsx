import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Cloud, Code, Users, Video } from "lucide-react"
import {ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton} from "@clerk/nextjs";
import Link from "next/link"

export default function LandingPage() {
  return (
      <div className="flex flex-col min-h-screen justify-center">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Video className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-2xl font-bold mr-2">Videx</span><span className="text-lg mr-2 text-neutral-500">by HSG</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About HSG
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About Videx
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contact
            </Link>
            <ClerkLoading>
              Loading...
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <Link href="/app">
                  <Button>
                    Start editing
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <Button variant="outline">Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button>Sign Up</Button>
                </SignUpButton>
              </SignedOut>
            </ClerkLoaded>
          </nav>
        </header>
        <main className="flex-1 flex-col flex justify-center">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Edit Videos in the Cloud, Together
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Videx is a free, open-source, web-based video editor. Collaborate in real-time, access your
                    projects anywhere, and create stunning videos without installing any software.
                  </p>
                </div>
                <div className="space-x-4">
                  <SignUpButton>
                    <Button>Get Started</Button>
                  </SignUpButton>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <Cloud className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cloud-Based Editing</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Edit your videos from anywhere, on any device. Your projects are always accessible.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Real-Time Collaboration</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Work together with your team in real-time. Multiple editors can work on the same project simultaneously.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Code className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Open Source</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fully open-source and free to use. Contribute to the project and help shape the future of video editing.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Editing Interface</h2>
              <div className="flex justify-center">
                <div
                    className="w-[800px] h-[400px] rounded-lg shadow-xl"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white flex justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Start Editing Today
                  </h2>
                  <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                    Join thousands of creators who are already using Videx to bring their vision to life.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">

                    <SignUpButton>
                      <Button type="submit" variant="secondary">
                        Sign Up
                      </Button>
                    </SignUpButton>

                  <p className="text-xs text-blue-100">
                    By signing up, you agree to our Terms & Conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 HSG. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
  )
}