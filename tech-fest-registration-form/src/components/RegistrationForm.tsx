import { useState } from "react";
import { events } from "../data/events";
import type { FormData, FormErrors } from "../types";

interface Props {
  onSubmit: (data: FormData) => void;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  department: "",
  year: "",
  events: [],
  teamName: "",
  teamSize: "",
  tshirtSize: "",
  dietaryPreference: "",
  experience: "",
  accommodation: "",
  agreeTerms: false,
};

const nagpurColleges = [
  "VNIT Nagpur (Host)",
  "RCOEM (Ramdeobaba College of Engineering)",
  "GCOEN (Government College of Engineering, Nagpur)",
  "YCCE (Yeshwantrao Chavan College of Engineering)",
  "KDKCE (K.D.K. College of Engineering)",
  "GHRCE (G.H. Raisoni College of Engineering)",
  "Priyadarshini College of Engineering",
  "Tulsiramji Gaikwad-Patil College of Engineering",
  "PIET (Priyadarshini Institute of Engg. & Tech.)",
  "Shri Ramdeobaba College of Engineering",
  "Nagpur University (RTMNU)",
  "IIM Nagpur",
  "IISER Tirupati (Outstation)",
  "IIT Bombay (Outstation)",
  "NIT Warangal (Outstation)",
  "COEP Pune (Outstation)",
  "VJTI Mumbai (Outstation)",
  "Other (Enter in Department field)",
];

