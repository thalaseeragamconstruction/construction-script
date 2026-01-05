import { useRef, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await emailjs.sendForm(
        'service22091999ms@#',     // EmailJS dashboard serviceid 
               'template_tp28mg8',          // 'YOUR_TEMPLATE_ID',     // EmailJS dashboard  
        form.current,
             'bu0OlvLEJazho9YqX'          // 'YOUR_PUBLIC_KEY'       // EmailJS dashboard
      );
      setMessage('Thank you! Our engineers will contact you within 24 hours.');
      form.current.reset();
    } catch (error) {
      setMessage('Failed to send. Please try again.');
    }
    setLoading(false);
  };

  return (
    <form ref={form} className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl" onSubmit={sendEmail}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
          <input required name="from_fname" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600" />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
          <input required name="from_lname" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600" />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
            <Mail className="h-4 w-4 text-slate-500" />
            Email
          </label>
          <input required name="from_email" type="email" placeholder="your@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600" />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
            <Phone className="h-4 w-4 text-slate-500" />
            Phone Number
          </label>
          <input required name="phone" type="tel" placeholder="+91-629702332" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600" />
        </div>
      </div>
      <div className="mb-8">
        <label className="block text-sm font-bold text-slate-700 mb-2">Project Brief</label>
        <textarea required name="project_brief" rows={4} placeholder="Describe your project goals..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"></textarea>
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-600/20"
      >
        {loading ? 'Sending...' : 'Send Inquiry'}
      </button>
      {message && (
        <div className={`mt-4 p-4 rounded-xl text-center font-medium ${message.includes('Thank') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
