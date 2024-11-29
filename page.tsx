export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with gradient background */}
      <header className="sticky top-0 z-50 w-full px-5 py-4 bg-gradient-to-r from-[#333] via-[#555] to-[#333] text-white">
        <h1 className="text-2xl font-bold text-center">My Works</h1>
      </header>

      {/* Main content area */}
      <main className="flex-1 p-5">
        {/* Add your main content here */}
      </main>

      {/* Footer with gradient background */}
      <footer className="w-full px-5 py-4 bg-gradient-to-r from-[#f4f4f9] via-[#e8e8e0] to-[#f4f4f9] text-[#333] text-center">
        <p>© 2023 My Works. All rights reserved.</p>
      </footer>
    </div>
  )
}

