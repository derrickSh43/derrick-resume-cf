export type Citation = {
  sourceId: string;
  label: string;
  snippet: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  built: string;
  relevance: string;
  technologies: string[];
  repo?: string;
  flagship?: boolean;
  citations: Citation[];
};

export type WritingTheme = {
  title: string;
  summary: string;
  excerpt: string;
  citations: Citation[];
};

export type CorpusChunk = {
  id: string;
  topic: string;
  tags: string[];
  summary: string;
  source: string;
  evidence: string;
};

export const profile = {
  name: "Derrick Weil",
  role: "AI Security, AI Infrastructure, and AI Governance Architect",
  headline:
    "Designing deterministic, production-ready AI systems with strong identity, containment, cost, and policy controls.",
  citizenship: "US citizen",
  github: "https://github.com/derrickSh43",
  heroPoints: [
    "AI control planes and governed RAG release pipelines",
    "Cloud and Kubernetes platform architecture across AWS and GCP",
    "Identity-first security, policy gates, and observability for live systems"
  ],
  intro:
    "Derrick Weil is positioned here from source-backed material as an engineering-led architect focused on the Day-3 realities of AI systems: identity enforcement, isolation boundaries, cost governance, deterministic execution, and operator recovery.",
  citations: [
    {
      sourceId: "linkedin-profile",
      label: "LinkedIn Profile export",
      snippet:
        "I build production-grade cloud and AI infrastructure designed to survive real-world scale, cost volatility, and security threats."
    },
    {
      sourceId: "book-preface",
      label: "Production-Grade AI Systems",
      snippet:
        "The goal of this book is not to make AI systems smarter. It is to make them explainable, controllable, and survivable when they are wrong."
    }
  ]
};

export const aboutSections = [
  {
    title: "Current Positioning",
    body:
      "The strongest source-backed throughline is control-minded AI infrastructure. Derrick's exported profile frames his work around AI-TRiSM-aligned controls, deterministic execution scaffolding, GPU FinOps, model isolation, and cloud-native platforms with RBAC, network policy, observability, and automation.",
    citations: [
      {
        sourceId: "linkedin-profile",
        label: "LinkedIn Profile export",
        snippet:
          "AI-TRiSM-aligned controls ... deterministic execution scaffolding ... GPU FinOps and cost attribution middleware ... model isolation and sandboxing strategies."
      }
    ]
  },
  {
    title: "Operating Style",
    body:
      "The source material consistently emphasizes operator-first engineering rather than model hype. The book draft defines production-grade systems in terms of traceability, bounded retries, explicit state, cost controls, and scoped human intervention under pressure.",
    citations: [
      {
        sourceId: "book-control-catalog",
        label: "Production-Grade AI Systems, Control Catalog",
        snippet:
          "A production-grade system ... behaves predictably under stress ... bounds cost and blast radius ... allows humans to intervene without improvisation."
      }
    ]
  },
  {
    title: "Career Arc",
    body:
      "The experience history supports a path from hands-on infrastructure and hybrid systems work into DevOps, platform engineering, and independent consulting centered on secure automation, GitOps, policy enforcement, and AI-assisted control systems.",
    citations: [
      {
        sourceId: "linkedin-positions",
        label: "LinkedIn Positions export",
        snippet:
          "Built end-to-end delivery pipelines with Jenkins, GitHub Actions, and ArgoCD ... integrating Vault, RBAC, and OPA to enforce least-privilege, zero-trust defaults."
      }
    ]
  }
];

