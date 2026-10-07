
"use client";

export default function Home() {
  return (
    <main className="cv" id="top">
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-main">
            <p className="eyebrow">CURRICULUM VITAE</p>

            <h1>Ruslan Balatskyi</h1>

            <p className="position">Junior C# / .NET Developer</p>

            <p className="stack">
              C# · .NET · WPF · WinForms · ASP.NET Core · SQL
            </p>
          </div>

          <div className="contact">
            <a href="mailto:your.email@example.com">
              your.email@example.com
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <span>Gliwice, Poland</span>
          </div>
        </header>

        {/* Profile */}
        <section>
          <h2>Profile</h2>

          <p className="profile-text">
            Junior C# / .NET Developer and Informatics student at Silesian
            University of Technology. My main focus is C# and the .NET
            ecosystem, with practical experience in desktop applications,
            databases and web application development. I have worked with
            WPF, WinForms, ASP.NET Core, SQL and SignalR. I am currently
            developing my skills in backend development, Entity Framework
            Core, software architecture and clean code.
          </p>
        </section>

        {/* Technical Skills */}
        <section>
          <h2>Technical Skills</h2>

          <div className="skills">
            <div className="skill-group">
              <strong>Programming Languages</strong>
              <p>C#, C++, Python, Java</p>
            </div>

            <div className="skill-group">
              <strong>.NET & Desktop</strong>
              <p>.NET, WPF, WinForms, XAML</p>
            </div>

            <div className="skill-group">
              <strong>Backend & Web</strong>
              <p>ASP.NET Core, REST APIs, SignalR</p>
            </div>

            <div className="skill-group">
              <strong>Databases</strong>
              <p>SQL, MySQL, SQL Server</p>
            </div>

            <div className="skill-group">
              <strong>Tools</strong>
              <p>Git, GitHub, Visual Studio, VS Code</p>
            </div>

            <div className="skill-group">
              <strong>Currently Learning</strong>
              <p>
                Entity Framework Core, software architecture, clean code,
                Docker
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="section-heading">
            <div>
              <h2>Selected Projects</h2>

              <p className="section-description">
                Practical projects developed during university and personal
                development.
              </p>
            </div>
          </div>

          <div className="projects">
            {/* Messenger */}
            <article className="project">
              <div className="project-header">
                <div>
                  <h3>Messenger</h3>

                  <p className="project-type">
                    Full-stack real-time messaging application
                  </p>
                </div>

                <span className="project-tech">
                  C# · ASP.NET Core · React · SignalR
                </span>
              </div>

              <p className="project-description">
                Full-stack messenger application with real-time communication.
                The project includes chats, messages, chat requests, group
                invitations, member management and real-time updates using
                SignalR.
              </p>

              <ul>
                <li>Real-time communication with SignalR</li>
                <li>REST API backend built with ASP.NET Core</li>
                <li>React frontend with API integration</li>
                <li>Chat, group and member management</li>
              </ul>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </article>

            {/* StudenciForm */}
            <article className="project">
              <div className="project-header">
                <div>
                  <h3>StudenciForm</h3>

                  <p className="project-type">
                    Student management desktop application
                  </p>
                </div>

                <span className="project-tech">
                  C# · WinForms · JSON
                </span>
              </div>

              <p className="project-description">
                Desktop application for managing student information. The
                project focuses on object-oriented programming, form
                validation, data models and JSON serialization.
              </p>

              <ul>
                <li>Student and address data management</li>
                <li>GUID-based identifiers</li>
                <li>Input validation and business rules</li>
                <li>JSON data serialization</li>
              </ul>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </article>

            {/* QuizSolver */}
            <article className="project">
              <div className="project-header">
                <div>
                  <h3>QuizSolver</h3>

                  <p className="project-type">
                    WPF desktop application
                  </p>
                </div>

                <span className="project-tech">
                  C# · WPF · XAML
                </span>
              </div>

              <p className="project-description">
                Desktop application created with WPF, focusing on building a
                structured graphical interface and implementing application
                logic with C# and XAML.
              </p>

              <ul>
                <li>WPF user interface</li>
                <li>XAML-based layout</li>
                <li>C# application logic</li>
              </ul>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </article>

            {/* Database */}
            <article className="project">
              <div className="project-header">
                <div>
                  <h3>Database Application</h3>

                  <p className="project-type">
                    Relational database application
                  </p>
                </div>

                <span className="project-tech">
                  C# · SQL · MySQL
                </span>
              </div>

              <p className="project-description">
                Application working with a relational database, SQL queries
                and structured data presentation through a graphical user
                interface.
              </p>

              <ul>
                <li>SQL queries and data processing</li>
                <li>MySQL database integration</li>
                <li>Data presentation using DataGrid</li>
              </ul>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </article>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2>Education</h2>

          <div className="education">
            <div className="education-header">
              <div>
                <h3>Silesian University of Technology</h3>

                <p>Faculty of Applied Mathematics</p>
              </div>

              <span>2024 — Present</span>
            </div>

            <div className="education-details">
              <p>
                <strong>Informatics</strong> · practical profile
              </p>

              <p>
                Specialization: <strong>Cybersecurity</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2>Languages</h2>

          <div className="languages">
            <div>
              <strong>Ukrainian</strong>
              <span>Native</span>
            </div>

            <div>
              <strong>Russian</strong>
              <span>Native</span>
            </div>

            <div>
              <strong>Polish</strong>
              <span>B2</span>
            </div>

            <div>
              <strong>English</strong>
              <span>B1</span>
            </div>
          </div>
        </section>

        {/* Additional */}
        <section>
          <h2>Additional</h2>

          <div className="additional">
            <p>
              <strong>Career focus:</strong> C# / .NET development, backend
              applications and desktop software.
            </p>

            <p>
              <strong>Interests:</strong> software architecture, clean code,
              databases, cybersecurity and modern .NET technologies.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <span>© 2026 Ruslan Balatskyi</span>

          <div className="footer-links">
            <a href="#top">Back to top ↑</a>

            <a
              href="/Ruslan-Balatskyi-CV.pdf"
              download
              className="download-link"
            >
              Download CV ↓
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
