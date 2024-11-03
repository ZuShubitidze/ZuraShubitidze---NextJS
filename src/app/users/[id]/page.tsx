"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function UserPageWithClient() {

  const { id } = useParams()

  return (
    <div>
      <h1>User ID: { id }</h1>
    </div>
  )
}
