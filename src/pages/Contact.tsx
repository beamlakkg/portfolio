import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name}\n${formData.email}`);
    window.location.href = `mailto:beamlakkg@gmail.com?subject=${subject}&body=${body}`;
    setSubmitStatus({
      success: true,
      message: 'Your email app should open with this message. If it does not, write directly to beamlakkg@gmail.com.',
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.1),_transparent_40%)]" />
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-400">Contact</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">Get in touch</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Software engineering graduate. If you have a product or a role in mind, write to me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="mb-8 rounded-[28px] border border-white/20 bg-white/70 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/60">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-600 dark:text-blue-400 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <address className="text-gray-600 dark:text-gray-400 not-italic">
                      Addis Ababa, AA<br />
                      Ethiopia
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 dark:text-blue-400 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:beamlakkg@gmail.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      beamlakkg@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 dark:text-blue-400 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a 
                      href="tel:+14155552671" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +2 (519) 0004-3984
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 dark:text-blue-400 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 8AM - 6PM<br />
                      Weekend: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-[28px] border border-white/20 bg-white/70 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/60">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Follow Me</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connect with me on social media or check out my code repositories.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/beamlakkg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/beamlak-kagnew-48994b297" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/beamlakkg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="rounded-[28px] border border-white/20 bg-white/70 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/60">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send Me a Message</h3>
            
            {submitStatus && (
              <div 
                className={`mb-6 p-4 rounded-md ${
                  submitStatus.success ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 text-slate-800 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    placeholder="Beamlak Kagnew"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 text-slate-800 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    placeholder="beamlakkg@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 text-slate-800 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  <option value="">Select a subject</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Project Proposal">Project Proposal</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 text-slate-800 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-600 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-300"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;