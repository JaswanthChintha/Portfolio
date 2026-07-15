export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Education',    href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',      href: '#contact' },
];

export const personalInfo = {
  name: 'Chinta Lakshmi Nivas Jaswanth',
  shortName: 'Jaswanth Chinta',
  title: 'Software Engineer',
  roles: ['Full-Stack Developer', 'MERN Engineer', 'AI/GenAI Developer'],
  heroLine: 'I build scalable full-stack web apps and AI-powered tools.',
  location: 'Piduguralla, Andhra Pradesh, India',
  email: 'jaswanth.chintha12@gmail.com',
  phone: '+91 6301711057',
  linkedin: 'https://www.linkedin.com/in/lakshmi-nivas-jaswanth-chinta-29a289291',
  github: 'https://github.com/JaswanthChintha',
  resumeUrl: '/resume.pdf',
  // Get a free access key from https://web3forms.com/ to receive submissions silently in your inbox
  web3FormsKey: (import.meta.env.VITE_WEB3FORMS_KEY as string) || '0f376896-4f23-4450-969f-3f0dbfb9a0ca', 
} as const;

export const aboutText = `Final-year B.Tech CSE student at VIT-AP University, graduating 2027 with a CGPA of 9.23. I build full-stack applications with the MERN stack and design clean REST APIs — the kind of systems that hold up when you stress-test them.

My current focus is on the intersection of backend engineering and generative AI: I've worked with IBM watsonx foundation models, applied few-shot prompting and NLP techniques, and built pipelines that take unstructured data and make it actionable. On the cloud side, I've worked across Azure, AWS, and IBM Cloud.

I'm looking for software engineering roles where I can ship real products, own problems end-to-end, and learn from engineers who have strong opinions about quality.`;
