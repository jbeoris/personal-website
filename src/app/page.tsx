import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { createHash } from 'crypto'

const Home = () => {
  const email = process.env.NEXT_PUBLIC_PERSONAL_EMAIL ?? '';
  const hash = createHash('md5').update(email.toLowerCase().trim()).digest('hex')
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=200&d=mp`

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="flex flex-col items-center text-center space-y-8">
        <img
          src={gravatarUrl}
          alt="Jack Beoris"
          width={200}
          height={200}
          className="rounded-full"
        />
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Jack Beoris</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Co-founder at MagicPath
          </p>
        </div>

        <p className="text-lg max-w-xl">
          Empowering creativity through AI technologies.<br/>
          Based in New York City.
        </p>

        <div className="flex space-x-4">
          <Button asChild variant="default">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="https://magicpath.ai" target="_blank" rel="noopener noreferrer">Visit MagicPath</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home