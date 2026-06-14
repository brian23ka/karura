import './Staff.css'

function Staff() {
  const staffMembers = [
    {
      name: "Dr. Samuel Kipchoge",
      position: "Principal",
      department: "Administration",
      email: "principal@karurasda.edu"
    },
    {
      name: "Mrs. Jane Wanjiru",
      position: "Deputy Principal (Academic)",
      department: "Administration",
      email: "deputies@karurasda.edu"
    },
    {
      name: "Mr. David Omondi",
      position: "Head of Science",
      department: "Science",
      email: "science@karurasda.edu"
    },
    {
      name: "Miss Emily Kariuki",
      position: "Head of Languages",
      department: "Languages",
      email: "languages@karurasda.edu"
    },
    {
      name: "Mr. Joseph Kipkoech",
      position: "Head of Mathematics",
      department: "Mathematics",
      email: "mathematics@karurasda.edu"
    },
    {
      name: "Dr. Margaret Kimani",
      position: "Head of Social Sciences",
      department: "Social Sciences",
      email: "social@karurasda.edu"
    },
    {
      name: "Mr. Peter Njoroge",
      position: "Sports Director",
      department: "Co-Curricular",
      email: "sports@karurasda.edu"
    },
    {
      name: "Mrs. Faith Kiplagat",
      position: "Counselor",
      department: "Student Support",
      email: "counseling@karurasda.edu"
    }
  ]

  return (
    <div className="staff-page">
      <div className="page-header">
        <h1>Our Staff</h1>
        <p>Meet Our Dedicated Educators</p>
      </div>

      <section className="content-section">
        <p>
          Our faculty consists of highly qualified, experienced educators committed to student 
          success. With advanced degrees and specialized training, our teachers create engaging 
          learning environments that inspire excellence and character development.
        </p>
      </section>

      <section className="staff-grid">
        {staffMembers.map((member, index) => (
          <div key={index} className="staff-card">
            <div className="staff-avatar">👤</div>
            <h3>{member.name}</h3>
            <p className="position">{member.position}</p>
            <p className="department">{member.department}</p>
            <p className="email">
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </p>
          </div>
        ))}
      </section>

      <section className="content-section">
        <h2>Professional Development</h2>
        <p>
          Our staff engages in continuous professional development through:
        </p>
        <ul className="development-list">
          <li>Regular teacher training workshops and seminars</li>
          <li>International educational conferences and exchanges</li>
          <li>Subject-specific curriculum development</li>
          <li>Technology and pedagogical innovation training</li>
          <li>Mentoring and peer collaboration programs</li>
          <li>Advanced degree pursuits in educational leadership</li>
        </ul>
      </section>
    </div>
  )
}

export default Staff
