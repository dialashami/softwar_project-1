
import '../CSS/welcome.css';
import { useNavigate } from "react-router-dom";



export default function Welcome() {
  const navigate = useNavigate();

  const userTypes = [
    {
      id: 1,
      title: "Student",
      description: "Access lessons and learning materials",
      icon: "👨‍🎓",
      role: "student",

    },
    {
      id: 2,
      title: "Teacher",
      description: "Manage classrooms and deliver lessons",
      icon: "👨‍🏫",
      role: "teacher",
      
    },
    {
      id: 3,
      title: "Parent",
      description: "Track your children's academic progress",
      icon: "👨‍👩‍👧‍👦",
      role: "parent",
    
    },{
      id: 4,
      title:"trainer",
      description:"Provide specialized training sessions",
      icon:"🧑‍💼",
      role:"trainee"
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Personalized Learning",
      description: "Customized learning experience for every student"
    },
    {
      icon: "🤝",
      title: "Effective Communication",
      description: "Connecting teachers with students and parents"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Track academic performance easily"
    },
    {
      icon: "🆓",
      title: "Free for Teachers",
      description: "Always free for teachers, no hidden fees"
    }
  ];

  const handleUserSelect = (user) => {
    navigate(`/signup?role=${user.role}`);
  };

  return (
    <div className="welcome-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-auth">
            <button 
              className="nav-login"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
            <button 
              className="nav-signup"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
          {/* <div className="nav-logo">
            <h1 className="logo">RUWWAD</h1>
          </div> */}

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about-us">About</a>
            <a href="#contact">Contact</a>
          </div>
           <div className="nav-logo">
            <h1 className="logo">RUWWAD</h1>
          </div>

          {/* <div className="nav-auth">
            <button 
              className="nav-login"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
            <button 
              className="nav-signup"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Welcome Message Section - الإضافة الجديدة */}
          <div className="welcome-message-section">
            <h2 className="welcome-main-message">
              Welcome to RUWWAD, your gateway to smarter learning, stronger connections, and a brighter future.
            </h2>
            <h3 className="join-us-title">Join us as:</h3>
            
            {/* User Images Section - الإضافة الجديدة */}
            <div className="user-images-section">
              {userTypes.map(user => (
                <div key={user.id} className="user-image-item">
                  <img 
                    src={user.image} 
                    alt={user.title}
                    className="user-image"
                  />
                  <div className="user-image-label">{user.title}</div>
                  <div className="user-image-desc">{user.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="welcome-header">
            <h1 className="main-title">RUWWAD</h1>
            <p className="welcome-tagline">
              Your gateway to smarter learning, stronger connections, and a brighter future
            </p>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-number">45M+</div>
              <div className="stat-label">Students & Parents</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Teachers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Schools</div>
            </div>
          </div>

          {/* App Download Section */}
          <div className="app-download">
            <div className="divider"></div>
            <h3 className="download-title">Download the RUWWAD App</h3>
            <div className="app-buttons">
              <button className="app-btn google-play">
                <span className="btn-icon">📱</span>
                <span className="btn-text">Google Play</span>
              </button>
              <button className="app-btn app-store">
                <span className="btn-icon">📱</span>
                <span className="btn-text">App Store</span>
              </button>
            </div>
          </div>
        </div>

        {/* Visual Section */}
        <div className="hero-visual">
          <div className="visual-container">
            <div className="floating-card student-card">
              <div className="card-icon">👨‍🎓</div>
              <div className="card-content">
                <h4>Student</h4>
                <p>Access lessons and learning materials</p>
              </div>
            </div>
            <div className="floating-card teacher-card">
              <div className="card-icon">👨‍🏫</div>
              <div className="card-content">
                <h4>Teacher</h4>
                <p>Manage classrooms and deliver lessons</p>
              </div>
            </div>
            <div className="floating-card parent-card">
              <div className="card-icon">👨‍👩‍👧‍👦</div>
              <div className="card-content">
                <h4>Parent</h4>
                <p>Track your children's academic progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <h2 className="features-title"> Why Choose RUWWAD </h2>
          <p className="features-subtitle">
            Empowering educators, students, and parents with innovative learning solutions
          </p>

          {/* Get Started Section within Features */}
          <div  className="get-started-section">
            <h3 className="get-started-title">Get started as</h3>
            <div className="user-cards">
              {userTypes.map(user => (
                <div 
                  key={user.id}
                  className="user-card"
                  onClick={() => handleUserSelect(user)}
                >
                  <div className="user-icon">{user.icon}</div>
                  <div className="user-content">
                    <h4 className="user-role">{user.title}</h4>
                    <p className="user-desc">{user.description}</p>
                  </div>
                  <span className="arrow">→</span>
                </div>
              ))}
            </div>
          </div>

          <div className='about-section' id="about-us">
            <h1>About Us</h1>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">What Our Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "RUWWAD has transformed how I manage my classroom and communicate with parents."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Sarah Johnson</div>
                <div className="author-role">Teacher</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "As a parent, I can easily track my child's progress and stay connected with teachers."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Michael Chen</div>
                <div className="author-role">Parent</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "The platform makes learning fun and accessible. I love the interactive lessons!"
              </div>
              <div className="testimonial-author">
                <div className="author-name">Emily Rodriguez</div>
                <div className="author-role">Student</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id='contact' className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-logo">RUWWAD</h3>
              <p className="footer-description">
                Empowering education through technology and innovation.
              </p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#features">Features</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <a href="#help">Help Center</a>
              <a href="#faq">FAQ</a>
              <a href="#community">Community</a>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="https://www.facebook.com/share/14QRZEy9etj/?mibextid=wwXIfr" target="_blank">Facebook</a>
              <a href="https://x.com/abdalrhmanjyas?s=21" target="_blank"> Twitter</a>
              <a href="https://www.linkedin.com/in/abdalrhman-yaseen-809202172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">LinkedIn</a>
              <a href="https://www.instagram.com/abdalrhmanjyaseen?igsh=NmFkeW00ajNja3h0&utm_source=qr" target="_blank">Instagram</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; RUWWAD All rights reserved.2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}