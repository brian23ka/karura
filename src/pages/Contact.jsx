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
            <h3>📍 Physical Address</h3>
            <p>Red Hill Road</p>
            <p>Nairobi, Kenya</p>
          </div>

          <div className="info-card">
            <h3>📮 Postal Address</h3>
            <p>P.O. Box 63445-00619</p>
            <p>Muthaiga, Nairobi, Kenya</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone Numbers</h3>
            <p><strong>Principal's Office:</strong> 0721709458</p>
            <p><strong>Secondary Sch. Division:</strong> 0729 852 044</p>
            <p><strong>Junior Sch. Division:</strong> 0715 434 159</p>
            <p><strong>Primary Sch. Division:</strong> 0703 568 897</p>
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
        <p>Located on Red Hill Road in Nairobi, our campus welcomes visitors during office hours. Find us on the map below.</p>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8237883462326!2d36.77838!3d-1.32089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKarura%20SDA%20School!5e0!3m2!1sen!2ske!4v1623456789" 
            width="100%" 
            height="450" 
            style={{border: 0, borderRadius: '8px'}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact
