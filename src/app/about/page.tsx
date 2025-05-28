import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Jack Beoris</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Co-founder at MagicPath | AI Enthusiast | Physicist | Mathematician
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
        <p className="mb-4">
          As the Co-founder and CTO of MagicPath, I&apos;m on a mission to revolutionize generative AI. My passion lies at the intersection of technology and creative expression, where I strive to empower users with innovative tools and seamless workflows on the MagicPath platform.
        </p>
        <p>
          With a background in physics and pure mathematics, I&apos;ve always been fascinated by difficult and lengthy problems. This led me to co-found MagicPath, where we&apos;re pushing the boundaries of what&apos;s possible at the intersection of design and engineering.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tech Leadership</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Guiding the technical vision and strategy at MagicPath, ensuring we stay at the forefront of generative AI technologies and user experience.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Developing cutting-edge AI pipelines for generative coding and design.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">My Vision</h2>
        <p>
          I believe in a future where AI enhances human creativity and productivity rather than replacing it. MagicPath is working towards a world where creators have unprecedented tools at their fingertips. We believe in giving our users superpowers, but also maintaining responsible generative AI practices.
        </p>
      </section>

      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
        <p className="mb-6">
          I&apos;m always excited to discuss new ideas, potential collaborations, or just chat about the future of AI.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://magicpath.ai" target="_blank" rel="noopener noreferrer">Visit MagicPath</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage