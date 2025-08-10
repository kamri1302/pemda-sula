// Ikon SVG inline, ringan dan bergaya Tailwind

export function ComputerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-green-600 mb-4 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17h4.5M3 6h18M3 6v12a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 18V6" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-green-600 mb-4 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {/* Lingkaran globe */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Garis vertikal (meridian) */}
      <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
      
      {/* Garis horizontal (equator) */}
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
      
      {/* Garis diagonal kiri atas ke kanan bawah */}
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
      
      {/* Garis diagonal kiri bawah ke kanan atas */}
      <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeWidth="2" />
      
      {/* Node kecil di tengah */}
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function HandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-green-600 mb-4 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14v-4M9 14v-2M15 14v-6M7 20h10a1 1 0 001-1v-7a1 1 0 00-1-1h-1.586a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 0010 7H7a1 1 0 00-1 1v9a1 1 0 001 1z"
      />
    </svg>
  );
}

export function FishIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-green-600 mb-4 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12c0-1.105-.895-2-2-2H8a2 2 0 000 4h8c1.105 0 2-1.343 2-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12c0-3.866 3.582-7 8-7v14c-4.418 0-8-3.134-8-7z" />
    </svg>
  );
}

export function IdCardIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
      <circle cx="8.5" cy="10.5" r="1.5" />
      <path d="M17 8h-6v8h6" />
    </svg>
  );
}

export function BirthCertificateIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L7 7v10l5 5 5-5V7l-5-5z" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  );
}

export function WeddingRingIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14l4-4 4 4" />
    </svg>
  );
}

export function DriverLicenseIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
      <line x1="7" y1="8" x2="17" y2="8" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <line x1="7" y1="16" x2="13" y2="16" />
    </svg>
  );
}

export function TaxIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h16" />
      <path d="M4 6h16" />
      <path d="M4 18h16" />
    </svg>
  );
}
