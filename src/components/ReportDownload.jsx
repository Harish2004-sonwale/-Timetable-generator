export default function ReportDownload({ onDownload }) {
  const handleClick = () => {
    if (onDownload) onDownload()
    else window.print()
  }
  return (
    <button onClick={handleClick} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
      Download PDF
    </button>
  )
}
