import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Karura SDA Secondary School</h3>
          <p>Excellence in Education, Seventh-day Adventist Values</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/admissions">Admissions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: info@karurasda.edu</p>
          <p>Phone: +254-XXX-XXX-XXX</p>
          <p>Location: Karura, Kenya</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Karura SDA Secondary School. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
