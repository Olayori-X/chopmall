'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Sell Faster on WhatsApp 🚀
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Create your own online store and let customers order directly from you
            without stress.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button
              onClick={() => router.push('/signup')}
              className="bg-orange-600 text-white px-6 py-3 rounded-xl w-full sm:w-auto"
            >
              Get Started
            </button>

            <button className="border px-6 py-3 rounded-xl w-full sm:w-auto">
              See Demo
            </button>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="Preview"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div> */}
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
          Why Vendors Love It ❤️
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center sm:text-left">
            <h3 className="font-semibold">Easy Product Upload</h3>
            <p className="text-sm text-gray-600 mt-2">
              Add products with images and prices in seconds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center sm:text-left">
            <h3 className="font-semibold">WhatsApp Integration</h3>
            <p className="text-sm text-gray-600 mt-2">
              Customers place orders directly via WhatsApp.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center sm:text-left">
            <h3 className="font-semibold">Share Your Store Link</h3>
            <p className="text-sm text-gray-600 mt-2">
              Send your link and start receiving orders instantly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-bold">
          Ready to start selling?
        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Create your store in less than 2 minutes.
        </p>

        <button
          onClick={() => router.push('/signup')}
          className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-xl w-full sm:w-auto"
        >
          Create Your Store
        </button>
      </section>
    </main>
  )
}
