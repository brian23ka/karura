import './Admissions.css'

function Admissions() {
  return (
    <div className="admissions-page">
      <div className="page-header">
        <h1>Admissions</h1>
        <p>Join Our School Community</p>
      </div>

      <section className="content-section">
        <h2>Application Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Request Prospectus</h3>
            <p>Download or request our school prospectus with detailed information</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Complete Application</h3>
            <p>Fill out the application form with personal and academic information</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Entrance Exam</h3>
            <p>Take the entrance examination in Mathematics, English, and Reasoning</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Interview</h3>
            <p>Participate in a personal interview with school administrators</p>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <h3>Admission Decision</h3>
            <p>Receive admission decision and enrollment documentation</p>
          </div>
          <div className="step">
            <div className="step-number">6</div>
            <h3>Enrollment</h3>
            <p>Complete enrollment and preparation for the new academic year</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Admission Requirements</h2>
        <h3>Form 1 Entry</h3>
        <ul className="requirements-list">
          <li>Birth certificate (Original or certified copy)</li>
          <li>Primary school leaving certificate or equivalent</li>
          <li>End of Year 6 school reports for last two years</li>
          <li>Medical report and health records</li>
          <li>Character reference from primary school</li>
          <li>Passport size photographs (4 copies)</li>
          <li>Completed application form</li>
        </ul>

        <h3>Form 3 Entry</h3>
        <ul className="requirements-list">
          <li>KCPE (Kenya Certificate of Primary Education) certificate</li>
          <li>Form 1 & 2 academic reports</li>
          <li>Character references</li>
          <li>Medical examination results</li>
          <li>Application form and supporting documents</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Tuition and Fees</h2>
        <p>For current fee structure, please contact the school office:</p>
        <div className="fees-contact">
          <p><strong>Email:</strong> karura2011@yahoo.com</p>
          <p><strong>Phone:</strong> +254-XXX-XXX-XXX</p>
          <p><strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 4:00 PM</p>
        </div>
        <p className="note">
          Financial assistance and scholarships are available for qualified students based on 
          academic merit and financial need. Contact the office for more information.
        </p>
      </section>

      <section className="content-section">
        <h2>Important Dates</h2>
        <div className="dates-table">
          <div className="date-item">
            <span className="label">Application Deadline:</span>
            <span className="date">August 31, 2026</span>
          </div>
          <div className="date-item">
            <span className="label">Entrance Exams:</span>
            <span className="date">September 12-13, 2026</span>
          </div>
          <div className="date-item">
            <span className="label">Interviews:</span>
            <span className="date">September 19-20, 2026</span>
          </div>
          <div className="date-item">
            <span className="label">Admission Results:</span>
            <span className="date">September 30, 2026</span>
          </div>
          <div className="date-item">
            <span className="label">School Opening:</span>
            <span className="date">January 13, 2027</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Welcome to Our School Family</h2>
        <p>
          We look forward to welcoming motivated students who are ready to embrace academic 
          excellence, character development, and spiritual growth. Karura SDA Secondary School 
          provides an environment where every student can discover their potential and prepare 
          for a meaningful future.
        </p>
      </section>
    </div>
  )
}

export default Admissions
