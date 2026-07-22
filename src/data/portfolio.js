export const profile = {
  name: 'Ahmad Ijaz',
  title: 'AI / ML Engineer',
  tagline: 'Building intelligent systems that see, understand, and empower.',
  location: 'Lahore, Pakistan',
  email: 'ahmadijaz1009@gmail.com',
  phone: '+92 334 4435420',
  github: 'https://github.com/ahmadijaz1303',
  linkedin: 'https://linkedin.com/in/sheikh-ahmad-ijaz-13q',
  summary:
    'Computer Science graduate specializing in Artificial Intelligence, Machine Learning, and Computer Vision. I build real-time inference pipelines with TensorFlow, MediaPipe, OpenCV, and YOLO — from award-winning assistive technology to production vehicle analytics. Currently interning as a Computer Vision Engineer at Matrix AE.',
  resumePath: '/resume.pdf',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '95%', label: 'Gesture Recognition Accuracy' },
  { value: '96th', label: 'HEC NSCT Percentile' },
  { value: '2×', label: 'Competition Winner' },
  { value: '4+', label: 'CV/ML Projects' },
];

export const skillGroups = [
  {
    title: 'ML & Deep Learning',
    skills: ['TensorFlow', 'Keras', 'TFLite', 'scikit-learn', 'Transfer Learning', 'Model Deployment'],
  },
  {
    title: 'Computer Vision',
    skills: ['YOLOv11', 'ByteTrack', 'MediaPipe', 'OpenCV', 'Object Detection', 'Gesture Recognition', 'Image Segmentation'],
  },
  {
    title: 'Languages & Tools',
    skills: ['Python', 'JavaScript', 'React.js', 'NumPy', 'Pandas', 'Git', 'REST APIs'],
  },
  {
    title: 'Web & UI',
    skills: ['React.js', 'Tailwind CSS', 'HTML', 'CSS', 'Responsive Design', 'Vite'],
  },
];

export const experience = [
  {
    role: 'Computer Vision Engineer Intern',
    company: 'Matrix AE',
    location: 'Lahore, Pakistan',
    period: 'June 2026 – Present',
    highlights: [
      'Developing real-time computer vision systems for object detection, tracking, and visual analytics.',
      'Built a vehicle detection & tracking system with YOLOv11, ByteTrack, and perspective transformation for counting, distance, and speed estimation.',
      'Developed face detection & segmentation with AR fog effects using MediaPipe and OpenCV.',
    ],
    tags: ['YOLOv11', 'ByteTrack', 'OpenCV', 'MediaPipe'],
  },
  {
    role: 'Frontend Development Intern',
    company: 'Verdant Soft',
    location: 'Lahore, Pakistan',
    period: 'July 2024 – October 2024',
    highlights: [
      'Built responsive UI components with React.js and Tailwind CSS in a professional team environment.',
      'Collaborated across debugging, testing, and live project delivery with version control workflows.',
    ],
    tags: ['React', 'Tailwind CSS', 'Git'],
  },
];