export const flagshipProjects: Project[] = [
  {
    slug: "governance-first-rag",
    title: "Governance-First RAG Ingestion Release Platform",
    category: "AI Governance",
    summary:
      "A modular ingestion control plane that treats RAG ingestion as software delivery instead of a single script.",
    problem:
      "Most RAG pipelines hard-wire ingestion, chunking, embedding, and release into an opaque flow with weak auditability and weak rollback behavior.",
    built:
      "Derrick describes a release lifecycle for ingestion with pluggable stages, policy-driven quality and safety gates, RBAC, audit trails, and promote or rollback semantics.",
    relevance:
      "This is the clearest direct evidence of AI governance positioning: policy gates, release controls, observability, and auditability around retrieval infrastructure.",
    technologies: ["RAG", "RBAC", "Embeddings", "Policy Gates", "Audit Trails"],
    repo: "https://github.com/derrickSh43/Governance-First-RAG-Ingestion-Release-Platform",
    flagship: true,
    citations: [
      {
        sourceId: "linkedin-projects",
        label: "LinkedIn Projects export",
        snippet:
          "Content moves through a release lifecycle (ingest -> validate -> promote -> rollback) ... All actions are observable and auditable."
      }
    ]
  },
  {
    slug: "secure-event-logging",
    title: "Secure Log Ingestion and Event Routing Pipeline",
    category: "AI Security",
    summary:
      "A serverless security pipeline for log ingestion, threat detection, enrichment, and escalation using AWS-native services and secure automation patterns.",
    problem:
      "Security telemetry loses value when ingestion, routing, enrichment, and escalation paths are loosely governed or lack fine-grained permissions.",
    built:
      "The project is described as event-driven and security-focused, with fine-grained IAM, log enrichment, automated alerting, and a Jenkins pipeline integrated with Vault, SonarQube, Snyk, JFrog, and Jira.",
    relevance:
      "It reinforces secure automation, event-driven controls, and practical security operations rather than abstract AI claims.",
    technologies: ["AWS Lambda", "IAM", "Jenkins", "Vault", "Snyk", "JFrog", "Jira"],
    repo: "https://github.com/derrickSh43/Secure_Serverless_Event_Driven_Logging_System",
    flagship: true,
    citations: [
      {
        sourceId: "linkedin-projects",
        label: "LinkedIn Projects export",
        snippet:
          "secure, event-driven serverless architecture for log ingestion, threat detection, and security escalation ... fine-grained IAM controls, log enrichment, and automated alerting."
      },
      {
        sourceId: "linkedin-projects",
        label: "LinkedIn Projects export",
        snippet:
          "Jenkins pipeline designed to automate secure log ingestion, scanning, and artifact handling, with integrations across Vault, SonarQube, Snyk, JFrog, and Jira."
      }
    ]
  },
  {
    slug: "kubernetes-lab",
    title: "Enterprise-Ready Kubernetes Lab with RBAC, CI/CD, HPA, and Observability",
    category: "AI Infrastructure",
    summary:
      "A production-style Kubernetes lab that packages RBAC, multi-namespace design, autoscaling, CI/CD, and observability into a single platform exercise.",
    problem:
      "Platform claims are weak when they only show cluster deployment without policy, scaling, release, or observability controls.",
    built:
      "The project description cites GKE, YAML, Helm, Terraform, fine-grained RBAC, multiple namespaces, HPA, Jenkins and GitHub Actions, plus Prometheus and Grafana dashboards.",
    relevance:
      "It is strong evidence for platform engineering depth that underpins secure AI infrastructure and governed runtime environments.",
    technologies: ["GKE", "Kubernetes", "RBAC", "Helm", "Terraform", "Prometheus", "Grafana"],
    repo: "https://github.com/derrickSh43/Enterprise-Ready-Kubernetes-Lab-with-RBAC-CI-CD-HPA",
    flagship: true,
    citations: [
      {
        sourceId: "linkedin-projects",
        label: "LinkedIn Projects export",
        snippet:
          "Simulates real-world enterprise infrastructure with fine-grained RBAC, multiple namespaces, Horizontal Pod Autoscaling, CI/CD, and Prometheus/Grafana dashboards."
      }
    ]
  },
  {
    slug: "site-to-site-vpn",
    title: "Multi-Cloud Site-to-Site VPN",
    category: "Cloud Infrastructure",
    summary:
      "A Terraform-based AWS to GCP HA VPN with BGP for dynamic routing and failover.",
    problem:
      "Cross-cloud platforms need resilient network connectivity and explicit routing controls, especially when shared services or AI workloads span providers.",
    built:
      "The project provisions redundant VPN tunnels, dynamic route advertisement, and modular Terraform for both AWS and GCP sides.",
    relevance:
      "This supports the cloud and infrastructure side of Derrick's positioning, especially where governed AI systems depend on cross-cloud platform design.",
    technologies: ["Terraform", "AWS", "GCP", "HA VPN", "BGP"],
    repo: "https://github.com/derrickSh43/SitetoSiteVPN",
    citations: [
      {
        sourceId: "linkedin-projects",
        label: "LinkedIn Projects export",
        snippet:
          "Creates a Site-to-Site IPSec VPN between AWS and GCP ... Uses BGP for dynamic route advertisement and automatic failover."
      }
    ]
  }
];

