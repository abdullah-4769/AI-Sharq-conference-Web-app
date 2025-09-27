'use client'

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store/store'
import api from '@/config/api'

interface User {
  id: number
  name: string
  email: string
  file: string | null
}

interface Connection {
  connectionId: number
  user: User
  connectedAt: string
  unreadMessages: number
}

interface Message {
  senderId: number
  receiverId: number
  content: string
  createdAt?: string
}

interface ApiMessage {
  id: number
  from: 'sender' | 'receiver'
  content: string
  createdAt: string
}

const ChatPage: React.FC = () => {
  const userId = useSelector((state: RootState) => state.user.userId)

  const [connections, setConnections] = useState<Connection[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  // Track unread messages separately for each user
  const [unreadCounts, setUnreadCounts] = useState<{ [userId: number]: number }>({})

  // fetch all connections
  const fetchConnections = async () => {
    if (!userId) return
    try {
      const res = await api.get(`/connections/all?userId=${userId}`)
      const connectionsData: Connection[] = Array.isArray(res.data) ? res.data : []

      setConnections(connectionsData)

      // Update unread counts - only add new messages, don't reset existing counts
      connectionsData.forEach(conn => {
        if (conn.unreadMessages > 0) {
          setUnreadCounts(prev => ({
            ...prev,
            [conn.user.id]: (prev[conn.user.id] || 0) + conn.unreadMessages
          }))
        }
      })
    } catch (error) {
      console.error('Error fetching connections:', error)
    }
  }
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  // fetch messages between user and otherUserId
  const fetchMessages = async (otherUserId: number) => {
    if (!userId) return
    try {
      const res = await api.get(`/chat/messages?userId=${userId}&otherUserId=${otherUserId}`)
      if (res.data && Array.isArray(res.data.messages)) {
        const formatted: Message[] = (res.data.messages as ApiMessage[]).map((msg) => ({
          senderId: msg.from === 'sender' ? userId : otherUserId,
          receiverId: msg.from === 'sender' ? otherUserId : userId,
          content: msg.content,
          createdAt: msg.createdAt
        }))
        setMessages(formatted)
      } else {
        setMessages([])
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    }
  }

  // when user clicks on a connection
  const selectUser = (user: User) => {
    setSelectedUser(user)
    fetchMessages(user.id)

    // Reset unread messages count ONLY for this specific user
    setUnreadCounts(prev => ({
      ...prev,
      [user.id]: 0
    }))
  }

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedUser || !userId) return
    try {
      const payload: Message = {
        senderId: userId,
        receiverId: selectedUser.id,
        content: newMessage
      }
      await api.post('/chat/send', payload)
      setNewMessage('')
      fetchMessages(selectedUser.id)
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  // Get total unread count for a user
  const getUnreadCount = (userId: number) => {
    return unreadCounts[userId] || 0
  }

  // fetch connections on mount and refresh every 10s
  useEffect(() => {
    if (!userId) return
    fetchConnections()
    const interval = setInterval(fetchConnections, 10000)
    return () => clearInterval(interval)
  }, [userId])

  // fetch messages for selected user and refresh every 10s
  useEffect(() => {
    if (!selectedUser) return
    fetchMessages(selectedUser.id)
    const interval = setInterval(() => {
      fetchMessages(selectedUser.id)
    }, 10000)
    return () => clearInterval(interval)
  }, [selectedUser, userId])

  return (
<div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex items-center gap-2 mt-6 ml-5">
        <Link href="/participants/Home">
          <FaArrowLeft className="text-red-800 w-5 h-5 cursor-pointer" />
        </Link>
        <h1 className="text-xl font-semibold text-black ml-4">Chats</h1>
      </div>

      <div className="flex flex-1 p-6 space-x-7">
        {/* Chat List */}
        <div className="w-1/3 bg-white rounded-2xl shadow border flex flex-col">
          <h2 className="px-6 py-4 text-lg font-semibold border-b border-gray-300 text-black">Chat List</h2>
          <ul className="flex-1 overflow-y-auto">
            {connections.map(conn => {
              const unreadCount = getUnreadCount(conn.user.id)
              return (
                <li
                  key={conn.connectionId}
                  onClick={() => selectUser(conn.user)}
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${selectedUser?.id === conn.user.id ? 'bg-red-800 text-white' : 'hover:bg-gray-100'
                    }`}
                >
                  <img
                    src={conn.user.file ? `/uploads/${conn.user.file}` : '/images/default.png'}
                    alt={conn.user.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex-1">
                    <p className={`font-medium ${selectedUser?.id === conn.user.id ? 'text-white' : 'text-black'}`}>
                      {conn.user.name}
                    </p>
                    <p className={`text-sm truncate w-40 ${selectedUser?.id === conn.user.id ? 'text-white' : 'text-gray-500'}`}>
                      {conn.user.email}
                    </p>
                  </div>

                  {unreadCount > 0 && (
                    <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {unreadCount}
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {/* Chat Window */}
        <div className="flex-1 bg-white rounded-2xl shadow border flex flex-col">
          {selectedUser && (
            <div className="flex items-center px-6 py-4 border-b">
              <img
                src={selectedUser.file ? `/uploads/${selectedUser.file}` : '/images/default.png'}
                alt={selectedUser.name}
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold text-black">{selectedUser.name}</p>
                <p className="text-sm text-gray-500">{selectedUser.email}</p>
              </div>
            </div>
          )}

          <div className="h-screen flex flex-col">
  
            <div className="flex-1 p-6 overflow-y-auto flex flex-col space-y-3">
              {messages.map((msg: Message, idx: number) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 ${msg.senderId === userId ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.senderId !== userId && (
                    <img
                      src={selectedUser?.file ? `/uploads/${selectedUser.file}` : '/images/default.png'}
                      alt="avatar"
                      className="h-8 w-8 rounded-full"
                    />
                  )}
                  <div>
                    <div className={`px-4 py-2 rounded-xl max-w-md ${msg.senderId === userId ? 'bg-gray-100 text-gray-800' : 'bg-red-600 text-white'}`}>
                      {msg.content}
                    </div>
                    <p className={`text-xs mt-1 ${msg.senderId === userId ? 'text-right text-gray-400' : 'text-gray-400'}`}>
                      {msg.createdAt ? new Date(msg.createdAt).toLocaleTimeString() : ''}
                    </p>
                  </div>
                  {msg.senderId === userId && (
                    <img
                      src="/images/default.png"
                      alt="avatar"
                      className="h-8 w-8 rounded-full"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>


          {selectedUser && (
            <div className="border-t px-6 py-3 flex items-center space-x-3 text-gray-400">
              <input
                type="text"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                className="flex-1 placeholder-gray-400 text-black rounded-full px-4 py-2 focus:outline-none"
                onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="text-red-800 font-bold px-3 py-2 rounded-full border border-red-800"
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatPage