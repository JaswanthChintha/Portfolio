export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  result: string;
  highlights: string[];
  stack: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'bay-manager',
    title: 'Bay Manager',
    subtitle: 'Garage Service Management System',
    problem:
      'Garages track vehicle servicing manually — job cards get lost, billing has errors, and customers have zero visibility into where their car is in the service queue.',
    approach:
      'A full-stack MERN application with three role-based dashboards (Admin, Staff, Customer) and a REST API covering the entire service lifecycle: booking, job cards, invoicing, feedback collection, and vehicle tracking. Auth uses JWT with per-role authorization middleware.',
    result:
      'End-to-end service flow consolidated in one system, eliminating the paper trail. Role-based access prevents data leakage across user types. Automated invoice generation cut billing time from minutes to seconds.',
    highlights: [
      'Role-based access control (Admin / Staff / Customer)',
      'Automated invoice generation',
      'Real-time job card tracking',
      'Customer feedback loop',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    github: 'https://github.com/Akshayreddy0910/baymanager.git',
    demo: 'https://baymanager-eight.vercel.app',
  },
  {
    id: 'feedback-classifier',
    title: 'College Feedback Classifier',
    subtitle: 'AI Text Classification Pipeline',
    problem:
      'University departments collect hundreds of open-ended student feedback submissions per semester. Manually reading and categorizing them is slow, inconsistent, and rarely completed before decisions need to be made.',
    approach:
      'An AI pipeline that sends feedback text to IBM watsonx.ai foundation models (FLAN-T5) via a few-shot prompting strategy. The prompt includes labeled examples so the model classifies each entry into predefined categories — curriculum, faculty, facilities, administration — without fine-tuning. Results are then exported as structured CSV reports using IBM Cloud Object Storage.',
    result:
      'Classification that previously required a day of manual work runs in minutes. The few-shot pipeline generalizes across feedback types without retraining. Administrators receive clean, filterable CSVs they can immediately act on.',
    highlights: [
      'Few-shot prompting on FLAN-T5 via IBM watsonx.ai',
      'No fine-tuning — prompt engineering only',
      'Cloud storage integration with IBM COS',
      'Admin-ready CSV output',
    ],
    stack: [
      'Python',
      'IBM watsonx.ai',
      'FLAN-T5',
      'IBM Watson Studio',
      'IBM Cloud Object Storage',
      'NLP',
    ],
    github: 'https://github.com/JaswanthChintha/college-feedback-classifier.git',
    demo: undefined,
  },
];
