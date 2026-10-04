const careerProfiles = {
  ai: {
    name: "Machine Learning Engineer",
    icon: "✦",
    description: "A strong fit for people who enjoy Python, data and building intelligent systems.",
    baseScore: 82,
    strengths: ["Python", "Data thinking", "Problem solving"],
    gaps: [
      ["Statistics", "Build a stronger foundation in probability, distributions and evaluation.", 45],
      ["Deep Learning", "Learn neural networks, CNNs and practical model training.", 35],
      ["MLOps", "Understand how models are deployed, monitored and maintained.", 25]
    ],
    roadmap: [
      ["Weeks 1–3", "Python + Statistics", "Foundations"],
      ["Weeks 4–6", "Machine Learning", "Core skill"],
      ["Weeks 7–9", "Deep Learning", "Specialization"],
      ["Weeks 10–12", "Build + Deploy a project", "Portfolio"]
    ]
  },
  software: {
    name: "Software Engineer",
    icon: "⌘",
    description: "A good fit for people who enjoy building applications, solving problems and working with code.",
    baseScore: 80,
    strengths: ["Programming", "Problem solving", "Building products"],
    gaps: [
      ["Data Structures", "Practice arrays, strings, hash maps, stacks, queues and trees.", 50],
      ["Backend APIs", "Learn REST APIs, authentication and server-side architecture.", 35],
      ["Testing", "Learn unit testing, debugging and reliable software practices.", 25]
    ],
    roadmap: [
      ["Weeks 1–3", "Python/JavaScript + DSA", "Foundations"],
      ["Weeks 4–6", "REST APIs + SQL", "Core skill"],
      ["Weeks 7–9", "Frontend + Backend project", "Build"],
      ["Weeks 10–12", "Testing + Deployment", "Portfolio"]
    ]
  },
  data: {
    name: "Data Analyst",
    icon: "◫",
    description: "A strong fit if you enjoy finding patterns, working with data and communicating insights.",
    baseScore: 84,
    strengths: ["SQL", "Analytics", "Curiosity"],
    gaps: [
      ["Advanced SQL", "Master joins, CTEs, window functions and query optimization.", 50],
      ["Statistics", "Strengthen hypothesis testing, distributions and correlation.", 40],
      ["Data Visualization", "Learn to turn analysis into clear dashboards and stories.", 30]
    ],
    roadmap: [
      ["Weeks 1–3", "SQL + Excel", "Foundations"],
      ["Weeks 4–6", "Statistics + Python", "Core skill"],
      ["Weeks 7–9", "Power BI/Tableau", "Visualization"],
      ["Weeks 10–12", "End-to-end data project", "Portfolio"]
    ]
  },
  web: {
    name: "Full-Stack Developer",
    icon: "◇",
    description: "A strong fit if you enjoy creating user-facing products and connecting frontend with backend systems.",
    baseScore: 81,
    strengths: ["Web development", "JavaScript", "Product thinking"],
    gaps: [
      ["React", "Build reusable components, state management and responsive interfaces.", 45],
      ["Backend", "Learn APIs, authentication and server-side application logic.", 35],
      ["Databases", "Understand SQL, schemas and CRUD operations.", 30]
    ],
    roadmap: [
      ["Weeks 1–3", "HTML + CSS + JavaScript", "Foundations"],
      ["Weeks 4–6", "React", "Frontend"],
      ["Weeks 7–9", "Backend + Database", "Full stack"],
      ["Weeks 10–12", "Deploy a complete app", "Portfolio"]
    ]
  },
  cyber: {
    name: "Cybersecurity Analyst",
    icon: "◈",
    description: "A fit for people who enjoy systems, investigation, security and thinking like an attacker and defender.",
    baseScore: 78,
    strengths: ["Curiosity", "Systems thinking", "Attention to detail"],
    gaps: [
      ["Networking", "Strengthen TCP/IP, DNS, HTTP and common network attacks.", 50],
      ["Linux", "Become comfortable with the command line, permissions and processes.", 40],
      ["Security tools", "Practice with logs, vulnerability scanning and incident response.", 30]
    ],
    roadmap: [
      ["Weeks 1–3", "Linux + Networking", "Foundations"],
      ["Weeks 4–6", "Web Security", "Core skill"],
      ["Weeks 7–9", "Security tools + labs", "Practice"],
      ["Weeks 10–12", "Security portfolio project", "Portfolio"]
    ]
  }
};

const form = document.getElementById("careerForm");
const dashboard = document.getElementById("dashboard");
const toast = document.getElementById("toast");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const rawSkills = document.getElementById("skills").value.trim();
  const interest = document.getElementById("interest").value;
  const experience = document.getElementById("experience").value;
  const skills = rawSkills.split(",").map(s => s.trim()).filter(Boolean);
  const profile = careerProfiles[interest];

  const bonus = Math.min(skills.length * 2, 8) + (experience === "intermediate" ? 5 : experience === "advanced" ? 9 : 0);
  const score = Math.min(profile.baseScore + bonus, 97);

  document.getElementById("welcomeName").textContent = name + "'s";
  document.getElementById("careerIcon").textContent = profile.icon;
  document.getElementById("careerName").textContent = profile.name;
  document.getElementById("careerDescription").textContent = profile.description;
  document.getElementById("matchScore").textContent = score + "%";
  document.getElementById("dashInterest").textContent = document.getElementById("interest").selectedOptions[0].text;
  document.getElementById("dashExperience").textContent = experience.charAt(0).toUpperCase() + experience.slice(1);

  const strengths = skills.length ? skills.slice(0, 5) : profile.strengths;
  document.getElementById("strengths").innerHTML = strengths.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join("");

  document.getElementById("skillGaps").innerHTML = profile.gaps.map(([title, desc, level], index) => `
    <article class="gap-card">
      <div class="priority">PRIORITY ${index + 1}</div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="progress"><span style="width:${level}%"></span></div>
    </article>
  `).join("");

  document.getElementById("roadmap").innerHTML = profile.roadmap.map(([week, title, type]) => `
    <article class="roadmap-item">
      <div class="week">${week}</div>
      <div><h3>${title}</h3><p>Focus on practical work and produce something you can demonstrate.</p></div>
      <strong>${type}</strong>
    </article>
  `).join("");

  dashboard.classList.remove("hidden");
  dashboard.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast();
});

function showToast() {
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}