export const projects = [
  {
    title: 'Talking Hands',
    subtitle: 'Pakistan Sign Language Translation System',
    category: 'Final Year Project',
    featured: true,
    period: '2025 – Present',
    description:
      'An award-winning two-way communication platform for the deaf and hard-of-hearing community. Converts Pakistan Sign Language gestures to text and speech in real time, and translates typed or spoken input back into corresponding sign language videos.',
    highlights: [
      '~95% gesture recognition accuracy',
      'Full ML pipeline: data collection → TFLite mobile deployment',
      'Sign ↔ Text/Voice bidirectional communication',
      '1st Place — SPARK Business Idea Competition (2025)',
      'Most Innovative Idea — Techno Verse Think Tank (2025)',
    ],
    tech: ['TensorFlow', 'Keras', 'MediaPipe', 'OpenCV', 'TFLite'],
    github: 'https://github.com/ahmadijaz1303/Talking-Hands',
    accent: 'emerald',
  },
  {
    title: 'Vehicle Detection & Analytics',
    subtitle: 'Real-Time Traffic Monitoring',
    category: 'Internship Project',
    period: '2026',
    description:
      'Industry-level computer vision pipeline for live video streams — detecting and tracking vehicles with distance and speed estimation using perspective transformation.',
    highlights: [
      'Multi-object tracking with YOLOv11 + ByteTrack',
      'Vehicle counting, distance & speed estimation',
      'Real-time inference on live video feeds',
    ],
    tech: ['YOLOv11', 'ByteTrack', 'OpenCV', 'Python'],
    github: 'https://github.com/ahmadijaz1303/Vehicle-Detection-and-Speed-Estimation',
    accent: 'cyan',
  },
  {
    title: 'Face Detection & AR Fog',
    subtitle: 'Real-Time Segmentation Effects',
    category: 'Internship Project',
    period: '2026',
    description:
      'Real-time face detection and image segmentation system with an augmented reality fog visual effect, including hand tracking and live video processing.',
    highlights: [
      'MediaPipe face & hand tracking',
      'Image segmentation with AR fog overlay',
      'Real-time visual effects on video streams',
    ],
    tech: ['MediaPipe', 'OpenCV', 'Python'],
    github: null,
    accent: 'violet',
  },
  {
    title: 'Lane & Vehicle Detection ADAS',
    subtitle: 'Advanced Driver Assistance',
    category: 'Computer Vision',
    period: '2026',
    description:
      'PyTorch-based lane and vehicle detection system inspired by ADAS applications for road safety and autonomous driving research.',
    highlights: [
      'Lane detection and vehicle identification',
      'PyTorch deep learning pipeline',
      'ADAS-oriented computer vision architecture',
    ],
    tech: ['PyTorch', 'OpenCV', 'Python'],
    github: 'https://github.com/ahmadijaz1303/Lane-Vehicle-Detection-ADAS-Pytorch',
    accent: 'amber',
  },
  {
    title: 'ASL Recognition System',
    subtitle: 'American Sign Language Classifier',
    category: 'Course Project',
    period: '2025',
    description:
      'Image classification model recognizing American Sign Language alphabet gestures — covering the full ML workflow from dataset preprocessing to evaluation.',
    highlights: [
      'End-to-end ML pipeline on labeled ASL datasets',
      'Feature extraction and model optimization',
      'Classification accuracy evaluation & inference',
    ],
    tech: ['Python', 'scikit-learn', 'OpenCV'],
    github: null,
    accent: 'rose',
  },
];

export const achievements = [
  {
    title: '1st Place — SPARK Business Idea Competition',
    org: 'Lahore Garrison University',
    year: '2025',
    detail: 'AI Sign Language Communication App (Talking Hands)',
  },
  {
    title: 'Most Innovative Idea Award',
    org: 'Techno Verse Think Tank, COMSATS Lahore',
    year: '2025',
    detail: 'Co-sponsored by Invozone & FirstPass.AI',
  },
  {
    title: '96th Percentile — HEC NSCT',
    org: 'Higher Education Commission, Pakistan',
    year: '2026',
    detail: 'National Skill Competency Test in AI/ML & Data Analytics',
  },
];

export const education = [
  {
    degree: 'Bachelor of Computer Science (BSCS)',
    institution: 'Riphah International University, Lahore',
    period: '2022 – 2026',
    detail: 'Relevant coursework: AI, Data Structures, Database Systems, OOP, Web Development, Algorithms',
  },
  {
    degree: 'FSc Pre-Medical',
    institution: 'KIPS College, Lahore',
    period: '2020 – 2022',
  },
  {
    degree: 'Matriculation',
    institution: 'The Punjab School, Lahore',
    period: '2018 – 2020',
  },
];

export const certifications = [
  { name: 'Python', issuer: 'Kaggle' },
  { name: 'Intro to Machine Learning', issuer: 'Kaggle' },
  { name: 'Artificial Intelligence: Preparing Your Career for AI', issuer: 'Udemy' },
];

export const interests = [
  'Artificial Intelligence',
  'Machine Learning Engineering',
  'Computer Vision',
  'Deep Learning',
  'Object Detection & Tracking',
  'Model Deployment',
  'Assistive Technology',
  'Research-Based Problem Solving',
];
