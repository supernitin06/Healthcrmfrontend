
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold mb-8 text-blue-400">
                CRM Frontend Setup Verified
            </h1>
            <div className="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700 text-center max-w-md w-full">
                <p className="mb-6 text-slate-300">
                    Vite + React + Tailwind CSS configured successfully.
                </p>
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                    Count is {count}
                </button>
            </div>
        </div>
    )
}

export default App
