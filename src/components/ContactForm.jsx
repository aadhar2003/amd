import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm({ className }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validate = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Configure EmailJS with your service ID, template ID, and public key
    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_muzbkof';
    const templateId = 'template_q8hbtyt';
    const publicKey = 'zE1pUNH1JRJ9ydlYF';
    
    // Prepare the template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message
    };
    
    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setIsSubmitting(false);
        setSubmitError('Failed to send your message. Please try again later.');
      });
  };

  return (
    <section id="contact" className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Have questions about our products or need a custom solution? Get in touch with our team.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                Thank you for your message! We'll get back to you shortly.
              </div>
            )}
            
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                {submitError}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {formErrors.message && <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit Message'}
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Office Address</h4>
                  <p className="mt-1 text-gray-600">62, Lite IPPT Zoned, Sector-8, Noiad, Rashuli, Mathura, 281001, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <p className="mt-1 text-gray-600">+91-9557667788</p>
                  <p className="text-gray-600">+91-9557667789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="mt-1 text-gray-600">info@colortechsolutions.com</p>
                  <p className="text-gray-600">sales@colortechsolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Business Hours</h4>
                  <p className="mt-1 text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
            
                     </div>
        </div>
      </div>
    </section>
  );
}