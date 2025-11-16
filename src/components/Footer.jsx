export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-slate-900">NovaLab</p>
          <p className="text-slate-600 text-sm">Bold, data-driven marketing.</p>
        </div>
        <div className="text-slate-600 text-sm">© {new Date().getFullYear()} NovaLab. All rights reserved.</div>
        <div className="flex gap-4 text-slate-600">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