export const supportingProjects: Project[] = [
  {
    slug: "smartresume",
    title: "SmartResume Terraform Project",
    category: "Serverless Application",
    summary:
      "A serverless application for authenticated resume generation using Cognito, Lambda, DynamoDB, S3, CloudFront, and API Gateway.",
    problem:
      "Useful as a proof of practical AWS serverless delivery, though less aligned to AI security or governance than the flagship work.",
    built:
      "The project provisions the full stack through Terraform with AWS-native authentication and storage components.",
    relevance:
      "Included as supporting infrastructure evidence, not as a positioning anchor.",
    technologies: ["Terraform", "Cognito", "Lambda", "DynamoDB", "S3", "CloudFront"],
    citations: [
      {
        sourceId: "linkedin-projects",
        label: "LinkedIn Projects export",
        snippet:
          "save skills and job descriptions to DynamoDB, and generate tailored resumes stored in S3."
      }
    ]
  },
  {
    slug: "multi-region-siem",
    title: "Multi-Region Hub-and-Spoke Web Application with Centralized SIEM",
    category: "Observability",
    summary:
      "A seven-region AWS Terraform deployment with a centralized Loki and Grafana logging hub connected through Transit Gateway peering.",
    problem:
      "Distributed applications need central visibility and network topology that can support multi-region operations.",
    built:
      "The architecture combines ALBs, ASGs, NAT and internet gateways, Promtail shipping, and centralized SIEM-style logging.",
    relevance:
      "Strong supporting material for cloud architecture and centralized observability; weaker than the flagship projects for AI-specific positioning.",
    technologies: ["Terraform", "AWS", "Transit Gateway", "Loki", "Grafana", "Promtail"],
    citations: [
      {
        sourceId: "linkedin-projects",
        label: "LinkedIn Projects export",
        snippet:
          "architecture spans 7 regions in a hub-and-spoke configuration, featuring centralized logging and monitoring with Loki and Grafana."
      }
    ]
  }
];

export const experience = [
  {
    company: "Independent Technical Development & Consulting",
    title: "Senior Cloud Engineer | DevSecOps & Infrastructure Automation (AI-Assisted Systems)",
    period: "Nov 2021 - Present",
    highlights: [
      "Architected an internal AI platform strategy grounded in Control Catalog v1.0 standards.",
      "Built delivery pipelines with Jenkins, GitHub Actions, and ArgoCD, integrating Vault, RBAC, and OPA.",
      "Designed secure AWS and GCP infrastructure patterns and documented 50+ guided labs."
    ],
    citations: [
      {
        sourceId: "linkedin-positions",
        label: "LinkedIn Positions export",
        snippet:
          "Architected an internal AI platform strategy grounded in Control Catalog v1.0 standards ... policy-as-code ... zero-trust defaults."
      }
    ]
  },
  {
    company: "TEKsystems - Silicon Valley Bank",
    title: "Infrastructure Engineer",
    period: "Apr 2021 - Oct 2021",
    highlights: [
      "Managed system inventory and configuration with SCCM and ServiceNow.",
      "Applied vulnerability scanning and AWS security principles in a banking environment.",
      "Provisioned AWS infrastructure and federated authentication to support remote operations."
    ],
    citations: [
      {
        sourceId: "linkedin-positions",
        label: "LinkedIn Positions export",
        snippet:
          "Implemented vulnerability scanning and remediation using Rapid7 ... Applied AWS Well-Architected Framework security principles ensuring banking compliance standards."
      }
    ]
  },
  {
    company: "Myticas Consulting ULC",
    title: "DevOps Engineer",
    period: "Oct 2020 - Apr 2021",
    highlights: [
      "Managed Active Directory, RBAC policies, PowerShell automation, and Azure or Office 365 administration.",
      "Handled patching, vulnerability scanning, and hybrid identity operations."
    ],
    citations: [
      {
        sourceId: "linkedin-positions",
        label: "LinkedIn Positions export",
        snippet:
          "Administered enterprise Active Directory ... Implemented RBAC policies ... Developed PowerShell scripts for hybrid on-premises/cloud identity synchronization."
      }
    ]
  },
  {
    company: "CMOC",
    title: "IT Infrastructure Specialist",
    period: "Jul 2017 - Jul 2019",
    highlights: [
      "Built AWS serverless applications, CI/CD pipelines, and Terraform-based provisioning in a fast-growing environment.",
      "Handled hybrid operations from desktop support to cloud architecture during business unit integration."
    ],
    citations: [
      {
        sourceId: "linkedin-positions",
        label: "LinkedIn Positions export",
        snippet:
          "Designed and deployed serverless applications on AWS ... Built CI/CD pipelines using AWS CodePipeline and Git ... Utilized Terraform for infrastructure provisioning."
      }
    ]
  }
];

