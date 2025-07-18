export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-purple-100">
          <span className="text-2xl">😵</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a
          href="/"
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-block"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
