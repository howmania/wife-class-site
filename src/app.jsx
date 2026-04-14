export default function App() {
  const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "12px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    marginRight: "12px",
    marginTop: "12px",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#111827", background: "#ffffff" }}>
      <header
        style={{
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          background: "white",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "18px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <div style={{ fontSize: "22px", fontWeight: "700" }}>Korean & Excel Learning</div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>
              Online classes for language and practical skills
            </div>
          </div>

          <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#services" style={{ textDecoration: "none", color: "#374151" }}>Services</a>
            <a href="#about" style={{ textDecoration: "none", color: "#374151" }}>About</a>
            <a href="#contact" style={{ textDecoration: "none", color: "#374151" }}>Contact</a>
          </nav>
        </div>
      </header>

      <section style={sectionStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "6px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "999px",
                fontSize: "12px",
                color: "#4b5563",
                marginBottom: "16px",
              }}
            >
              Online Korean & Excel Lessons
            </div>

            <h1 style={{ fontSize: "46px", lineHeight: "1.15", marginBottom: "18px" }}>
              Learn Korean with confidence and build useful real-world skills.
            </h1>

            <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#4b5563" }}>
              We offer beginner-friendly online Korean classes and practical Excel lessons for
              students, professionals, and families. Lessons are simple, supportive, and designed
              for real progress.
            </p>

            <div style={{ marginTop: "24px" }}>
              <a
                href="#contact"
                style={{
                  ...buttonStyle,
                  background: "#111827",
                  color: "white",
                }}
              >
                Contact Us
              </a>

              <a
                href="#services"
                style={{
                  ...buttonStyle,
                  background: "#f3f4f6",
                  color: "#111827",
                }}
              >
                View Classes
              </a>
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: "24px", marginBottom: "18px" }}>What we offer</h3>
            <div style={{ display: "grid", gap: "14px" }}>
              <div style={{ background: "#f9fafb", padding: "16px", borderRadius: "12px" }}>
                <strong>1:1 Korean Lessons</strong>
                <div style={{ marginTop: "6px", color: "#4b5563" }}>
                  Personalized classes for beginners, travelers, and professionals.
                </div>
              </div>

              <div style={{ background: "#f9fafb", padding: "16px", borderRadius: "12px" }}>
                <strong>Group Korean Classes</strong>
                <div style={{ marginTop: "6px", color: "#4b5563" }}>
                  Friendly online lessons focused on real conversation and confidence.
                </div>
              </div>

              <div style={{ background: "#f9fafb", padding: "16px", borderRadius: "12px" }}>
                <strong>Excel Basics</strong>
                <div style={{ marginTop: "6px", color: "#4b5563" }}>
                  Learn formulas, spreadsheets, and practical office skills step by step.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ ...sectionStyle, background: "#f9fafb", maxWidth: "100%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "34px", marginBottom: "12px" }}>Programs</h2>
          <p style={{ color: "#4b5563", marginBottom: "30px", fontSize: "17px" }}>
            Flexible online learning options for different ages, goals, and experience levels.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={cardStyle}>Beginner Korean</div>
            <div style={cardStyle}>Conversational Korean</div>
            <div style={cardStyle}>Travel Korean</div>
            <div style={cardStyle}>Business Korean</div>
            <div style={cardStyle}>Kids Korean</div>
            <div style={cardStyle}>TOPIK Preparation</div>
            <div style={cardStyle}>Excel for Beginners</div>
            <div style={cardStyle}>Practical Excel for Work</div>
          </div>
        </div>
      </section>

      <section id="about" style={sectionStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "34px", marginBottom: "14px" }}>About the classes</h2>
            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#4b5563" }}>
              Our goal is to make learning approachable and practical. Whether you want to learn
              Korean for travel, family, work, or personal growth, or improve your Excel skills
              for school and work, classes are designed to be clear, patient, and useful.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginBottom: "14px" }}>Why students choose us</h3>
            <ul style={{ paddingLeft: "20px", lineHeight: "2", color: "#4b5563" }}>
              <li>Step-by-step lessons for beginners</li>
              <li>Friendly and supportive teaching style</li>
              <li>Flexible online scheduling</li>
              <li>Useful real-life skills</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: "#111827", color: "white" }}>
        <div style={sectionStyle}>
          <h2 style={{ fontSize: "34px", marginBottom: "14px" }}>Contact</h2>
          <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#d1d5db", maxWidth: "700px" }}>
            Ready to learn? Contact us for class availability, pricing, or a trial lesson.
            Replace the details below with your real email, Instagram, KakaoTalk, or booking link.
          </p>

          <div style={{ marginTop: "24px" }}>
            <a
              href="mailto:hello@example.com"
              style={{
                ...buttonStyle,
                background: "white",
                color: "#111827",
              }}
            >
              hello@example.com
            </a>

            <a
              href="#"
              style={{
                ...buttonStyle,
                background: "#1f2937",
                color: "white",
                border: "1px solid #374151",
              }}
            >
              Instagram
            </a>

            <a
              href="#"
              style={{
                ...buttonStyle,
                background: "#1f2937",
                color: "white",
                border: "1px solid #374151",
              }}
            >
              KakaoTalk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}