export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  current?: boolean;
}

export const education: Education[] = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    institution: 'VIT-AP University',
    period: '2023 – 2027',
    score: '9.23',
    scoreLabel: 'CGPA',
    current: true,
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sastra Academy',
    period: '2021 – 2023',
    score: '98.5%',
    scoreLabel: 'Score',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Scholars International School',
    period: '2021',
    score: '99.16%',
    scoreLabel: 'Score',
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  pdfUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: 'Jun 2026',
    pdfUrl: '/certificates/AZ 900.pdf',
  },
  {
    title: 'Generative AI Using IBM watsonx',
    issuer: 'IBM Developer Skills Network',
    date: 'Jun 2025',
    pdfUrl: '/certificates/IBM.pdf',
  },
  {
    title: 'TCS iON Career Edge: Generative AI Essentials',
    issuer: 'TCS',
    date: 'Jun 2026',
    pdfUrl: '/certificates/TCS.pdf',
  },
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: 'AWS Academy',
    pdfUrl: '/certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251029-33-86cdra.pdf',
  },
  {
    title: 'AWS Academy Cloud Architecting',
    issuer: 'Amazon Web Services',
    date: 'AWS Academy',
    pdfUrl: '/certificates/AWS_Academy_Graduate___Cloud_Architecting___Training_Badge_Badge20251029-32-9rgu3s.pdf',
  },
];
