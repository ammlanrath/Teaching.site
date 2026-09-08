export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-display font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="font-bold mb-2">Total Students</h2>
          <p className="text-sm text-gray-600">150 Active</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="font-bold mb-2">MRR</h2>
          <p className="text-sm text-gray-600">₹2,25,000</p>
        </div>
      </div>
    </div>
  )
}
