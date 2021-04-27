import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar.png',
  paragraphOne:
    'Los Angeles-based Information Technology Professional with three years of experience working as a User Support Technician. Proven track record diagnosing and resolving a multitude of hardware, software, and operating system issues ensuring efficacy and time to resolution are mutually inclusive. Interested in the realms of Systems Administration, Cyber Security, and Networking. Currently, hold associate-level certifications for networking (Cisco CCNA) and cybersecurity (CompTIA Security+)',
  paragraphTwo:
    "Bachelor's of Science in Business Administration with a focus in Computer Information Systems",
  resume: 'https://www.linkedin.com/in/jordan-gallegos-b20041197/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Campus 2-tier.png',
    title: 'Two-Tier Campus Network Lab',
    info:
      'My objective is to emulate and configure a practical campus network. This design is a two-tier campus design, containing: 2 distribution switches, and 4 access switches',
    info2: '',
    url: 'https://docs.jordantg.com/campus-network-lab-two-tier/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'NetAutoplaceholder.png',
    title: 'Network Automation using Nornir',
    info:
      'My objective for this project is to familiarize myself more with Nornir and python. I will be utilizing Nornir plugins such as jinja2 and netmiko to send configuration commands to four routers. The commands will be configuring the dynamic routing protocol, EIGRP',
    info2: '',
    url: 'https://docs.jordantg.com/network-automation-using-nornir/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Wireless Lab Topo Visio.png',
    title: 'Wireless AP Lab',
    info:
      "My objective is to successfully implement a Cisco Lightweight Access Point using Cisco's vWLC in Eve-NG.",
    info2: '',
    url: 'https://docs.jordantg.com/wireless-lab/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jordan-gallegos-b20041197/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JordanGallegos',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:jgallegos@jordantg.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
