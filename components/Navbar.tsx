export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div>
          <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700">
            🌙
          </button>
        </div>
      </div>
    </nav>
  );
}
