const CURRICULUM = [
  {
    id: "p1",
    title: "Phase 1 — Close the developer gap",
    months: "Months 1–3",
    color: "blue",
    topics: [
      {
        id: "t1",
        name: "Python OOP — classes, modules, error handling",
        time: "1 week",
        yt: { label: "Python OOP full course", url: "https://www.youtube.com/watch?v=Ej_02ICOIgs" },
        doc: { label: "Real Python — OOP guide", url: "https://realpython.com/python3-object-oriented-programming/" }
      },
      {
        id: "t2",
        name: "REST APIs — requests lib, JSON, auth headers",
        time: "1 week",
        yt: { label: "Python requests library", url: "https://www.youtube.com/watch?v=tb8gHvYlCFs" },
        doc: { label: "Real Python — requests lib", url: "https://realpython.com/python-requests/" }
      },
      {
        id: "t3",
        name: "FastAPI basics — build your first endpoint",
        time: "1 week",
        yt: { label: "FastAPI crash course", url: "https://www.youtube.com/watch?v=0sOvCWFmrtA" },
        doc: { label: "FastAPI official docs", url: "https://fastapi.tiangolo.com/tutorial/" }
      },
      {
        id: "t4",
        name: "Git properly — branching, PRs, commit history",
        time: "3 days",
        yt: { label: "Git and GitHub for beginners", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
        doc: { label: "Pro Git book (free)", url: "https://git-scm.com/book/en/v2" }
      },
      {
        id: "t5",
        name: "LLM API basics — call Claude API, parse responses",
        time: "1 week",
        yt: { label: "Anthropic API quickstart", url: "https://www.youtube.com/watch?v=QdDoFfkVkcw" },
        doc: { label: "Anthropic API docs", url: "https://docs.anthropic.com/en/api/getting-started" }
      },
      {
        id: "t6",
        name: "Prompt engineering — system prompts, chaining",
        time: "1 week",
        yt: { label: "Prompt engineering full guide", url: "https://www.youtube.com/watch?v=aOm75o2Z5-o" },
        doc: { label: "Anthropic prompt engineering", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" }
      },
      {
        id: "t7",
        name: "HTML + CSS fundamentals for developers",
        time: "1 week",
        yt: { label: "HTML + CSS crash course", url: "https://www.youtube.com/watch?v=G3e-cpL7ofc" },
        doc: { label: "MDN Web Docs — HTML", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML" }
      },
      {
        id: "t8",
        name: "JavaScript basics — DOM, events, fetch API",
        time: "1 week",
        yt: { label: "JavaScript full course", url: "https://www.youtube.com/watch?v=Zi-Q0t4gMC8" },
        doc: { label: "javascript.info", url: "https://javascript.info/" }
      }
    ]
  },
  {
    id: "p2",
    title: "Phase 2 — Build real AI apps",
    months: "Months 4–8",
    color: "green",
    topics: [
      {
        id: "t9",
        name: "Vector databases — embeddings, semantic search",
        time: "1 week",
        yt: { label: "Vector databases explained", url: "https://www.youtube.com/watch?v=klTvEwg3oJ4" },
        doc: { label: "Pinecone learning center", url: "https://www.pinecone.io/learn/vector-database/" }
      },
      {
        id: "t10",
        name: "RAG pattern — retrieval augmented generation",
        time: "1 week",
        yt: { label: "RAG from scratch", url: "https://www.youtube.com/watch?v=sVcwVQRHIc8" },
        doc: { label: "LangChain RAG docs", url: "https://python.langchain.com/docs/tutorials/rag/" }
      },
      {
        id: "t11",
        name: "LangChain basics — chains, agents, tools",
        time: "2 weeks",
        yt: { label: "LangChain crash course", url: "https://www.youtube.com/watch?v=LbT1yp6quS8" },
        doc: { label: "LangChain official docs", url: "https://python.langchain.com/docs/introduction/" }
      },
      {
        id: "t12",
        name: "Streamlit — build usable UIs fast in Python",
        time: "1 week",
        yt: { label: "Streamlit full tutorial", url: "https://www.youtube.com/watch?v=VqgUkExPvLY" },
        doc: { label: "Streamlit docs", url: "https://docs.streamlit.io/" }
      },
      {
        id: "t13",
        name: "Project: QA Forge learning website",
        time: "2 weeks",
        yt: { label: "Build and deploy with GitHub Pages", url: "https://www.youtube.com/watch?v=SKXkC4SqtRk" },
        doc: { label: "GitHub Pages docs", url: "https://pages.github.com/" }
      },
      {
        id: "t14",
        name: "Project: AI test case generator",
        time: "2 weeks",
        yt: { label: "Build AI apps with Python", url: "https://www.youtube.com/watch?v=U8kdIPKKqAM" },
        doc: { label: "Anthropic tool use docs", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview" }
      },
      {
        id: "t15",
        name: "AI output validation strategies",
        time: "1 week",
        yt: { label: "Testing LLM applications", url: "https://www.youtube.com/watch?v=Kbkvaj4BKxw" },
        doc: { label: "DeepLearning.AI — LLM evaluation", url: "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/" }
      },
      {
        id: "t16",
        name: "Deploy to cloud — Render or Railway free tier",
        time: "1 week",
        yt: { label: "Deploy Python app to Render", url: "https://www.youtube.com/watch?v=bnCOyGaSe84" },
        doc: { label: "Render docs — Python deploy", url: "https://render.com/docs/deploy-fastapi" }
      },
      {
        id: "t17",
        name: "Project: Talk to your data mini app",
        time: "2 weeks",
        yt: { label: "Build a SQL chatbot with LLMs", url: "https://www.youtube.com/watch?v=9VNe8wSB9bY" },
        doc: { label: "LangChain SQL agent docs", url: "https://python.langchain.com/docs/tutorials/sql_qa/" }
      },
      {
        id: "t18",
        name: "AWS basics — S3, Lambda (you already use S3!)",
        time: "1 week",
        yt: { label: "AWS S3 and Lambda tutorial", url: "https://www.youtube.com/watch?v=mxT233EdY5c" },
        doc: { label: "AWS S3 getting started", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html" }
      }
    ]
  },
  {
    id: "p3",
    title: "Phase 3 — Land the developer role",
    months: "Months 9–12",
    color: "orange",
    topics: [
      {
        id: "t19",
        name: "Leetcode easy/medium in Python — 30 days",
        time: "1 month",
        yt: { label: "Neetcode roadmap walkthrough", url: "https://www.youtube.com/watch?v=SVvr3ZjtjI8" },
        doc: { label: "Neetcode.io", url: "https://neetcode.io/roadmap" }
      },
      {
        id: "t20",
        name: "System design basics for AI apps",
        time: "2 weeks",
        yt: { label: "System design for beginners", url: "https://www.youtube.com/watch?v=MbjObHmDbZo" },
        doc: { label: "System design primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer" }
      },
      {
        id: "t21",
        name: "Resume rewrite — I build AI apps framing",
        time: "3 days",
        yt: { label: "Tech resume tips for developers", url: "https://www.youtube.com/watch?v=Tt08KmFfIYQ" },
        doc: { label: "Resume tips — levels.fyi", url: "https://www.levels.fyi/blog/applying-to-jobs-with-little-experience.html" }
      },
      {
        id: "t22",
        name: "LinkedIn presence — post weekly about projects",
        time: "Ongoing",
        yt: { label: "LinkedIn for developers", url: "https://www.youtube.com/watch?v=SG5Sb5WTV_g" },
        doc: { label: "LinkedIn profile checklist", url: "https://www.linkedin.com/help/linkedin/answer/a554351" }
      },
      {
        id: "t23",
        name: "GitHub polish — READMEs, live demos, clean code",
        time: "1 week",
        yt: { label: "How to write a great README", url: "https://www.youtube.com/watch?v=E6NO0rgFub4" },
        doc: { label: "GitHub README best practices", url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes" }
      },
      {
        id: "t24",
        name: "Mock interviews — technical + behavioural",
        time: "2 weeks",
        yt: { label: "Tech interview prep guide", url: "https://www.youtube.com/watch?v=1qw5ITr3k9E" },
        doc: { label: "Pramp — free mock interviews", url: "https://www.pramp.com/" }
      },
      {
        id: "t25",
        name: "ISTQB Foundation cert (boosts QA to dev story)",
        time: "6 weeks",
        yt: { label: "ISTQB foundation full course", url: "https://www.youtube.com/watch?v=_MKLcdgFpYU" },
        doc: { label: "ISTQB official syllabus", url: "https://www.istqb.org/certifications/certified-tester-foundation-level" }
      }
    ]
  }
];
