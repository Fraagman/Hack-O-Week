import { events } from "../data/events";
import type { FormData } from "../types";

interface Props {
  data: FormData;
  onReset: () => void;
}

export default function SuccessScreen({ data, onReset }: Props) {
  const registrationId = `TN25-${Math.random().toString(36).substring(2, 4).toUpperCase()}${Date.now().toString().slice(-4)}`;
  const totalFee = data.events.length * 299;

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success animation */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 animate-bounce">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Registration{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Successful!
          </span>
        </h2>
        <p className="text-gray-400 mb-2 max-w-md mx-auto">
          You're all set for TechNova 2025 at VNIT Nagpur!
        </p>
        <p className="text-gray-500 text-sm mb-8">
          A confirmation email has been sent to{" "}
          <span className="text-orange-400 font-medium">{data.email}</span>
        </p>

        {/* Registration Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left backdrop-blur-md mb-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Registration ID</div>
              <div className="text-xl font-mono font-bold text-orange-400">{registrationId}</div>
            </div>
            <div className="px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium">
              ✓ Confirmed
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <InfoRow label="Name" value={data.fullName} />
            <InfoRow label="Email" value={data.email} />
            <InfoRow label="Mobile" value={`+91 ${data.phone.slice(0, 5)} ${data.phone.slice(5)}`} />
            <InfoRow label="College" value={data.college} />
            <InfoRow label="Branch" value={`${data.department} — ${data.year}`} />
            <div className="border-t border-white/5 pt-2" />
            <InfoRow
              label="Events"
              value={
                data.events
                  .map((id) => {
                    const ev = events.find((e) => e.id === id);
                    return ev ? `${ev.icon} ${ev.name}` : id;
                  })
                  .join("  •  ") || "None"
              }
            />
            {data.teamName && (
              <InfoRow label="Team" value={`${data.teamName} (${data.teamSize || "N/A"} members)`} />
            )}
            {data.tshirtSize && <InfoRow label="T-Shirt" value={data.tshirtSize} />}
            {data.dietaryPreference && <InfoRow label="Diet" value={data.dietaryPreference} />}
            {data.experience && <InfoRow label="Level" value={data.experience} />}
            {data.accommodation && <InfoRow label="Stay" value={data.accommodation} />}
            <div className="border-t border-white/5 pt-2" />
            <div className="flex items-start gap-3">
              <span className="text-gray-500 text-sm min-w-[85px] shrink-0">Total Fee:</span>
              <span className="text-orange-400 text-sm font-bold">
                ₹{totalFee} ({data.events.length} event{data.events.length > 1 ? "s" : ""} × ₹299)
              </span>
            </div>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5 text-left mb-6">
          <h4 className="font-semibold text-orange-300 mb-3">💳 Payment Details</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <p>Pay <span className="text-white font-bold">₹{totalFee}</span> via UPI to complete your registration:</p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 mt-2 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-gray-500">UPI ID:</span>
                <span className="text-white font-mono text-xs">technova.vnit@sbi</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Account Name:</span>
                <span className="text-white text-xs">VNIT TechNova Committee</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Bank:</span>
                <span className="text-white text-xs">SBI, VNIT Branch (Nagpur)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">A/C No:</span>
                <span className="text-white font-mono text-xs">39276410582</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">IFSC:</span>
                <span className="text-white font-mono text-xs">SBIN0004381</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              After payment, send the screenshot to <span className="text-orange-400">+91 97640 83521</span> (WhatsApp) 
              with your Registration ID: <span className="text-white font-mono">{registrationId}</span>
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button
            onClick={onReset}
            className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-xl font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
          >
            Register Another Participant
          </button>
        </div>

        {/* Important Info */}
        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 text-left mb-6">
          <h4 className="font-semibold text-indigo-300 mb-3">📌 Important Information</h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">•</span>
              <span>Carry your <span className="text-white">valid college ID card</span> for verification at the VNIT main gate. Entry without ID will not be permitted.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">•</span>
              <span>Report at the <span className="text-white">Registration Desk, Convocation Hall</span> by <span className="text-white">8:30 AM</span> on your event day.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">•</span>
              <span>Nearest Railway Station: <span className="text-white">Nagpur Junction (NGP)</span> — 7 km from VNIT. Auto fare ≈ ₹80-100.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">•</span>
              <span>Nearest Airport: <span className="text-white">Dr. Babasaheb Ambedkar International Airport (NAG)</span> — 9 km. Cab fare ≈ ₹200-250.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">•</span>
              <span>Join our <span className="text-white">WhatsApp group</span> for live updates — link shared in the confirmation email.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">•</span>
              <span>
                For queries, contact: <br />
                📱 Aarav (Coordinator): <span className="text-white">+91 97640 83521</span><br />
                📱 Sneha (Events Head): <span className="text-white">+91 88057 24163</span><br />
                📱 Rohit (Logistics): <span className="text-white">+91 70208 39456</span><br />
                📧 Email: <span className="text-white">technova@vnit.ac.in</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Nearby Hotels */}
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-5 text-left">
          <h4 className="font-semibold text-purple-300 mb-3">🏨 Nearby Stay Options (for outstation participants)</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span><span className="text-white">VNIT Guest House</span> — Inside campus (₹200/night, limited rooms)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span><span className="text-white">Hotel Centre Point</span> — Ramdaspeth, 3 km (₹2,500+/night)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span><span className="text-white">Hotel Pride</span> — Wardha Road, 5 km (₹1,800+/night)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">•</span>
              <span><span className="text-white">OYO Rooms</span> — Multiple near Ambazari (₹800+/night)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-gray-500 text-sm min-w-[85px] shrink-0">{label}:</span>
      <span className="text-white text-sm">{value}</span>
    </div>
  );
}
