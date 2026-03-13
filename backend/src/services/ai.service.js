const { Groq } = require("groq-sdk")

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const interviewSchema = {
  type: "json_schema",
  json_schema: {
    name: "interview_report_generation",
    schema: {
      type: "object",
      properties: {
        technicalQuestions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              question: { type: "string" },
              intention: { type: "string" },
              answer: { type: "string" }
            },
            required: ["question", "intention", "answer"],
            additionalProperties: false
          }
        },

        behavioralQuestions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              question: { type: "string" },
              intention: { type: "string" },
              answer: { type: "string" }
            },
            required: ["question", "intention", "answer"],
            additionalProperties: false
          }
        },

        skillGaps: {
          type: "array",
          items: {
            type: "object",
            properties: {
              skill: { type: "string" },
              severity: {
                type: "string",
                enum: ["low", "medium", "high"]
              }
            },
            required: ["skill", "severity"],
            additionalProperties: false
          }
        },

        preparationPlan: {
          type: "array",
          items: {
            type: "object",
            properties: {
              day: { type: "number" },
              focus: { type: "string" },
              tasks: {
                type: "array",
                items: { type: "string" }
              }
            },
            required: ["day", "focus", "tasks"],
            additionalProperties: false
          }
        },

        matchScore: {
          type: "number",
          minimum: 0,
          maximum: 100
        },

        title: {
          type:"string"
        }
      },

      required: [
        "technicalQuestions",
        "behavioralQuestions",
        "skillGaps",
        "preparationPlan",
        "matchScore",
        "title"
      ],

      additionalProperties: false
    }
  }
}

function BuildContent(report, jobDescription, selfDescription){
    return (`You are an AI Interview Preparation Engine.

Analyze the following candidate information and generate a structured interview preparation report.

Resume:
${report}

Job Description:
${jobDescription}

Self Declaration:
${selfDescription}

Return ONLY valid JSON matching the schema.
`
    )
}

async function generateInterviewReport({report, jobDescription, selfDescription}){
    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content: BuildContent(report, jobDescription, selfDescription)
        },
      ],
      response_format:interviewSchema
    });
    const result = JSON.parse(response.choices[0].message.content || "{}");
    // console.dir(result, { depth: null }); // shows full arrays
    return result; 
}

module.exports = generateInterviewReport