export const credentials = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    period: "Sep 2024 - Sep 2027",
    source: "LinkedIn Certifications export"
  },
  {
    name: "CEH v10 (Certified Ethical Hacker)",
    period: "Mar 2020 - Mar 2023",
    source: "LinkedIn Certifications export"
  }
];

export const skillGroups = [
  {
    title: "AI Security and Governance",
    items: [
      "AI Infrastructure & Inference Gateways",
      "RAG Infrastructure & Retrieval Integrity",
      "AI System Governance & Control Planes",
      "Zero Trust Architecture",
      "Policy-as-Code & Identity-First Security"
    ]
  },
  {
    title: "Platform and Cloud",
    items: [
      "Kubernetes Architecture (EKS, GKE)",
      "Cloud Architecture (AWS, GCP)",
      "Infrastructure as Code (Terraform)",
      "Multi-Cloud Architecture",
      "Event-Driven Architecture"
    ]
  },
  {
    title: "Delivery and Operations",
    items: [
      "GitOps (ArgoCD)",
      "CI/CD Automation (Jenkins, GitHub Actions)",
      "Observability & Incident Response (Prometheus, Grafana)",
      "Secrets Management",
      "Site Reliability Engineering (SRE)"
    ]
  }
];

export const writingThemes: WritingTheme[] = [
  {
    title: "Production is a behavior, not a launch event",
    summary:
      "The manuscript defines production-grade AI around how systems behave under stress, degraded dependencies, retries, and operator intervention.",
    excerpt:
      "Production is a behavioral state: how a system responds when conditions are no longer ideal, assumptions are violated, and humans are forced to intervene.",
    citations: [
      {
        sourceId: "book-ch1",
        label: "Production-Grade AI Systems, Chapter 1",
        snippet:
          "Production is not a moment in time ... Production is a behavioral state."
      }
    ]
  },
  {
    title: "Day-3 engineering is the real AI infrastructure problem",
    summary:
      "The book argues that most systems reach prototype and even early operations, then fail when retries, ambiguous correctness, cost, and human recovery enter the picture.",
    excerpt: "Day-3 engineering asks: Can the system survive real usage without degrading into risk?",
    citations: [
      {
        sourceId: "book-ch2",
        label: "Production-Grade AI Systems, Chapter 2",
        snippet:
          "Most AI systems reach Day-1 quickly. Many reach Day-2 with effort. Very few are designed for Day-3."
      }
    ]
  },
  {
    title: "Controls over optimism",
    summary:
      "The core control catalog emphasizes identity, sandboxing, output handling, retrieval integrity, bounded retries, cost budgets, and operator runbooks as non-negotiable constraints.",
    excerpt: "The controls define outcomes, not tools.",
    citations: [
      {
        sourceId: "book-appendix-a",
        label: "Production-Grade AI Systems, Appendix A",
        snippet:
          "SEC-01 -- Identity & Session Integrity ... AI-02 -- RAG Retrieval Integrity and Drift Control ... CST-03 -- Per-Principal Cost Budgets and Abuse Guards."
      }
    ]
  }
];

export const consultingLanes = [
  {
    title: "Secure AI platform design",
    description:
      "Architecture work around identity propagation, isolation, observability, bounded execution, and operator intervention for live AI systems."
  },
  {
    title: "Governed RAG and ingestion controls",
    description:
      "Release-gated ingestion pipelines, retrieval integrity checks, chunking and embedding policy, audit trails, and rollback-aware promotion flows."
  },
  {
    title: "Platform hardening for Kubernetes and cloud",
    description:
      "RBAC, GitOps, policy enforcement, observability, and secure automation patterns for AWS, GCP, and Kubernetes environments."
  },
  {
    title: "Architecture reviews and control catalogs",
    description:
      "Operator-first reviews of state transitions, retry behavior, cost controls, output handling, and failure recovery paths."
  }
];

