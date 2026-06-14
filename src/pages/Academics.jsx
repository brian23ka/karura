import './Academics.css'

function Academics() {
  return (
    <div className="academics-page">
      <div className="page-header">
        <h1>Academic Programs</h1>
        <p>Excellence Through Rigorous Curriculum</p>
      </div>

      <section className="content-section">
        <h2>Form 1 & 2 (Year 9 & 10)</h2>
        <p>
          These formative years establish strong academic foundations and develop critical 
          thinking skills. Students explore various subjects to discover their interests before 
          specializing in Form 3.
        </p>
        <h3>Subjects Offered:</h3>
        <div className="subjects-grid">
          <div className="subject">English</div>
          <div className="subject">Mathematics</div>
          <div className="subject">Sciences (Physics, Chemistry, Biology)</div>
          <div className="subject">Social Studies</div>
          <div className="subject">Languages</div>
          <div className="subject">Computer Science</div>
          <div className="subject">Physical Education</div>
          <div className="subject">Arts & Music</div>
        </div>
      </section>

      <section className="content-section">
        <h2>Form 3 & 4 (Year 11 & 12)</h2>
        <p>
          Students specialize in streams based on their abilities and interests. The curriculum 
          is designed to prepare them for the KCSE (Kenya Certificate of Secondary Education) 
          national examination and higher education.
        </p>
        <h3>Available Streams:</h3>
        <div className="streams-grid">
          <div className="stream-card">
            <h4>Science Stream</h4>
            <ul>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Mathematics</li>
            </ul>
          </div>
          <div className="stream-card">
            <h4>Commercial Stream</h4>
            <ul>
              <li>Accounting</li>
              <li>Economics</li>
              <li>Business Studies</li>
              <li>Mathematics</li>
            </ul>
          </div>
          <div className="stream-card">
            <h4>Humanities Stream</h4>
            <ul>
              <li>History</li>
              <li>Geography</li>
              <li>Literature</li>
              <li>Languages</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Teaching Methodology</h2>
        <ul className="methods-list">
          <li><strong>Student-Centered Learning:</strong> Active participation and critical thinking</li>
          <li><strong>Integrated Curriculum:</strong> Connecting subjects for deeper understanding</li>
          <li><strong>Technology-Enhanced:</strong> Interactive learning with modern tools</li>
          <li><strong>Practical Approaches:</strong> Hands-on laboratory and field work</li>
          <li><strong>Assessment for Learning:</strong> Continuous evaluation and feedback</li>
          <li><strong>Character Integration:</strong> Ethical values woven throughout curriculum</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Co-Curricular Activities</h2>
        <div className="activities-grid">
          <div className="activity-card">
            <h3>🎮 Sports</h3>
            <p>Football, volleyball, basketball, athletics, swimming, and more</p>
          </div>
          <div className="activity-card">
            <h3>🎵 Music & Arts</h3>
            <p>Band, choir, drama, painting, and creative expression</p>
          </div>
          <div className="activity-card">
            <h3>📚 Clubs</h3>
            <p>Debate, science club, environmental club, entrepreneurship</p>
          </div>
          <div className="activity-card">
            <h3>🛠️ Technical</h3>
            <p>Robotics, coding, and technology projects</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Academic Achievements</h2>
        <p>
          Our students consistently achieve excellent results in national examinations. 
          Many progress to leading universities in Kenya and internationally to pursue 
          degrees in medicine, engineering, law, and other professional fields.
        </p>
        <ul className="achievements-list">
          <li>95% average pass rate in KCSE examinations</li>
          <li>Multiple A-grade distinction students annually</li>
          <li>Several university scholarship recipients</li>
          <li>Winners in national academic competitions</li>
          <li>Strong performance in science and mathematics</li>
        </ul>
      </section>
    </div>
  )
}

export default Academics
