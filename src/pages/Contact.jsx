import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in Touch with Karura SDA Secondary School</p>
      </div>

      <div className="contact-container">
        <section className="contact-info">
          <h2>Contact Information</h2>
          
          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Karura, Nairobi</p>
            <p>Kenya</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>Main Line: +254-XXX-XXX-XXX</p>
            <p>Admissions: +254-XXX-XXX-XXX</p>
            <p>Fax: +254-XXX-XXX-XXX</p>
          </div>

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>General: info@karurasda.edu</p>
            <p>Admissions: admissions@karurasda.edu</p>
            <p>Principal: principal@karurasda.edu</p>
          </div>

          <div className="info-card">
            <h3>🕐 Office Hours</h3>
            <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="departments">
            <h3>Department Contacts</h3>
            <ul>
              <li><strong>Academic:</strong> academic@karurasda.edu</li>
              <li><strong>Admissions:</strong> admissions@karurasda.edu</li>
              <li><strong>Student Support:</strong> support@karurasda.edu</li>
              <li><strong>Finance:</strong> finance@karurasda.edu</li>
            </ul>
          </div>
        </section>

        <section className="contact-form-section">
          <h2>Send us a Message</h2>
          
          {submitted && (
            <div className="success-message">
              ✓ Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="admissions">Admissions Inquiry</option>
                <option value="academic">Academic Questions</option>
                <option value="fees">Fee Payment</option>
                <option value="event">Event Inquiry</option>
                <option value="general">General Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Please provide details about your inquiry..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>
      </div>

      <section className="location-section">
        <h2>Visit Us</h2>
        <p>We are located in the Karura area of Nairobi. Feel free to visit our campus during office hours.</p>
        <div className="map-placeholder">
          📍 Map Location - Karura, Nairobi, Kenya
        </div>
      </section>
    </div>
  )
}

export default Contact
