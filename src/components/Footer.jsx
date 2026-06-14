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
          <p><strong>Principal:</strong> 0721709458</p>
          <p><strong>Secondary:</strong> 0729 852 044</p>
          <p><strong>Junior:</strong> 0715 434 159</p>
          <p><strong>Primary:</strong> 0703 568 897</p>
          <p><strong>Address:</strong> Red Hill Road, Nairobi, Kenya</p>
          <p><strong>P.O. Box:</strong> 63445-00619 Muthaiga</p>
          <p><a href="https://share.google/UEGqwCn89Se7WQwh6" target="_blank" rel="noopener noreferrer" className="footer-link">📍 View on Google Maps</a></p>
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
