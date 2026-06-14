import './About.css'

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Karura SDA Secondary School</h1>
        <p>Our History, Mission, and Values</p>
      </div>

      <section className="content-section">
        <h2>Our Mission</h2>
        <p>
          To provide quality Seventh-day Adventist education that develops spiritually mature, 
          academically excellent, and socially responsible individuals prepared to serve their 
          communities and fulfill their God-given potential.
        </p>
      </section>

      <section className="content-section">
        <h2>Our Vision</h2>
        <p>
          To be a center of excellence in Christian education, nurturing leaders of integrity 
          who make positive differences in the world through faith, knowledge, and service.
        </p>
      </section>

      <section className="content-section">
        <h2>School Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Faith</h3>
            <p>Grounded in biblical principles and Christian values</p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>Commitment to academic and personal excellence</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>Honest, ethical conduct in all dealings</p>
          </div>
          <div className="value-card">
            <h3>Service</h3>
            <p>Dedicated to serving others and community</p>
          </div>
          <div className="value-card">
            <h3>Respect</h3>
            <p>Valuing diversity and respecting all individuals</p>
          </div>
          <div className="value-card">
            <h3>Growth</h3>
            <p>Continuous personal and academic development</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>History</h2>
        <p>
          Founded in 1930, Karura SDA School has grown into a respected educational institution 
          serving Kenyan primary, junior, and senior school students, including Form 3 and Form 4. 
          Our commitment to academic excellence combined with Christian values has enabled us to 
          produce graduates who excel in national examinations and contribute meaningfully to society. 
          For more than nine decades, we have maintained our dedication to holistic education that 
          develops the whole person - intellectually, spiritually, physically, and socially.
        </p>
      </section>

      <section className="content-section">
        <h2>Facilities</h2>
        <ul className="facilities-list">
          <li>Modern classrooms with audio-visual equipment</li>
          <li>Well-equipped science laboratories</li>
          <li>Computer lab with internet connectivity</li>
          <li>Library with extensive collection</li>
          <li>Sports complex with multiple facilities</li>
          <li>Spacious dormitories with amenities</li>
          <li>Cafeteria with nutritious meal plans</li>
          <li>Chapel for spiritual activities</li>
        </ul>
      </section>
    </div>
  )
}

export default About
