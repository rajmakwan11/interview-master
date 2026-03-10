import React from "react";
import "../style/interview.scss";

const mockInterviewPlan = {
  matchScore: 45,
  technicalQuestions: [
    {
      question:
        "Explain the difference between var, let, and const in JavaScript and when you would use each.",
      intention: "Assess fundamental ES6+ knowledge and scope handling.",
      answer:
        "var is function-scoped and can be re-declared; let is block-scoped and cannot be re-declared in the same scope; const is block-scoped and must be initialized once, though the value can be mutable if it�s an object. Use let for variables that change within a block, const for values that never reassign, and avoid var in modern code due to hoisting confusion."
    },
    {
      question: "How does the event loop handle asynchronous code in Node.js?",
      intention: "Check understanding of Node's concurrency model.",
      answer:
        "Node.js runs JavaScript on a single thread. When an async operation (e.g., I/O) is invoked, it is offloaded to the libuv thread pool or the OS. The callback is placed on the event loop�s callback queue. The event loop processes callbacks after the current call stack is empty, ensuring non-blocking execution."
    },
    {
      question: "What are React Hooks and why are they preferred over class components?",
      intention: "Gauge familiarity with modern React patterns.",
      answer:
        "Hooks are functions (e.g., useState, useEffect) that let you use state and lifecycle features in functional components. They reduce boilerplate, avoid this-binding issues, enable code reuse via custom hooks, and make components easier to read and test."
    },
    {
      question: "Describe how you would protect a REST API endpoint using JWT in an Express.js app.",
      intention: "Validate knowledge of authentication/authorization basics.",
      answer:
        "After user login, sign a JWT with a secret and send it to the client. For protected routes, create middleware that reads the Authorization header, verifies the token with jwt.verify, extracts the payload (e.g., userId), and either calls next() if valid or returns 401/403 if not."
    },
    {
      question:
        "How would you design a MongoDB schema for a blog post that includes comments, tags, and author reference?",
      intention: "Assess data modeling ability for NoSQL.",
      answer:
        "Create a posts collection with fields: title, content, authorId (ObjectId reference to users), tags (array of strings), createdAt, updatedAt. Store comments as a sub-document array inside the post (commentId, userId, text, createdAt) or as a separate collection if they grow large, linking via postId. Use indexes on authorId, tags, and createdAt for query performance."
    }
  ],
  behavioralQuestions: [
    {
      question:
        "Tell me about a time you had to learn a new technology quickly to meet a project deadline. How did you approach it?",
      intention: "Evaluate learning agility and self-motivation.",
      answer:
        "In my final year project, we needed to integrate a real-time chat feature using Socket.io, which I hadn�t used before. I allocated 2?days: day?1 for official docs and a quick tutorial, day?2 for building a small prototype and testing. I also posted specific questions on Stack Overflow. By the deadline, I had a functional chat module and documented the integration steps for the team."
    },
    {
      question:
        "Describe a situation where you faced a difficult bug in your code. What steps did you take to resolve it?",
      intention: "Assess problem-solving and debugging methodology.",
      answer:
        "While building a CRUD API, a request would sometimes return 500 errors intermittently. I reproduced the issue locally, added detailed logging, and used Node�s built-in debugger. I discovered that an unhandled promise rejection in the delete route caused the crash. I added proper try-catch blocks and returned a standardized error response, which eliminated the intermittent failures."
    },
    {
      question: "How do you handle receiving feedback that your code does not meet the team's standards?",
      intention: "Understand openness to feedback and collaboration.",
      answer:
        "I view feedback as an opportunity to improve. When a reviewer points out style or architectural concerns, I ask clarifying questions to understand the rationale, update my code accordingly, and incorporate the lessons into future work. I also update any shared style guides if the feedback reveals a gap."
    },
    {
      question: "Give an example of how you contributed to improving team communication in a project.",
      intention: "Measure teamwork and communication skills.",
      answer:
        "In a group assignment, we noticed misaligned assumptions about API contracts. I suggested a short weekly sync and introduced a shared Swagger/OpenAPI spec that everyone could reference. This reduced back-and-forth questions and helped us deliver the API on schedule."
    },
    {
      question: "What motivates you to pursue a career as a MERN stack developer, especially as a fresher?",
      intention: "Identify passion and long-term interest in the tech stack.",
      answer:
        "I enjoy building end-to-end solutions where I can see the immediate impact of my work on users. The MERN stack lets me use a single language (JavaScript) across the stack, which accelerates development and learning. I�m excited to deepen my skills in React and Node while contributing to real-world products."
    }
  ],
  skillGaps: [
    {
      skill: "Advanced React patterns (Context API, Redux, performance optimization)",
      severity: "medium"
    },
    {
      skill: "Production-grade authentication (JWT refresh tokens, OAuth)",
      severity: "high"
    },
    {
      skill: "Testing frameworks (Jest, React Testing Library, Supertest)",
      severity: "high"
    },
    {
      skill: "CI/CD pipelines and Docker containerization",
      severity: "medium"
    },
    {
      skill: "In-depth MongoDB performance tuning (indexes, aggregation)",
      severity: "low"
    }
  ],
  preparationPlan: [
    {
      day: 1,
      focus: "Core JavaScript & ES6+ fundamentals",
      tasks: [
        "Complete a 3-hour ES6 tutorial (let/const, arrow functions, spread/rest, async/await)",
        "Solve 10 JavaScript coding challenges on LeetCode (focus on closures and prototypes)",
        "Read \"You Don�t Know JS\" Chapter 2"
      ]
    },
    {
      day: 2,
      focus: "React basics & Hooks",
      tasks: [
        "Build a small to-do app using functional components and useState/useEffect",
        "Watch a 2-hour React Hooks video series",
        "Write a summary of component lifecycle differences between class and functional components"
      ]
    },
    {
      day: 3,
      focus: "Node.js & Express fundamentals",
      tasks: [
        "Create a simple CRUD API for a book resource using Express",
        "Implement error-handling middleware",
        "Practice using Postman to test endpoints"
      ]
    },
    {
      day: 4,
      focus: "MongoDB & Mongoose schema design",
      tasks: [
        "Design a blog-post schema with embedded comments and references",
        "Load sample data and write aggregation queries (group by tags, count comments)",
        "Review MongoDB indexing strategies"
      ]
    },
    {
      day: 5,
      focus: "Authentication with JWT",
      tasks: [
        "Implement login route that issues JWT",
        "Create auth middleware to protect a route",
        "Add token expiration and refresh-token flow (basic)"
      ]
    },
    {
      day: 6,
      focus: "Testing & Debugging",
      tasks: [
        "Write unit tests for a React component using Jest & React Testing Library",
        "Add API integration tests with Supertest",
        "Practice debugging with VS Code breakpoints"
      ]
    },
    {
      day: 7,
      focus: "Project integration & Soft skills",
      tasks: [
        "Combine front-end and back-end into a mini MERN project (e.g., notes app)",
        "Deploy to Render/Heroku (free tier)",
        "Prepare answers to the behavioral questions above and rehearse"
      ]
    }
  ]
};

const Interview = () => {
  const { matchScore, technicalQuestions, behavioralQuestions, skillGaps, preparationPlan } = mockInterviewPlan;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
            <span className="interview__scoreValue">{matchScore}%</span>
          </div>
        </header>

        <section id="technical" className="interview__section">
          <h2 className="section__title">Technical Questions</h2>
          <div className="section__grid">
            {technicalQuestions.map((item, index) => (
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
            {behavioralQuestions.map((item, index) => (
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
            {preparationPlan.map((day) => (
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
            {skillGaps.map((gap, index) => (
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
