export default function TeacherDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-display font-bold mb-6">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="font-bold mb-2">Upcoming Classes</h2>
          <p className="text-sm text-gray-600">You have 2 classes today.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="font-bold mb-2">Pending Grading</h2>
          <p className="text-sm text-gray-600">15 assignments need review.</p>
        </div>
      </div>
    </div>
  )
}
