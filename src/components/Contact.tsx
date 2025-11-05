import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>
        {/* Cards Container - make cards identical and remove footer line */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          {/* Identical Card Styles */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between min-h-[410px]">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:saibharadwaj980@gmail.com"
                  className="flex items-start gap-2 p-2 rounded hover:bg-slate-50 transition"
                >
                  <div className="bg-blue-100 p-2 rounded flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-800 text-sm">Email</div>
                    <div className="text-slate-600 text-xs break-words">
                      saibharadwaj980@gmail.com
                    </div>
                  </div>
                </a>
                <a
                  href="tel:+917729034411"
                  className="flex items-start gap-2 p-2 rounded hover:bg-slate-50 transition"
                >
                  <div className="bg-blue-100 p-2 rounded flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-800 text-sm">Phone</div>
                    <div className="text-slate-600 text-xs break-words">
                      +91 7729034411
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-2 p-2 rounded">
                  <div className="bg-blue-100 p-2 rounded flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-800 text-sm">
                      Location
                    </div>
                    <div className="text-slate-600 text-xs break-words">
                      Hyderabad, Telangana - 500014, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Social icons in card footer area, spaced with 'mt-8' to match height */}
            <div className="mt-8">
              <h4 className="font-semibold text-slate-800 mb-2 text-sm">
                Connect with me
              </h4>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/sai-bharadwaj-b52431249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 bg-blue-100 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/saiadepu120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 bg-slate-100 text-slate-600 rounded hover:bg-slate-800 hover:text-white transition"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
          {/* Send a Message Card identical style/height */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between min-h-[410px]">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Send a Message
              </h3>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-2 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-2 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-2 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-2 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message..."
                    value={form.message}
                    onChange={handleInput}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition shadow flex items-center justify-center gap-2 font-medium text-sm"
                >
                  <Send size={16} />
                  Send Message
                </button>
                {status && (
                  <div className="py-1 text-xs text-center">{status}</div>
                )}
              </form>
            </div>
            {/* Empty div for spacing to match the social icons area in first card */}
            <div className="mt-8"></div>
          </div>
        </div>
        <div className="text-center py-8">
          <p className="text-slate-500 mt-2">
            © 2025 Sai Bharadwaj Adepu. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
