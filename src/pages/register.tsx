    import { useState } from 'react'
    import { useRouter } from 'next/router'

    export default function Register() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        })

        const data = await res.json()

        if (!res.ok) {
        setError(data.error || 'တစ်ခုခုမှားနေပါသည်။')
        setLoading(false)
        return
        }

        setLoading(false)
        router.push('/login')
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        >
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            စာရင်းသွင်းရန်
            </h2>

            {error && (
            <p className="mb-6 text-center text-red-600 font-medium">{error}</p>
            )}

            <label className="block mb-2 text-gray-700 font-semibold">အီးမေးလ်</label>
            <input
            type="email"
            className="w-full rounded border border-gray-300 px-4 py-3 mb-5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Email ကိုထည့်ပါ"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            />

            <label className="block mb-2 text-gray-700 font-semibold">စကားဝှက်</label>
            <input
            type="password"
            className="w-full rounded border border-gray-300 px-4 py-3 mb-8 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="စကားဝှက်ကိုထည့်ပါ"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
            />

            <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 disabled:opacity-60"
            >
            {loading ? 'စာရင်းသွင်းနေသည်...' : 'စာရင်းသွင်းမည်'}
            </button>
        </form>
        </div>
    )
    }
