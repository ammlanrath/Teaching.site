import './global.css'

export const metadata = {
  title: 'Elevate Tuitions',
  description: 'Premium Online Tuition Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-surface text-ink selection:bg-accent-soft font-sans">
        {children}
      </body>
    </html>
  )
}