export default function RegistrationForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [step, setStep] = useState(1);

  const totalSteps = 3;

  const updateField = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const toggleEvent = (eventId: string) => {
    const current = formData.events;
    const updated = current.includes(eventId)
      ? current.filter((e) => e !== eventId)
      : [...current, eventId];
    updateField("events", updated);
  };

  const validateStep = (s: number): boolean => {
    const newErrors: FormErrors = {};

    if (s === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = "Enter a valid email address";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, "")))
        newErrors.phone = "Enter a valid 10-digit Indian mobile number";
      if (!formData.college.trim()) newErrors.college = "College name is required";
      if (!formData.department.trim()) newErrors.department = "Department is required";
      if (!formData.year) newErrors.year = "Year of study is required";
    }

    if (s === 2) {
      if (formData.events.length === 0) newErrors.events = "Select at least one event";
    }

    if (s === 3) {
      if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms & conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((s) => Math.min(s + 1, totalSteps));
    }
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      onSubmit(formData);
    }
  };

  const totalFee = formData.events.length * 299;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md"
    >
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step >= s
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30"
                    : "bg-white/10 text-gray-500"
                }`}
              >
                {step > s ? "✓" : s}
              </div>
              <span className="hidden sm:inline text-sm text-gray-400">
                {s === 1 ? "Personal Info" : s === 2 ? "Select Events" : "Confirm & Pay"}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5 mt-3">
          <div
            className="bg-gradient-to-r from-orange-500 to-red-600 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Personal Info */}
      {step === 1 && (
        <div className="space-y-5 animate-fadeIn">
          <h3 className="text-xl font-bold mb-1">👤 Personal Information</h3>
          <p className="text-gray-400 text-sm mb-4">Fill in your details. Use your college email if available.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              label="Full Name (as per College ID)"
              placeholder="e.g., Aarav Sharma"
              value={formData.fullName}
              onChange={(v) => updateField("fullName", v)}
              error={errors.fullName}
              required
            />
            <InputField
              label="Email Address"
              type="email"
              placeholder="e.g., aarav.sharma@vnit.ac.in"
              value={formData.email}
              onChange={(v) => updateField("email", v)}
              error={errors.email}
              required
            />
            <InputField
              label="Mobile Number"
              type="tel"
              placeholder="e.g., 9764083521"
              value={formData.phone}
              onChange={(v) => updateField("phone", v)}
              error={errors.phone}
              required
              prefix="+91"
            />
            <SelectField
              label="College / University"
              value={formData.college}
              onChange={(v) => updateField("college", v)}
              options={[
                { value: "", label: "Select your college" },
                ...nagpurColleges.map((c) => ({ value: c, label: c })),
              ]}
              error={errors.college}
              required
            />
            <SelectField
              label="Department / Branch"
              value={formData.department}
              onChange={(v) => updateField("department", v)}
              options={[
                { value: "", label: "Select department" },
                { value: "Computer Science & Engineering", label: "Computer Science & Engineering (CSE)" },
                { value: "Information Technology", label: "Information Technology (IT)" },
                { value: "Electronics & Communication", label: "Electronics & Communication (ECE)" },
                { value: "Electrical Engineering", label: "Electrical Engineering (EE)" },
                { value: "Mechanical Engineering", label: "Mechanical Engineering (ME)" },
                { value: "Civil Engineering", label: "Civil Engineering (CE)" },
                { value: "Chemical Engineering", label: "Chemical Engineering (CHE)" },
                { value: "Metallurgical Engineering", label: "Metallurgical & Materials Engg." },
                { value: "Mining Engineering", label: "Mining Engineering" },
                { value: "Architecture", label: "Architecture" },
                { value: "MCA", label: "MCA" },
                { value: "MBA", label: "MBA" },
                { value: "M.Tech", label: "M.Tech" },
                { value: "PhD", label: "PhD" },
                { value: "Other", label: "Other" },
              ]}
              error={errors.department}
              required
            />
            <SelectField
              label="Year of Study"
              value={formData.year}
              onChange={(v) => updateField("year", v)}
              options={[
                { value: "", label: "Select year" },
                { value: "1st Year (FE)", label: "1st Year (FE)" },
                { value: "2nd Year (SE)", label: "2nd Year (SE)" },
                { value: "3rd Year (TE)", label: "3rd Year (TE)" },
                { value: "4th Year (BE)", label: "4th Year (BE)" },
                { value: "5th Year", label: "5th Year (Integrated)" },
                { value: "PG 1st Year", label: "PG 1st Year" },
                { value: "PG 2nd Year", label: "PG 2nd Year" },
                { value: "PhD", label: "PhD Scholar" },
              ]}
              error={errors.year}
              required
            />
          </div>
        </div>
      )}

      {/* Step 2: Event Selection */}
      {step === 2 && (
        <div className="space-y-5 animate-fadeIn">
          <h3 className="text-xl font-bold mb-1">🎯 Select Events</h3>
          <p className="text-gray-400 text-sm mb-4">
            Choose the events you want to participate in. ₹299 per event per participant.
          </p>

          {errors.events && (
            <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              ⚠️ {errors.events}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {events.map((event) => {
              const selected = formData.events.includes(event.id);
              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => toggleEvent(event.id)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                    selected
                      ? "bg-orange-500/10 border-orange-500/40 ring-1 ring-orange-500/30"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{event.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-sm">{event.name}</div>
                      <div className="text-xs text-gray-400 truncate">{event.venue}</div>
                      <div className="text-xs text-green-400 font-medium mt-0.5">Prize: {event.prize}</div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        selected
                          ? "bg-orange-500 border-orange-500"
                          : "border-gray-500"
                      }`}
                    >
                      {selected && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {formData.events.length > 0 && (
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-3 flex items-center justify-between">
              <span className="text-sm text-orange-300">
                {formData.events.length} event{formData.events.length > 1 ? "s" : ""} selected
              </span>
              <span className="text-sm font-bold text-orange-300">
                Fee: ₹{totalFee}
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
            <InputField
              label="Team Name (if applicable)"
              placeholder="e.g., Code Crusaders"
              value={formData.teamName}
              onChange={(v) => updateField("teamName", v)}
            />
            <SelectField
              label="Team Size"
              value={formData.teamSize}
              onChange={(v) => updateField("teamSize", v)}
              options={[
                { value: "", label: "Select team size" },
                { value: "Individual", label: "Individual (Solo)" },
                { value: "2", label: "2 Members" },
                { value: "3", label: "3 Members" },
                { value: "4", label: "4 Members" },
                { value: "5", label: "5 Members" },
              ]}
            />
          </div>
        </div>
      )}

      {/* Step 3: Preferences & Confirm */}
      {step === 3 && (
        <div className="space-y-5 animate-fadeIn">
          <h3 className="text-xl font-bold mb-1">✅ Preferences & Confirmation</h3>
          <p className="text-gray-400 text-sm mb-4">Almost done! Just a few more details.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <SelectField
              label="T-Shirt Size (for event kit)"
              value={formData.tshirtSize}
              onChange={(v) => updateField("tshirtSize", v)}
              options={[
                { value: "", label: "Select size" },
                { value: "XS", label: "XS (34)" },
                { value: "S", label: "S (36)" },
                { value: "M", label: "M (38)" },
                { value: "L", label: "L (40)" },
                { value: "XL", label: "XL (42)" },
                { value: "XXL", label: "XXL (44)" },
              ]}
            />
            <SelectField
              label="Dietary Preference (for meals)"
              value={formData.dietaryPreference}
              onChange={(v) => updateField("dietaryPreference", v)}
              options={[
                { value: "", label: "Select preference" },
                { value: "Veg (Jain)", label: "Veg (Jain — no onion/garlic)" },
                { value: "Vegetarian", label: "Vegetarian" },
                { value: "Non-Vegetarian", label: "Non-Vegetarian" },
                { value: "Vegan", label: "Vegan" },
                { value: "No Preference", label: "No Preference" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <SelectField
              label="Technical Experience Level"
              value={formData.experience}
              onChange={(v) => updateField("experience", v)}
              options={[
                { value: "", label: "Select experience level" },
                { value: "Beginner", label: "Beginner — Just starting out" },
                { value: "Intermediate", label: "Intermediate — Some projects done" },
                { value: "Advanced", label: "Advanced — Experienced developer" },
                { value: "Expert", label: "Expert — Pro-level / competitive" },
              ]}
            />
            <SelectField
              label="Need Accommodation?"
              value={formData.accommodation}
              onChange={(v) => updateField("accommodation", v)}
              options={[
                { value: "", label: "Select option" },
                { value: "Not Required", label: "Not Required (Nagpur local)" },
                { value: "VNIT Hostel (₹200/night)", label: "VNIT Hostel — ₹200/night" },
                { value: "Nearby PG (₹500/night)", label: "Nearby PG — ₹500/night" },
                { value: "Will arrange own", label: "Will arrange on my own" },
              ]}
            />
          </div>

          {/* Summary */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 mt-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-4">📋 Registration Summary</h4>
            <div className="grid grid-cols-1 gap-2.5 text-sm">
              <SummaryRow label="Name" value={formData.fullName} />
              <SummaryRow label="Email" value={formData.email} />
              <SummaryRow label="Mobile" value={`+91 ${formData.phone}`} />
              <SummaryRow label="College" value={formData.college} />
              <SummaryRow label="Branch" value={`${formData.department} — ${formData.year}`} />
              <SummaryRow
                label="Events"
                value={
                  formData.events
                    .map((id) => events.find((e) => e.id === id)?.name)
                    .join(", ") || "None selected"
                }
              />
              {formData.teamName && <SummaryRow label="Team" value={`${formData.teamName} (${formData.teamSize || "N/A"})`} />}
              {formData.accommodation && <SummaryRow label="Stay" value={formData.accommodation} />}
              <div className="border-t border-white/10 pt-2 mt-1">
                <SummaryRow
                  label="Total Fee"
                  value={`₹${formData.events.length * 299} (${formData.events.length} event${formData.events.length > 1 ? "s" : ""} × ₹299)`}
                  highlight
                />
              </div>
            </div>
          </div>

          {/* Payment info */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-blue-300 mb-2">💳 Payment Information</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              After registration, you'll receive a confirmation email with UPI / bank transfer details. 
              Payment can be made via <span className="text-white">Google Pay / PhonePe / Paytm</span> to the official VNIT TechNova account. 
              Your spot is confirmed only after payment verification.
            </p>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="pt-0.5">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => updateField("agreeTerms", e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                  formData.agreeTerms
                    ? "bg-orange-500 border-orange-500"
                    : "border-gray-500 group-hover:border-gray-400"
                }`}
              >
                {formData.agreeTerms && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-gray-300 leading-relaxed">
              I agree to the{" "}
              <span className="text-orange-400 underline">terms and conditions</span> of TechNova 2025, VNIT Nagpur. 
              I confirm that the information provided is accurate and I will carry a valid college ID card 
              for on-site verification. I understand that registration fees are non-refundable and entry is 
              subject to availability.
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-red-400 text-sm">⚠️ {errors.agreeTerms}</p>
          )}
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
        {step > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-2.5 text-sm font-medium text-gray-300 bg-white/5 border border-white/15 rounded-xl hover:bg-white/10 transition-colors"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}

        {step < totalSteps ? (
          <button
            type="button"
            onClick={nextStep}
            className="px-8 py-2.5 text-sm font-semibold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-xl text-white shadow-lg shadow-orange-500/25 transition-all hover:scale-105"
          >
            Next Step →
          </button>
        ) : (
          <button
            type="submit"
            className="px-8 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl text-white shadow-lg shadow-green-500/25 transition-all hover:scale-105"
          >
            🎉 Submit Registration
          </button>
        )}
      </div>
    </form>
  );
}

// Summary row helper
function SummaryRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-gray-500 text-sm min-w-[70px] shrink-0">{label}:</span>
      <span className={`text-sm ${highlight ? "text-orange-400 font-bold" : "text-white"}`}>{value}</span>
    </div>
  );
}

// Reusable Input Field
function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
  prefix,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  required?: boolean;
  prefix?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium">
            {prefix}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full ${prefix ? "pl-12" : "pl-4"} pr-4 py-2.5 bg-white/5 border rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all ${
            error ? "border-red-500/50 ring-1 ring-red-500/30" : "border-white/10"
          }`}
        />
      </div>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

// Reusable Select Field
function SelectField({
  label,
  value,
  onChange,
  options,
  error,
  required,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2.5 bg-white/5 border rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all appearance-none cursor-pointer ${
          error ? "border-red-500/50 ring-1 ring-red-500/30" : "border-white/10"
        } ${!value ? "text-gray-500" : ""}`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-gray-900 text-white">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