export const sourceMap = {
  used: [
    {
      id: "linkedin-profile",
      path: "extracted/linkedin-complete/Profile.csv",
      topics: ["headline", "summary", "location", "positioning"]
    },
    {
      id: "linkedin-positions",
      path: "extracted/linkedin-complete/Positions.csv",
      topics: ["experience", "operations", "security", "platform engineering"]
    },
    {
      id: "linkedin-projects",
      path: "extracted/linkedin-complete/Projects.csv",
      topics: ["project descriptions", "governed RAG", "Kubernetes", "serverless security"]
    },
    {
      id: "linkedin-certifications",
      path: "extracted/linkedin-complete/Certifications.csv",
      topics: ["credentials"]
    },
    {
      id: "linkedin-skills",
      path: "extracted/linkedin-complete/Skills.csv",
      topics: ["skills taxonomy", "AI infrastructure", "policy", "cloud"]
    },
    {
      id: "book",
      path: "Production-Grade AI Systems.pdf",
      topics: ["production-grade AI", "control catalog", "governance-first architecture"]
    },
    {
      id: "repo-links",
      path: "git.txt",
      topics: ["repo curation list"]
    }
  ],
  excluded: [
    {
      source: "extracted/linkedin-complete/Articles/Articles/cs50-vigenerec-derrick-weil.html",
      reason: "Too old and off-positioning for AI security, AI infrastructure, and AI governance."
    },
    {
      source: "extracted/linkedin-complete/Articles/Articles/excited-share-my-latest-projectan-automated-multi-vpc-derrick-weil-t9hyc.html",
      reason: "Thin writeup; useful only as weak support for Terraform practice, not flagship positioning."
    },
    {
      source: "extracted/linkedin-complete/Articles/Articles/new-terraform-project-secure-scalable-web-server-setup-derrick-weil-c6xyc.html",
      reason: "Supports AWS and Terraform familiarity but is too lightweight for primary site messaging."
    },
    {
      source: "Google Doc links in git.txt",
      reason: "Referenced but not inspectable from the provided local materials during this build, so not used for claims."
    },
    {
      source: "AI_Assisted_learning_toy and Armageddo1.2.1- repo links",
      reason: "Repo names and local evidence did not support the target positioning strongly enough to feature them."
    }
  ]
};

export const chatbotNotes = {
  retrieval:
    "The Ask Derrick route uses a pre-indexed local corpus built from approved excerpts in the site data file. It scores chunks by token overlap, returns only local evidence, and answers with concise grounded synthesis plus citations.",
  controls:
    "The route applies prompt-injection refusal rules, input and output caps, request timeouts, in-memory burst and daily rate limits, cache hits for repeated questions, and a cooldown circuit breaker when abuse thresholds are crossed."
};

export const adminNotes = [
  "Update curated facts in lib/site-data.ts after verifying them against the exported source files.",
  "Add or remove projects by editing the flagshipProjects and supportingProjects arrays; keep unsupported repos out.",
  "Add book excerpts only from material you are comfortable publishing, then run `npm run reindex` to rebuild the search snapshot.",
  "If you later wire the Ask endpoint to a server-side model, keep retrieval local-first and preserve the current refusal and citation checks."
];

