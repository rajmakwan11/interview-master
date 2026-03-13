import React, { useRef, useState } from "react";
import "../style/home.scss";
import { useInterview } from "../hooks/useInterview";
import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate()

  const {loading, generateReport, reports} = useInterview()
  const [selfDescription, setSelfDescription] = useState()
  const [jobDescription, setJobDescription] = useState()
  const resumeInputRef = useRef()


  const handleGenerateReport = async()=>{
    const resumeFile = resumeInputRef.current.files[0]
    const data = await generateReport({ jobDescription, selfDescription, resumeFile})
    navigate(`/interview/${data._id}`)
  }

  if(loading){
    return (<main className="loading-screen"><h1>Loading Your Interview Plan....</h1></main>)
  }
  

  return (
    <main className="home">
      <form>
        <header className="home__header">
          <h1 className="home__title">
            Create Your Custom{" "}
            <span className="home__title--highlight">Interview Plan</span>
          </h1>
          <p className="home__subtitle">
            Let our AI analyze the job requirements and your unique profile to
            build a winning strategy.
          </p>
        </header>

        <section className="home__grid">
          <section className="card card--job">
            <div className="card__header">
              <span className="card__icon">📌</span>
              <h2 className="card__title">Target Job Description</h2>
              <span className="card__badge">Required</span>
            </div>

            <textarea
              onChange={(e) => {
                setJobDescription(e.target.value);
              }}
              className="card__textarea"
              placeholder="Paste the full job description here… e.g. ‘Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design…’"
              rows={14}
              required
              minLength={10}
              maxLength={5000}
            />

            <div className="card__footer">
              <span className="card__help">0 / 5000 chars</span>
            </div>
          </section>

          <section className="card card--profile">
            <div className="card__header">
              <span className="card__icon">👤</span>
              <h2 className="card__title">Your Profile</h2>
            </div>

            <div className="upload">
              <div className="upload__label">
                <span>Upload Resume</span>
                <span className="upload__hint">(Best Results)</span>
              </div>

              <div className="upload__dropzone">
                <label htmlFor="resume" className="scale-effect">
                  Upload Resume
                </label>
                <input
                  ref={resumeInputRef}
                  type="file"
                  name="resume"
                  id="resume"
                  hidden
                />
              </div>
            </div>

            <div className="divider">OR</div>

            <div className="self-description">
              <label className="self-description__label">
                Quick Self-Description
              </label>
              <textarea
                onChange={(e) => {
                  setSelfDescription(e.target.value);
                }}
                className="self-description__textarea"
                placeholder="Briefly describe your experience, key skills, and years of experience if you don’t have a resume handy…"
                rows={6}
                required
                minLength={10}
                maxLength={5000}
              />
            </div>

            <div className="card__note">
              Either a Resume or a Self Description is required to generate a
              personalized plan.
            </div>

            <button
              className="action-button"
              type="submit"
              onClick={handleGenerateReport}
            >
              Generate My Interview Strategy
            </button>
          </section>
        </section>

        {reports.length > 0 && (
          <section className="recent-reports">
            <h2>My Recent Interview Plans</h2>
            <ul className="reports-list">
              {reports.map((report) => (
                <li
                  key={report._id}
                  className="report-item"
                  onClick={() => navigate(`/interview/${report._id}`)}
                >
                  <h3>{report.title || "Untitled Position"}</h3>
                  <p className="report-meta">
                    Generated on{" "}
                    {new Date(report.createdAt).toLocaleDateString()}
                  </p>
                  <p
                    className={`match-score ${report.matchScore >= 80 ? "score--high" : report.matchScore >= 60 ? "score--mid" : "score--low"}`}
                  >
                    Match Score: {report.matchScore}%
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="home__footer">
          AI-Powered Strategy Generation • Approx 30s
        </footer>
      </form>
    </main>
  );
};

export default Home;