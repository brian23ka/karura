import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Karura SDA Secondary School</h1>
          <p>Nurturing Excellence, Building Character, Preparing for Eternity</p>
          <Link to="/admissions" className="cta-button">Apply Now</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🎓</div>
          <h3>Quality Education</h3>
          <p>Rigorous academic curriculum with experienced educators and modern teaching methods</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⛪</div>
          <h3>Spiritual Growth</h3>
          <p>Christian values and character development at the core of our educational mission</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏆</div>
          <h3>Excellence</h3>
          <p>Consistently excellent academic results and co-curricular achievements</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤝</div>
          <h3>Community</h3>
          <p>Strong school community with supportive staff, dedicated students, and engaged parents</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="about-text">
          <h2>About Our School</h2>
          <p>Karura SDA School is a premier institution serving Kenyan primary, junior, and senior learners, including Form 3 and Form 4. We are committed to developing well-rounded students through academic excellence, spiritual growth, and character building.</p>
          <Link to="/about" className="link-button">Learn More →</Link>
        </div>
        <div className="about-image">
          <img src="https://i.ytimg.com/vi/Q966_nSM7Wo/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGGUgVShFMA8=&rs=AOn4CLC3_1kpbhJaeVOjDXjtXMwke9B69Q" alt="Karura SDA School Campus" className="campus-image" />
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <div className="stat-box">
          <h3>1500+</h3>
          <p>Students</p>
        </div>
        <div className="stat-box">
          <h3>80+</h3>
          <p>Faculty Members</p>
        </div>
        <div className="stat-box">
          <h3>95%</h3>
          <p>Pass Rate</p>
        </div>
        <div className="stat-box">
          <h3>90+</h3>
          <p>Years of Excellence</p>
        </div>
      </section>

      {/* Programs */}
      <section className="programs">
        <h2>Academic Programs</h2>
        <div className="programs-grid">
          <div className="program-card">
            <h3>Primary & Junior School</h3>
            <p>Strong foundation in literacy, numeracy, and values for young learners.</p>
          </div>
          <div className="program-card">
            <h3>Senior School (CBC / 8-4-4)</h3>
            <p>Senior school programs aligned to the CBC pathway and Kenyan 8-4-4 system, with Form 3 and Form 4 preparation.</p>
          </div>
          <div className="program-card">
            <h3>Co-Curricular Activities</h3>
            <p>Sports, music, drama, and clubs enhancing all-round development.</p>
          </div>
        </div>
        <Link to="/academics" className="link-button center">Explore Academics →</Link>
      </section>
    </div>
  )
}

export default Home
