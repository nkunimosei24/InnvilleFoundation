import { Rocket, Radio, Coffee, Wrench, Briefcase, Users, Handshake, Megaphone } from "lucide-react";
import NYELogo from "../assets/images/nye.png";
import BizbridgeLogo from "../assets/images/biz.jpg";
import skillSetLabLogo from "../assets/images/skill.jpg";
import NIPLogo from "../assets/images/nip.png";
import GTBLogo from "../assets/images/gtb.png";

export const programs = [
  {
    slug: "venture-now",
    title: "Venture Now Incubation Program",
    tagline: "Turning Ideas into Scalable Startups",
    category: "Entrepreneurship",
    icon: Rocket,
    description:
      "An intensive startup incubation program that helps early-stage founders build, test, and launch scalable businesses through mentorship, structured execution, and real-time product development.",
    opportunity: {
      intro:
        "Ghana has one of the youngest populations in the world, with over 50% under the age of 25. This presents a powerful opportunity for innovation and entrepreneurship. However, while interest in startups is growing, many young founders struggle to move beyond ideas.",
      points: [
        "Limited access to structured support",
        "Lack of mentorship and guidance",
        "Weak product development and market validation",
        "A gap between learning and actual execution",
      ],
      closing: "The result? Many ideas never launch, and those that do often struggle to survive.",
    },
    approach: {
      intro:
        "Venture Now is designed as a startup launch system, not just a training program. Over an intensive 12-week incubation period, we support aspiring and early-stage founders to build, test, and launch real startups.",
      points: [
        "Practical training sessions on startup fundamentals",
        "Weekly one-on-one mentorship from experienced founders and industry experts",
        "Dedicated build time to develop real products",
        "Continuous testing and iteration based on user feedback",
      ],
    },
    different: [
      { title: "Execution-Driven Model", text: "Founders build their startups in real time" },
      { title: "Mentorship-Led Support", text: "Personalized guidance improves decision-making and growth" },
      { title: "Weekly Accountability", text: "Clear goals and progress tracking to maintain momentum" },
      { title: "Co-Founder Matching", text: "Helping founders build strong, complementary teams" },
    ],
    whoFor: [
      "Aspiring entrepreneurs with innovative, tech-enabled ideas",
      "Early-stage founders looking for structure, mentorship, and growth support",
      "Young people ready to build solutions in areas like fintech, healthtech, edtech, and digital platforms",
    ],
    gain: {
      intro: "By the end of the program, participants don't just learn—they build. Each founder is supported to develop:",
      points: [
        "A Minimum Viable Product (MVP)",
        "A validated business model",
        "An investor-ready pitch deck",
        "A functional startup team",
      ],
      closing:
        "At least 70% of participants are expected to successfully launch their startups, moving from idea to execution within just three months.",
    },
    phases: [
      { title: "Validation Phase", text: "Defining the problem, understanding the market, and building the right team" },
      { title: "Build Phase", text: "Developing and testing a functional product (MVP)" },
      { title: "Launch Phase", text: "Going to market, gaining early traction, and preparing for funding" },
    ],
    impact: [
      "Enabling young people to create their own jobs",
      "Supporting the growth of scalable, tech-driven businesses",
      "Strengthening Ghana's startup ecosystem",
      "Driving innovation and economic growth",
    ],
    whyMatters:
      "At Innville Foundation, we believe the future of work will be shaped by builders—young people who can create solutions, launch businesses, and generate opportunities for others. Venture Now exists to ensure that great ideas do not remain ideas—but become real, impactful ventures.",
    getInvolved:
      "The Venture Now Incubation Program is open to young people across Ghana. Register for free and be part of a growing community of founders and innovators shaping the future.",
  },

  {
    slug: "startup-series",
    title: "Startup Series",
    tagline: "Learning from Those Who Have Built Before",
    category: "Entrepreneurship",
    icon: Radio,
    description:
      "An episode-based learning experience where aspiring founders learn from real entrepreneurs sharing practical lessons on building, scaling, and sustaining startups.",
    opportunity: {
      intro:
        "Building a startup is complex. From validating an idea to acquiring customers and managing finances, many aspiring founders struggle—not because they lack passion, but because they lack practical, real-world guidance.",
      points: [
        "Too theoretical",
        "Disconnected from real startup journeys",
        "Lacking access to founders who have actually built and scaled businesses",
      ],
      closing: "This leaves many young entrepreneurs making avoidable mistakes or giving up too early.",
    },
    approach: {
      intro:
        "The Startup Series is an episode-based capacity-building program that runs annually, designed to provide founders with practical knowledge they can apply immediately. Each session is led not just by trainers, but by successful founders and industry leaders who share their real journeys.",
      points: [],
    },
    different: [
      { title: "Founder-Led Learning", text: "Sessions are led by entrepreneurs who have built real businesses" },
      { title: "Practical & Relatable", text: "Focus on real challenges, not just theory" },
      { title: "Episode-Based Format", text: "Flexible, engaging, and easy to follow" },
      { title: "Ecosystem Access", text: "Exposure to networks, mentors, and opportunities" },
    ],
    whoFor: [
      "Aspiring entrepreneurs exploring startup ideas",
      "Early-stage founders looking to strengthen their knowledge",
      "Young people interested in building innovative and scalable businesses",
    ],
    gain: {
      intro: "Through the Startup Series, participants:",
      points: [
        "Understand the fundamentals of building a startup",
        "Learn how to validate ideas and find product-market fit",
        "Gain insights into branding, finance, team building, and customer acquisition",
        "Build confidence to take the next step in their entrepreneurial journey",
      ],
    },
    impact: [
      "Equip hundreds of young people with practical entrepreneurial knowledge every year",
      "Inspire action through real founder stories",
      "Strengthen the pipeline of founders entering programs like Venture Now",
      "Contribute to a more informed and capable startup ecosystem",
    ],
    whyMatters:
      "At Innville Foundation, we believe that access to the right knowledge at the right time can change everything. The Startup Series ensures that young people don't just dream about building startups—they understand what it truly takes and are better prepared to succeed.",
    getInvolved:
      "The Startup Series is open to young people across Ghana. Register for free and be part of a growing community of founders and innovators shaping the future.",
  },

  {
    slug: "skillset-lab",
    title: "SkillSet Lab",
    tagline: "Gateway to Skills, Work & Income",
    category: "Skills Training & Development",
    logo: skillSetLabLogo,
    icon: Wrench,
    linkedin: "https://www.linkedin.com/company/skillset-lab/", 
    description:
      "A practical skills development program that equips young people with digital, entrepreneurial, and workplace skills, creating direct pathways to income and employment opportunities.",
    opportunity: {
      intro:
        "Youth unemployment in Ghana remains a critical challenge—not because young people lack talent, but because many lack market-relevant skills, practical experience, and access to opportunities.",
      points: [
        "Limited access to hands-on, practical training",
        "A mismatch between skills and industry needs",
        "Little to no workplace experience",
        "Difficulty transitioning from learning to earning",
      ],
      closing: "Without the right support systems, this gap continues to widen.",
    },
    approach: {
      intro:
        "SkillSet Lab runs in cohorts throughout the year on a 14-week intensive model, focused on practical, hands-on learning, ensuring participants don't just learn—but can apply their skills immediately. Training is centered on market-demand, income-generating skills, including:",
      points: [
        "AI for work productivity",
        "Digital marketing",
        "Data analysis",
        "Green skills training",
        "Professional and workplace readiness skills",
        "Problem-solving and productivity tools",
      ],
    },
    pathway: [
      { title: "National Internship Program (NIP)", text: "Graduates are progressed into structured internships where they gain real workplace experience." },
      { title: "Ghana Talent Bank (GTB)", text: "After gaining experience, participants are onboarded into a vetted talent pool connecting them to full-time, freelance, and project-based work." },
    ],
    whoFor: [
      "Young people seeking practical, job-ready skills",
      "Students and graduates preparing for the workforce",
      "Individuals looking to transition into digital and tech-enabled roles",
      "Young women and underserved groups seeking economic opportunities",
    ],
    gain: {
      intro: "Through SkillSet Lab, participants:",
      points: [
        "Acquire practical, income-generating skills",
        "Build confidence and workplace readiness",
        "Gain real-world experience through internships",
        "Access job and freelance opportunities",
        "Become part of a growing network of young professionals",
      ],
    },
    impact: [
      "Fellows Average Completion Rate: 76%",
      "Fellows Placement Rate (jobs, internships, and freelance): 71%",
      "Reducing youth unemployment",
      "Increasing digital and workforce readiness",
      "Creating sustainable income pathways for young people",
      "Strengthening Ghana's talent pipeline for businesses and employers",
    ],
    whyMatters:
      "At Innville Foundation, we believe that skills alone are not enough—opportunity must follow. SkillSet Lab ensures that young people are not just trained, but connected to real pathways that lead to work, income, and long-term economic independence.",
    getInvolved:
      "SkillSet Lab is open to young people across Ghana who are ready to build skills and unlock opportunities. Register for free and join the next cohort.",
  },

  {
    slug: "national-internship-program",
    title: "National Internship Program (NIP)",
    rollingAdmission: true,
    tagline: "From Learning to Real Work Experience",
    category: "Skills Training & Development",
    logo: NIPLogo,
    icon: Briefcase,
    linkedin: "https://www.linkedin.com/company/national-internship-programme/", // TODO: add NIP's LinkedIn page URL
    description:
      "A nationwide internship initiative that connects young people to real workplace experience, mentorship, and career readiness support to transition from learning to earning.",
    opportunity: {
      intro:
        "For many young people in Ghana, the biggest barrier to employment is not education—it is experience. Employers are looking for practical skills and workplace exposure, yet most students and graduates have little or no opportunity to gain it. Each year, thousands of young people enter the job market, but many struggle to secure jobs due to:",
      points: [
        "Lack of hands-on workplace experience",
        "Limited exposure to professional environments",
        "Weak career preparation and guidance",
        "A disconnect between education and industry needs",
      ],
      closing:
        "This creates a cycle where young people are unable to gain experience because they don't have experience.",
    },
    approach: {
      intro:
        "NIP is a flagship nationwide initiative that provides structured, practical workplace experience for students and early-career graduates across Ghana. Through NIP, participants:",
      points: [
        "Work on real tasks and projects",
        "Gain hands-on industry experience",
        "Develop professional and workplace skills",
        "Receive mentorship and performance feedback",
      ],
    },
    whoFor: [
      "Students preparing to enter the workforce",
      "Recent graduates seeking work experience",
      "Young people looking to build practical skills and career direction",
    ],
    gain: {
      intro: "Through NIP, participants:",
      points: [
        "Gain real-world work experience",
        "Build confidence in professional environments",
        "Develop in-demand workplace and soft skills",
        "Strengthen their CVs and career profiles",
        "Improve their chances of securing employment",
      ],
    },
    impact: [
      "Hundreds of young people placed in internships annually",
      "Strong completion rates with measurable workplace performance",
      "A significant percentage of interns transition into full-time roles, freelance work, or extended opportunities",
      "Growing network of partner organizations across multiple sectors",
    ],
    whyMatters:
      "At Innville Foundation, we believe that experience is the bridge between potential and opportunity. NIP ensures that young people are not just qualified on paper—but are work-ready, confident, and competitive in the job market.",
    getInvolved:
      "The National Internship Program is open to students, graduates, and organizations across Ghana. Register for free and be part of a national movement creating pathways to employment.",
  },

  {
    slug: "ghana-talent-bank",
    title: "Ghana Talent Bank (GTB)",
    rollingAdmission: true,
    tagline: "Ghana's Largest Pool of Vetted and Verified Young Talents",
    category: "Skills Training & Development",
    logo: GTBLogo,
    icon: Users,
    linkedin: "https://www.linkedin.com/company/ghana-talent-bank/", 
    description:
      "A national talent platform connecting vetted, job-ready young professionals to employers, freelance opportunities, and full-time roles based on verified experience.",
    opportunity: {
      intro: "Ghana's labor market faces a major disconnect:",
      points: [
        "Employers struggle to find qualified, reliable talent",
        "Young people struggle to access job opportunities",
        "Recruitment processes are often slow, costly, and uncertain",
        "Many talented youth remain unseen and underutilized",
      ],
      closing: "This gap limits productivity, slows business growth, and prolongs unemployment.",
    },
    approach: {
      intro:
        "GTB is a flagship national talent platform that connects employers to a pool of vetted, verified, and job-ready young professionals. Every talent in the system:",
      points: [
        "Has completed structured training and/or internships",
        "Comes with verified work experience",
        "Is assessed based on performance, professionalism, and growth",
      ],
    },
    different: [
      { title: "Verified Talent", text: "Every candidate has a proven track record" },
      { title: "Performance-Based Profiles", text: "Employers access more than just CVs" },
      { title: "Reduced Hiring Risk", text: "Pre-qualified, work-tested candidates" },
      { title: "Diverse Talent Pool", text: "Across roles like admin, marketing, tech, operations, and more" },
    ],
    whoFor: [
      "Employers seeking reliable, job-ready talent",
      "Startups and SMEs looking to scale their teams",
      "Corporates and organizations hiring young professionals",
      "Young people seeking jobs, freelance work, and career opportunities",
    ],
    impact: [
      "Build one of the largest pools of vetted young talent in Ghana",
      "Connect hundreds of young professionals to job opportunities annually",
      "Support businesses with reliable human resource solutions",
      "Strengthen the transition from internship to employment",
    ],
    whyMatters:
      "At Innville Foundation, we believe employment should not be left to chance. GTB is building a data-driven, scalable solution to youth unemployment—one that connects talent to opportunity and powers economic growth.",
    getInvolved:
      "The Ghana Talent Bank is open to both employers and job seekers across Ghana. Join the Talent Bank today and unlock access to verified opportunities.",
  },

  {
    slug: "co-creators-hangout",
    title: "Co-Creators Hangout",
    tagline: "Where Builders Connect, Ideas Grow, and Collaboration Begins",
    category: "Youth Advocacy & Community",
    icon: Coffee,
    description:
      "A monthly community platform where founders, creatives, and innovators connect, collaborate, and build relationships that strengthen the entrepreneurial ecosystem.",
    opportunity: {
      intro:
        "Ghana's entrepreneurial ecosystem is growing, but access to consistent, inclusive, and community-driven spaces remains limited—especially for young and emerging founders.",
      points: [
        "Limited access to peer networks",
        "Lack of collaboration opportunities",
        "Few platforms to share ideas and get feedback",
        "Isolation in their entrepreneurial journey",
      ],
      closing: "Without community, growth becomes slower, and opportunities are harder to access.",
    },
    approach: {
      intro:
        "The Co-Creators Hangout is a monthly community gathering and one of Innville's flagship recurring programs, designed to bring together young founders, creatives, and innovators in a relaxed but intentional environment.",
      points: [
        "Open networking and community bonding",
        "Founder conversations and experience sharing",
        "Idea validation and peer feedback sessions",
        "Opportunities to connect with mentors and ecosystem players",
      ],
    },
    different: [
      { title: "Community-First", text: "Focused on building genuine relationships, not just events" },
      { title: "Consistent Engagement", text: "Held regularly to sustain momentum and connection" },
      { title: "Inclusive Space", text: "Open to builders at all stages—from idea to growth" },
      { title: "Collaboration-Driven", text: "Encourages partnerships, co-founding, and teamwork" },
    ],
    whoFor: [
      "Founders and aspiring entrepreneurs",
      "Creatives, innovators, and problem-solvers",
      "Members of the Innville community and broader ecosystem",
      "Anyone looking to connect, learn, and collaborate",
    ],
    gain: {
      intro: "Through the Co-Creators Hangout, participants:",
      points: [
        "Build meaningful connections and networks",
        "Gain feedback on ideas and projects",
        "Discover collaboration and co-founder opportunities",
        "Stay inspired and motivated through shared experiences",
      ],
    },
    impact: [
      "Strengthen the entrepreneurial ecosystem at the grassroots level",
      "Foster collaboration and peer learning",
      "Connect young people to opportunities within and beyond Innville",
      "Build a strong, supportive community of innovators",
    ],
    whyMatters:
      "At Innville Foundation, we believe that no one builds alone. The Co-Creators Hangout is more than a meet-up—it is a growing community of young people who are committed to building the future together.",
    getInvolved:
      "The Co-Creators Hangout is open to anyone passionate about building, creating, and collaborating. Register for free and become part of a community of co-creators shaping ideas into impact.",
  },

  {
    slug: "bizbridge",
    title: "BizBridge Project",
    rollingAdmission: true,
    tagline: "Connecting Talent to Growing Businesses",
    category: "Entrepreneurship",
    logo: BizbridgeLogo,
    icon: Handshake,
    description:
      "An MSME support initiative that connects skilled interns to SMEs, helping them strengthen operations, improve productivity, and scale—while providing young people with valuable workplace experience.",
    opportunity: {
      intro:
        "Small and Medium-sized Enterprises (SMEs) are the backbone of Ghana's economy, yet many struggle to grow due to limited access to skilled and affordable human resource support. High hiring costs, capacity gaps, and operational inefficiencies often prevent SMEs from scaling, improving productivity, and competing effectively. BizBridge, an initiative of Innville Foundation, is designed to address this gap by providing SMEs across Ghana with structured, affordable support to strengthen their operations and drive growth.",
      points: [],
    },
    approach: {
      intro: "BizBridge delivers targeted business support through a simple, structured model:",
      points: [
        "Needs-Based SME Support — SMEs are assessed and matched with skilled interns from our National Internship Program based on specific operational gaps such as marketing, administration, customer service, IT support, and business operations",
        "Structured 3-Month Engagement Cycles — businesses receive dedicated support (up to 3 interns) over a defined period, ensuring focused execution and measurable results",
        "Ongoing Monitoring & Performance Tracking — Innville Foundation coordinates supervision, tracks progress, and ensures accountability through continuous feedback and evaluation",
        "Flexible Delivery Model — support is provided remotely or in hybrid formats, making it accessible to SMEs across the country",
      ],
    },
    different: [
      { title: "Affordable Access to Talent", text: "SMEs gain access to skilled support without the high cost of full-time hiring." },
      { title: "Designed for Measurable Impact", text: "The program is structured to deliver clear improvements in productivity, sales, digital presence, and operational efficiency." },
      { title: "Tailored to SME Needs", text: "Support is based on real business gaps—not generic solutions—ensuring relevance and value." },
      { title: "Scalable and Nationwide", text: "BizBridge supports SMEs across Ghana, regardless of location or sector." },
    ],
    whoFor: [
      "Micro, Small, and Medium Enterprises (MSMEs) seeking affordable support to grow",
      "Startups and growing businesses looking to improve operations and scale",
      "SMEs with limited internal capacity in areas like marketing, admin, IT, or customer engagement",
      "Business owners looking to reduce workload and improve efficiency",
    ],
    gain: {
      intro: "Through BizBridge, SMEs gain:",
      points: [
        "Increased Productivity — delegate key tasks and focus on strategic growth",
        "Improved Business Operations — strengthen internal systems, workflows, and processes",
        "Stronger Digital Presence — enhance visibility, engagement, and online performance",
        "Cost-Effective Support — access skilled talent at a fraction of traditional hiring costs",
        "Business Growth Opportunities — improve customer reach, sales, and overall performance",
      ],
    },
    impact: [
      "Improved productivity and operational efficiency",
      "Increased customer engagement and digital visibility",
      "Reduction in operational and hiring costs",
      "Strengthened capacity for business growth and sustainability",
      "Continued access to talent through repeat engagement cycles",
    ],
    whyMatters:
      "BizBridge is a practical, scalable solution to one of the biggest barriers facing SMEs—access to the right talent at the right cost. By strengthening SMEs at the operational level, the project drives business growth, supports job creation, and contributes to a more resilient and inclusive economy.",
    getInvolved:
      "Interested in hosting an intern or joining as a participant? Register your interest and be part of the BizBridge network.",
  },

  {
    slug: "nye-summit",
    title: "National Youth Employment Summit (NYE Summit)",
    tagline: "Convening the Ecosystem Around Youth Employment",
    category: "Youth Advocacy & Community",
    logo: NYELogo,
    icon: Megaphone,
    linkedin: "https://www.linkedin.com/company/national-youth-employment-summit/", // TODO: add NYE Summit's LinkedIn page URL
    description:
      "We convene stakeholders across the employment ecosystem to drive dialogue, partnerships, and action on youth employment, while creating direct pathways for young people to access jobs and opportunities.",
    opportunity: {
      intro:
        "The National Youth Employment Summit (NYE Summit) is a flagship annual convening organized by Innville Foundation to unite stakeholders across Ghana's youth employment ecosystem. The summit serves as a national platform for dialogue, collaboration, and action, bringing together government agencies, private sector employers, development partners, civil society organizations, academic/training institutions, and young people.",
      points: [],
    },
    approach: {
      intro: "The summit is structured around two core sessions:",
      points: [
        "Policy Dialogue & Ecosystem Alignment — high-level panels and focused discussions bringing together government, industry, and development partners to align strategies and address key employment challenges",
        "Job Fair & Opportunity Expo — a results-driven engagement featuring on-the-spot interviews, recruitment, internships, and direct interaction between employers and youth",
      ],
    },
    different: [
      { title: "Bridging Policy and Practice", text: "The summit goes beyond discussions by directly linking dialogue to employment outcomes through its job fair model." },
      { title: "A Truly Multi-Stakeholder Platform", text: "It convenes government, private sector, NGOs, training institutions, and youth in one coordinated space—breaking silos across the ecosystem." },
      { title: "Outcome-Oriented Design", text: "Structured to deliver measurable results—targeting at least 25% of participants every year securing jobs, internships, or freelance opportunities, alongside strategic partnerships and actionable policy insights." },
      { title: "National Scope, Local Impact", text: "While national in outlook, the summit ensures direct, practical benefits for individual participants and organizations." },
    ],
    whoFor: [
      "Young People — job seekers, students, recent graduates, and aspiring entrepreneurs",
      "Employers — companies seeking skilled talent and workforce solutions",
      "Government & Policymakers — institutions shaping employment policies and programs",
      "Training & Academic Institutions — organizations building skills and talent pipelines",
      "Development Partners, NGOs & CSOs — actors driving employment and inclusion initiatives",
      "Innovation Hubs & Startups — platforms supporting entrepreneurship and digital jobs",
    ],
    gain: {
      intro: "Participants gain:",
      points: [
        "Direct Access to Opportunities — jobs, internships, training programs, and funding opportunities",
        "Industry Insights & Knowledge — exposure to trends shaping the future of work, skills demand, and emerging sectors",
        "Networking & Collaboration — connections with employers, policymakers, and ecosystem leaders",
        "Career Development Support — CV reviews, mentorship, and guidance on navigating career pathways",
        "Visibility & Exposure (for organizations) — a platform to showcase programs, recruit talent, and build partnerships",
      ],
    },
    impact: [
      "Facilitate employment and internship placements for at least 25% of participating youth each year",
      "Increase awareness and uptake of existing employment programs and initiatives from government and employment ecosystem players",
      "Strengthen collaboration across sectors within the employment ecosystem",
      "Generate actionable insights to inform national employment strategies",
    ],
    whyMatters:
      "The NYE Summit is the only platform in Ghana that convenes the full youth employment ecosystem—transforming dialogue into real jobs, strategic partnerships, and coordinated national action for a more inclusive, future-ready workforce.",
    getInvolved:
      "Interested in attending, speaking, or partnering on the next NYE Summit? Get in touch to learn more.",
  },
];

export function getProgramBySlug(slug) {
  return programs.find((p) => p.slug === slug);
}