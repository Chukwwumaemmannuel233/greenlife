"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

type User = {
    name: string;
    email: string;
  };
  
  // Define a type for messages
  type Message = {
    id: number;
    message: string;
    date: string;
  };

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    // In a real application, you would fetch the user data and messages from your backend
    const mockUser:User = { name: "John Doe", email: "john@example.com" }
    const mockMessages = [
      { id: 1, message: "Hello, I have a question about your products.", date: "2023-05-01" },
      { id: 2, message: "Thank you for your quick response!", date: "2023-05-03" },
    ]
    setUser(mockUser)
    setMessages(mockMessages)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this message to your backend
    console.log("New message:", newMessage)
    setNewMessage("")
    alert("Message sent successfully!")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome, {user.name}</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Messages</h2>
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white p-4 rounded-lg shadow mb-4">
              <p>{msg.message}</p>
              <p className="text-sm text-gray-500 mt-2">Sent on: {msg.date}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send a New Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={4}
              required
            />
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/" passHref>
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}

