'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        
        try {
          const response = await fetch("https://formspree.io/f/mpwabrnl", {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          })
          
          if (response.ok) {
            setSubmitted(true)
            form.reset()
          } else {
            throw new Error('Form submission failed')
          }
        } catch (error) {
          console.error('Error:', error)
          alert('There was an error submitting the form. Please try again.')
        }
    }
    
    if (submitted) {
        return <p className="text-green-600">Thank you for your message. I&apos;ll be in touch soon!</p>
    }

    return (
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </section>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Email:</strong> <a href={`mailto:${process.env.NEXT_PUBLIC_PERSONAL_EMAIL}`} className="text-blue-600 dark:text-blue-400">{process.env.NEXT_PUBLIC_PERSONAL_EMAIL}</a>
              </p>
              <p>
                <strong>GitHub:</strong> <a href="https://www.github.com/jbeoris" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">github.com/jbeoris</a>
              </p>
              <p>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jackbeoris" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">linkedin.com/in/jackbeoris</a>
              </p>
              <p>
                <strong>Company:</strong> <a href="https://everart.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">EverArt</a>
              </p>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}

export default ContactPage