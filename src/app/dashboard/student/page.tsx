export default function StudentDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-display font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="font-bold mb-2">Today's Classes</h2>
          <p className="text-sm text-gray-600">No classes scheduled for today.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="font-bold mb-2">Pending Assignments</h2>
          <p className="text-sm text-gray-600">You are all caught up!</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="font-bold mb-2">Next Test</h2>
          <p className="text-sm text-gray-600">Sunday Weekly Test</p>
        </div>
      </div>
    </div>
  )
}
