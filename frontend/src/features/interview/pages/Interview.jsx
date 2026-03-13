import React from "react";
import "../style/interview.scss";
import { useInterview } from "../hooks/useInterview";
// import { useNavigate } from "react-router";

const Interview = () => {
  const { report, loading } = useInterview();


  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if(loading || !report){
    return(
      <main className="loading-screen">
        <h1>Loading Your interview plan....</h1>
      </main>
    )
  }


  return (
    <main className="interview">
      <aside className="interview__nav">
        <div className="interview__navInner">
          <h2 className="interview__navTitle">Jump to</h2>
          <button className="interview__navItem" type="button" onClick={() => scrollTo("technical")}>Technical questions</button>
          <button className="interview__navItem" type="button" onClick={() => scrollTo("behavioral")}>Behavioral questions</button>
          <button className="interview__navItem" type="button" onClick={() => scrollTo("roadmap")}>Road map</button>
        </div>
      </aside>

      <section className="interview__content">
        <header className="interview__header">
          <div>
            <h1 className="interview__title">Interview Plan</h1>
            <p className="interview__subtitle">Review your personalized plan below and use it to guide your preparation.</p>
          </div>

          <div className="interview__score">
            <span className="interview__scoreLabel">Match Score</span>
            <span className="interview__scoreValue">{report.matchScore}%</span>
          </div>
        </header>

        <section id="technical" className="interview__section">
          <h2 className="section__title">Technical Questions</h2>
          <div className="section__grid">
            {report.technicalQuestions.map((item, index) => (
              <article key={index} className="card">
                <header className="card__header">
                  <span className="card__icon"></span>
                  <h3 className="card__title">{`Q${index + 1}. ${item.question}`}</h3>
                </header>
                <p className="card__intention">{item.intention}</p>
                <div className="card__answer">
                  <strong>Suggested answer:</strong>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="behavioral" className="interview__section">
          <h2 className="section__title">Behavioral Questions</h2>
          <div className="section__grid">
            {report.behavioralQuestions.map((item, index) => (
              <article key={index} className="card">
                <header className="card__header">
                  <span className="card__icon"></span>
                  <h3 className="card__title">{`Q${index + 1}. ${item.question}`}</h3>
                </header>
                <p className="card__intention">{item.intention}</p>
                <div className="card__answer">
                  <strong>Suggested answer:</strong>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="roadmap" className="interview__section">
          <h2 className="section__title">Preparation Road Map</h2>
          <div className="roadmap">
            {report.preparationPlan.map((day) => (
              <article key={day.day} className="card roadmap__card">
                <header className="roadmap__header">
                  <h3 className="roadmap__day">Day {day.day}</h3>
                  <span className="roadmap__focus">{day.focus}</span>
                </header>
                <ul className="roadmap__tasks">
                  {day.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </section>

      <aside className="interview__aside">
        <div className="skill-gaps">
          <header className="skill-gaps__header">
            <h2 className="skill-gaps__title">Skill Gaps</h2>
            <span className="skill-gaps__hint">Focus areas to improve</span>
          </header>
          <div className="skill-gaps__list">
            {report.skillGaps.map((gap, index) => (
              <span key={index} className={`skill-pill skill-pill--${gap.severity}`}>
                {gap.skill}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Interview;
