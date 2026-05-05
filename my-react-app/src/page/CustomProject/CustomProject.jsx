import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import "./CustomProject.css";

export default function ProjectRequestForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="prj-form-section">
      <div className="prj-form-container">
        <div className="prj-form-header">
          <h1 className="prj-form-title">
            Start Your <span className="prj-form-highlight">Project</span>
          </h1>
          <p className="prj-form-subtitle">
            Tell us about your vision, and we'll help you bring it to life.
          </p>
        </div>

        {formSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="prj-form-success-card"
          >
            <div className="prj-form-icon-wrapper">
              <CheckCircle2 className="prj-form-icon" />
            </div>
            <h2 className="prj-form-success-title">Request Received!</h2>
            <p className="prj-form-success-text">
              Thank you for reaching out. Our team will review your project details and contact you within 24 hours.
            </p>
            <button onClick={() => setFormSubmitted(false)} className="prj-form-reset-btn">
              Send another request
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleFormSubmit} className="prj-form-card">
            <div className="prj-form-grid-row">
              <div className="prj-form-group">
                <label className="prj-form-label">Full Name</label>
                <input required type="text" placeholder="John Doe" className="prj-form-input" />
              </div>
              <div className="prj-form-group">
                <label className="prj-form-label">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="prj-form-input" />
              </div>
            </div>

            <div className="prj-form-group">
              <label className="prj-form-label">Project Type</label>
              <select className="prj-form-select" defaultValue="" required>
                <option value="" disabled>Select a project type</option>
                <option value="website">Custom Website</option>
                <option value="mobile">Mobile Application</option>
                <option value="ai">AI Integration / Chatbot</option>
              </select>
            </div>

            <div className="prj-form-group">
              <label className="prj-form-label">Tell us about your project</label>
              <textarea placeholder="Describe your vision, goals, and any specific features you need..." className="prj-form-textarea"></textarea>
            </div>

            <div className="prj-form-grid-row">
              <div className="prj-form-group">
                <label className="prj-form-label">Estimated Budget</label>
                <select className="prj-form-select">
                  <option>$100 - $500</option>
                  <option>$500 - $1,500</option>
                  <option>$5,000+</option>
                </select>
              </div>
              <div className="prj-form-group">
                <label className="prj-form-label">Timeline</label>
                <select className="prj-form-select">
                  <option>ASAP (Less than 1 month)</option>
                  <option>1 - 3 Months</option>
                </select>
              </div>
            </div>

            <button type="submit" className="prj-form-submit-btn">
              Submit Request <ChevronRight className="prj-form-btn-icon" />
            </button>
            <p className="prj-form-footer-text">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
