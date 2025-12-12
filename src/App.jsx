import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    // Simple check to see if Supabase connects
    if (supabase) {
      setMessage("CliMap-ID is connected to Supabase!")
    }
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to CliMap ID</h1>
      <p>Status: {message}</p>
    </div>
  )
}

export default App