export const corpus: CorpusChunk[] = [
  {
    id: "profile-positioning",
    topic: "AI systems positioning",
    tags: ["ai security", "ai infrastructure", "governance", "controls"],
    summary:
      "Derrick frames his work around production-grade cloud and AI infrastructure built for scale, cost volatility, and security threats.",
    source: "LinkedIn Profile export",
    evidence:
      "I build production-grade cloud and AI infrastructure designed to survive real-world scale, cost volatility, and security threats."
  },
  {
    id: "profile-controls",
    topic: "AI control strategy",
    tags: ["identity", "sandboxing", "guardrails", "ai-trism"],
    summary:
      "His profile highlights AI-TRiSM-aligned controls, deterministic state transitions, sandboxed execution, and policy-gated workflows.",
    source: "LinkedIn Profile export",
    evidence:
      "Implementing AI-TRiSM-aligned controls that enforce identity propagation, contextual traceability, and policy-gated execution."
  },
  {
    id: "profile-cost",
    topic: "AI cost governance",
    tags: ["finops", "cost", "inference", "budgets"],
    summary:
      "The source material explicitly mentions GPU FinOps and cost attribution middleware to prevent runaway inference spend.",
    source: "LinkedIn Profile export",
    evidence:
      "Building GPU FinOps and cost attribution middleware to prevent runaway inference spend and enforce real-time budget limits."
  },
  {
    id: "profile-isolation",
    topic: "Model security",
    tags: ["security", "isolation", "sandboxing", "blast radius"],
    summary:
      "Model isolation and sandboxing are presented as ways to reduce blast radius and cross-tenant risk.",
    source: "LinkedIn Profile export",
    evidence:
      "Deploying model isolation and sandboxing strategies to reduce blast radius and cross-tenant risk."
  },
  {
    id: "project-rag",
    topic: "Governed RAG",
    tags: ["rag", "governance", "audit", "rbac", "release"],
    summary:
      "The governance-first RAG project treats ingestion as a release lifecycle with validation, promotion, rollback, policy gates, audit trails, and RBAC.",
    source: "LinkedIn Projects export",
    evidence:
      "Content moves through a release lifecycle (ingest -> validate -> promote -> rollback) ... Quality, safety, and compliance are enforced through gates."
  },
  {
    id: "project-logging",
    topic: "Security pipeline",
    tags: ["security", "serverless", "iam", "alerts", "logs"],
    summary:
      "The secure log pipeline is described as an AWS-native event-driven architecture with fine-grained IAM, enrichment, and automated alerting.",
    source: "LinkedIn Projects export",
    evidence:
      "secure, event-driven serverless architecture for log ingestion, threat detection, and security escalation ... fine-grained IAM controls, log enrichment, and automated alerting."
  },
  {
    id: "project-kubernetes",
    topic: "Kubernetes platform depth",
    tags: ["kubernetes", "rbac", "gke", "observability", "ci/cd"],
    summary:
      "The Kubernetes lab demonstrates RBAC, multiple namespaces, HPA, CI/CD, and Prometheus and Grafana observability on GKE.",
    source: "LinkedIn Projects export",
    evidence:
      "Simulates real-world enterprise infrastructure with fine-grained RBAC ... Horizontal Pod Autoscaling ... CI/CD with Jenkins and GitHub Actions ... Prometheus/Grafana dashboards."
  },
  {
    id: "book-day3",
    topic: "Day-3 engineering",
    tags: ["operations", "day-3", "survivability", "retries"],
    summary:
      "The book treats Day-3 engineering as the question of whether a system survives real usage without degrading into risk.",
    source: "Production-Grade AI Systems, Chapter 2",
    evidence: "Day-3 engineering asks: Can the system survive real usage without degrading into risk?"
  },
  {
    id: "book-production",
    topic: "Production-grade definition",
    tags: ["production-grade", "stress", "operators", "failure"],
    summary:
      "Production is defined as system behavior under stress, not as a deployment milestone.",
    source: "Production-Grade AI Systems, Chapter 1",
    evidence:
      "Production is a behavioral state: how a system responds when conditions are no longer ideal, assumptions are violated, and humans are forced to intervene."
  },
  {
    id: "book-controls",
    topic: "Control catalog",
    tags: ["identity", "sandboxing", "output handling", "retrieval", "cost"],
    summary:
      "The control catalog names identity integrity, sandboxed execution, output handling, traceability, retrieval integrity, bounded retries, cost budgets, and operator runbooks as core controls.",
    source: "Production-Grade AI Systems, Appendix A",
    evidence:
      "SEC-01 -- Identity & Session Integrity ... SEC-02 -- Sandboxed Execution Isolation ... AI-02 -- RAG Retrieval Integrity and Drift Control."
  },
  {
    id: "positions-gitops",
    topic: "Secure platform engineering",
    tags: ["gitops", "opa", "vault", "rbac", "argo"],
    summary:
      "Current consulting experience includes Jenkins, GitHub Actions, ArgoCD, Vault, RBAC, and OPA for least-privilege defaults.",
    source: "LinkedIn Positions export",
    evidence:
      "Built end-to-end delivery pipelines with Jenkins, GitHub Actions, and ArgoCD. Integrated TruffleHog, SAST, SCA, Vault, RBAC, and OPA."
  },
  {
    id: "positions-observability",
    topic: "Observability and incident response",
    tags: ["observability", "prometheus", "grafana", "incident response"],
    summary:
      "The source data describes Prometheus and Grafana deployments with alerting and policy gates to improve response time.",
    source: "LinkedIn Positions export",
    evidence:
      "Deployed Prometheus and Grafana observability stacks with alerting and policy gates."
  }
];
