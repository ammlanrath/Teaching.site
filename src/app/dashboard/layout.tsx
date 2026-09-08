export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-surface-alt">
      <aside className="w-64 bg-white border-r border-border hidden md:flex flex-col">
        <div className="p-4 border-b border-border font-display font-bold text-xl text-ink">
          Elevate Tuitions
        </div>
        <nav className="flex-1 p-4">
          {/* Navigation links will go here based on role */}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto p-8">
        {children}
      </main>
    </div>
  )
}
