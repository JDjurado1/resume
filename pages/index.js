import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Daniel D. Jurado - Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.resumeContainer}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h1 className={styles.name}>James Daniel D. Jurado</h1>
            <p className={styles.contactInfo}>Email: jddjurado.student@ua.edu.ph</p>
            <p className={styles.contactInfo}>Phone: 09773779186</p>

            <h2 className={styles.sectionTitle}>Technical Skills</h2>
            <ul className={styles.skillsList}>
              <li>Programming: Java (Basic), Python (Basic)</li>
              <li>Web Development: HTML, CSS</li>
              <li>Operating Systems: Windows, Linux (Basic)</li>
            </ul>

            <h2 className={styles.sectionTitle}>Soft Skills</h2>
            <ul className={styles.skillsList}>
              <li>Communication: Clear and concise written and verbal communication</li>
              <li>Teamwork: Ability to collaborate effectively in a team environment</li>
              <li>Problem-solving: Strong analytical and problem-solving skills</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <h2 className={styles.sectionTitle}>Objective</h2>
            <p className={styles.objectiveText}>IT Student with a strong foundation in computer programming and network administration. Seeking a Web Development Internship to gain practical experience and contribute to building user-friendly websites.</p>

            <h2 className={styles.sectionTitle}>Education</h2>
            <p className={styles.educationInfo}><strong>Bachelor of Science in Information Technology (Expected May 2025)</strong></p>
            <p className={styles.educationInfo}>University of the Assumption (UA), San Fernando, Pampanga, Philippines</p>
            <p className={styles.courseworkTitle}><strong>Relevant Coursework:</strong></p>
            <ul className={styles.courseworkList}>
              <li>Programming Languages (Java, Python)</li>
              <li>Web Development (HTML, CSS, JavaScript)</li>
              <li>Database Management Systems</li>
              <li>Network Administration</li>
            </ul>

            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.jobTitle}><strong>IT Assistant (Volunteer)</strong></p>
            <ul className={styles.experienceList}>
              <li>Assisted staff with basic computer troubleshooting and software installation.</li>
              <li>Maintained inventory of IT equipment and supplies.</li>
              <li>Provided technical support to students and faculty.</li>
            </ul>

            <h2 className={styles.sectionTitle}>Projects or Certifications</h2>
            <p className={styles.projectInfo}>Developed a personal website using HTML, CSS, and JavaScript.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by{' '}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            Vercel
          </a>
        </p>
      </footer>

      <style jsx>{`
        .resumeContainer {
          display: flex;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .leftColumn {
          flex: 1;
          padding-right: 2rem;
          background-color: #f0f4f8;
          padding: 2rem;
          border-radius: 10px;
        }
        .rightColumn {
          flex: 2;
          padding-left: 2rem;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #2c3e50;
        }
        h2 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: #2980b9;
        }
        p {
          margin-bottom: 0.75rem;
          font-size: 1rem;
          line-height: 1.7;
          color: #34495e;
        }
        ul {
          margin-bottom: 1.5rem;
        }
        ul li {
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }
        .skillsList li {
          color: #2c3e50;
        }
        .footer {
          margin-top: 2rem;
          padding: 1rem;
          background-color: #2c3e50;
          text-align: center;
          color: white;
        }
        .footer a {
          color: #f39c12;
        }
        .objectiveText {
          background-color: #ecf0f1;
          padding: 1rem;
          border-radius: 5px;
          color: #7f8c8d;
        }
        .educationInfo {
          font-size: 1rem;
          color: #7f8c8d;
        }
        .jobTitle {
          font-weight: bold;
          color: #2c3e50;
        }
        .experienceList li {
          color: #34495e;
        }
        .sectionTitle {
          border-bottom: 2px solid #2980b9;
          padding-bottom: 0.25rem;
          margin-bottom: 1rem;
        }
        .courseworkTitle {
          font-weight: bold;
          color: #34495e;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #ecf0f1;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
