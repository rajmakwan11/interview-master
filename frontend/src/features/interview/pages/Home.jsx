import React from "react";
import "../style/home.scss";

const Home = () => {
  return (
    <main className="home">
      <header className="home__header">
        <h1 className="home__title">
          Create Your Custom <span className="home__title--highlight">Interview Plan</span>
        </h1>
        <p className="home__subtitle">
          Let our AI analyze the job requirements and your unique profile to build a
          winning strategy.
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
            className="card__textarea"
            placeholder="Paste the full job description here… e.g. ‘Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design…’"
            rows={14}
            readOnly
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
              <label htmlFor="resume">Upload Resume</label>
              <input type="file" name="resume" id="resume" hidden />
              </div>
          </div>

          <div className="divider">OR</div>

          <div className="self-description">
            <label className="self-description__label">Quick Self-Description</label>
            <textarea
              className="self-description__textarea"
              placeholder="Briefly describe your experience, key skills, and years of experience if you don’t have a resume handy…"
              rows={6}
              readOnly
            />
          </div>

          <div className="card__note">
            Either a Resume or a Self Description is required to generate a personalized plan.
          </div>

          <button className="action-button" type="button">
            Generate My Interview Strategy
          </button>
        </section>
      </section>

      <footer className="home__footer">
        AI-Powered Strategy Generation • Approx 30s
      </footer>
    </main>
  );
};

export default Home;