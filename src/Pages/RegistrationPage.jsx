import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Trophy,
  Loader2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

/* ---------- BUTTON ---------- */
const SlashButton = ({ children, disabled, type = "button", className = "" }) => (
  <button
    type={type}
    disabled={disabled}
    className={`w-full inline-flex items-center justify-center px-6 sm:px-8 py-4 font-black italic uppercase tracking-widest text-white transition-all duration-200 
    bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed
    md:-skew-x-12 ${className}`}
  >
    <span className="md:skew-x-12 flex items-center gap-2">{children}</span>
  </button>
);

/* ---------- INPUT ---------- */
const SlashInput = ({ icon: Icon, label, ...props }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="mb-6">
      <label
        className={`block text-xs font-bold uppercase tracking-widest mb-2 ${
          focus ? "text-red-500" : "text-slate-500"
        }`}
      >
        {label}
      </label>

      <div
        className={`bg-slate-900 border-2 transition-colors
        ${focus ? "border-red-600" : "border-slate-800"}
        md:-skew-x-12`}
      >
        <div className="flex items-center md:skew-x-12">
          <div className="pl-4 text-slate-500">
            <Icon size={18} className={focus ? "text-red-500" : ""} />
          </div>

          <input
            {...props}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className="w-full bg-transparent outline-none text-white font-bold px-4 py-3 placeholder:text-slate-600"
          />
        </div>
      </div>
    </div>
  );
};

/* ---------- MAIN ---------- */
export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScoVH7CrLZPpca5n9t6ndFSPPVfTDRCfatX2iJGC5HL_wSt4Q/formResponse";

  const ENTRY_IDS = {
    name: "entry.61211740",
    email: "entry.278487004",
    phone: "entry.1119921548",
    sport: "entry.1764623773",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sport: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    Object.entries(ENTRY_IDS).forEach(([k, v]) =>
      data.append(v, formData[k])
    );

    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    });

    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  /* ---------- SUCCESS ---------- */
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-900 border-l-4 border-green-500 p-10 max-w-md text-center shadow-2xl"
        >
          <CheckCircle size={48} className="mx-auto text-green-500 mb-6" />
          <h2 className="text-3xl font-black italic text-white mb-2">
            You're In
          </h2>
          <p className="text-slate-400 mb-6">
            Check your email for mission details.
          </p>
          <SlashButton className="bg-green-600 hover:bg-green-700">
            Join Squad Chat
          </SlashButton>
        </motion.div>
      </div>
    );
  }

  /* ---------- FORM ---------- */
  return (
    <section
      id="register"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black italic text-white mb-6">
               
              <span className="text-red-600">REGISTRATION</span>
            </h1>

            <p className="text-slate-400 max-w-xl mx-auto lg:mx-0">
              Secure your place. Only the fastest operatives qualify.
            </p>

            <div className="mt-8 bg-slate-900 border border-slate-800 p-6">
              <h3 className="text-xl font-black italic text-white mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <Trophy className="text-red-600" /> League Benefits
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>Official Rankings</li>
                <li>Pro Equipment Access</li>
                <li>Prize Pool Eligibility</li>
                <li>Team Scouting</li>
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-black border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <form onSubmit={handleSubmit}>
              <SlashInput
                icon={User}
                label="Full Name"
                name="name"
                placeholder="ENTER FULL NAME"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <SlashInput
                icon={Mail}
                label="Email"
                name="email"
                type="email"
                placeholder="USER@MAIL.COM"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <SlashInput
                icon={Phone}
                label="Phone"
                name="phone"
                placeholder="+91 xxxxxxxxxx"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">
                  Sport
                </label>
                <select
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900 border-2 border-slate-800 px-4 py-3 text-white font-bold"
                >
                  <option value="" disabled>
                    Select Sport
                  </option>
                  <option>Hit and Run</option>
                   
                </select>
              </div>

              <SlashButton disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Processing
                  </>
                ) : (
                  <>
                    Confirm Registration <ArrowRight size={18} />
                  </>
                )}
              </SlashButton>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
