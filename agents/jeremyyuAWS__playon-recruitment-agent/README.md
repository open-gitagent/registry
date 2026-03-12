# playon-recruitment-manager

Comprehensive multi-agent recruitment and HR management system for high-volume hiring. A managerial agent orchestrating 7 specialized sub-agents across the full employee lifecycle — from hiring manager intake through onboarding, performance management, succession planning, and offboarding.

## Try It

```bash
# Run directly from GitHub
npx @open-gitagent/gitagent run -r https://github.com/jeremyyuAWS/playon-recruitment-agent

# Or with a prompt
gitagent run -r https://github.com/jeremyyuAWS/playon-recruitment-agent -p "Stack rank these 50 applications for the Senior Engineer role"
```

## What It Can Do

### Talent Acquisition
- Stack-rank thousands of applications with weighted match scores (0-100)
- Detect prompt injection in resumes (hidden text, encoding tricks)
- Blind diversity screening — redacts identifying info before scoring
- Hiring manager intake — structured kickoff to extract requirements
- Job description optimization — remove bias, improve clarity
- Proactive sourcing via LinkedIn Recruiter, job boards, talent CRM
- Candidate rediscovery — resurface past applicants for new roles

### Hiring Pipeline
- Requisition approval workflow (manager → dept head → finance → HR)
- AI-powered pre-screening calls and email outreach
- Technical assessments (HackerRank/Codility/CodeSignal)
- Automated interview scheduling with calendar matching
- Role-specific interview question generation by seniority level
- Structured feedback collection and debrief summaries
- Reference check analysis with consistency and red flag detection
- Offer generation with DocuSign routing
- Counter-offer scenario modeling (match, beat, repackage, walk away)

### Candidate Experience
- Stage-appropriate rejection messaging (screen through finalist)
- Candidate NPS surveys at each pipeline stage
- Proactive status updates — nobody gets ghosted
- Silver medal program for finalist re-engagement

### HR & Employee Lifecycle
- End-to-end onboarding (equipment, SSO access, training, buddy, 30/60/90)
- HR helpdesk — policy queries, benefits, leave, handbook
- Employee sentiment tracking with pulse surveys
- Quarterly performance reviews and manager coaching
- Skills gap analysis and succession planning
- Offboarding workflow with exit interviews and access revocation
- Immigration and visa tracking with expiry alerts
- Internal mobility and employee transfer workflows

### Reporting & Compliance
- C-suite conversational dashboard for hiring metrics and attrition
- Workforce planning and headcount forecasting
- EEO-1, OFCCP, adverse impact, pay equity compliance
- Annual compensation review cycle management
- Recruiting spend tracking and channel ROI

## Architecture

```
Manager Agent (orchestrator)
├── Talent Acquisition Agent — resume parsing, match scoring, stack ranking
├── Pre-Screening Agent — outreach, compensation validation, AI calling
├── Talent Operations Agent — requisitions, job posting, mobility, offboarding
├── Candidate Experience Agent — rejections, NPS, status updates, employer brand
├── HR Helpdesk Agent — onboarding, policy queries, buddy program
├── Performance Tracking Agent — quarterly reviews, sentiment, retention
└── C-Suite Reporting Agent — executive metrics, analytics, forecasting
```

## By the Numbers

| Component | Count |
|-----------|-------|
| Sub-Agents | 7 |
| Skills | 25 |
| Tools | 22 |
| Lifecycle Hooks | 8 |
| End-to-End Workflows | 6 |
| Knowledge Documents | 11 |
| Environment Configs | 3 (production, sandbox, development) |
