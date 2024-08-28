import React from 'react'
import Link from 'next/link'
import { siGithub, siGmail, siLinkedin } from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

const IconWrapper = (props: { icon: SimpleIcon, size: number }) => (
  <svg
    role="img"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d={props.icon.path} />
  </svg>
)

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Jack Beoris. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/jbeoris" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
                <IconWrapper icon={siGithub} size={20}/>
            </Link>
            <Link href="https://linkedin.com/in/jackbeoris" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
                <IconWrapper icon={siLinkedin} size={20}/>
            </Link>
            <Link href={`mailto:${process.env.NEXT_PUBLIC_PERSONAL_EMAIL}`} className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
                <IconWrapper icon={siGmail} size={20}/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer