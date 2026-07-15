export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'SQL'],
  },
  {
    category: 'Cloud',
    skills: ['Microsoft Azure', 'AWS', 'IBM Cloud'],
  },
  {
    category: 'AI / ML',
    skills: [
      'Generative AI',
      'IBM watsonx.ai',
      'Prompt Engineering',
      'Few-Shot Prompting',
      'NLP',
      'CNN',
      'Deep Learning',
      'FLAN-T5',
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Jupyter',
      'IBM Watson Studio',
      'IBM Cloud Object Storage',
    ],
  },
];
