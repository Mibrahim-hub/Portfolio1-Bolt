import type { IconType } from 'react-icons';
import {
  FaWindows,
  FaMicrosoft,
  FaNetworkWired,
  FaShieldAlt,
  FaCloud,
  FaExchangeAlt,
} from 'react-icons/fa';
import {
  SiVmware,
  SiCisco,
} from 'react-icons/si';
import {
  TbCloudComputing,
  TbFirewallFlame,
} from 'react-icons/tb';
import { FiServer, FiSettings, FiGitBranch, FiTerminal, FiMonitor, FiActivity } from 'react-icons/fi';

export const profile = {
  name: 'Mohamed Ibrahim',
  roles: ['IT Administrator', 'System Administrator', 'IT Support Specialist'],
  subtitle:
    'Helping businesses build secure, reliable and scalable IT infrastructure.',
  summary:
    '5+ years of experience in IT Support, Windows Server, Active Directory, Office 365, VMware, Azure, Networking, FortiGate Firewall, Cisco, and IT Infrastructure.',
  email: 'IT.Systemadmin91@gmail.com',
  phone: '0538377925',
  linkedin:'https://www.linkedin.com/in/mohamed-ibrahim-09aab01b2',
  github: 'https://github.com/mohamed-ibrahim',
  location: 'Saudi Arabia, Abha',
  cvPath: '/Mohamed-Ibrahim-CV.pdf',
};

export const stats = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Systems Managed', value: 120, suffix: '+' },
  { label: 'Tickets Resolved', value: 2000, suffix: '+' },
  { label: 'Uptime Maintained', value: 99, suffix: '%' },
];

export const aboutHighlights = [
  { icon: FaWindows, label: 'Windows Server' },
  { icon: FaMicrosoft, label: 'Active Directory' },
  { icon: FaCloud, label: 'Office 365' },
  { icon: SiVmware, label: 'VMware' },
  { icon: TbCloudComputing, label: 'Microsoft Azure' },
  { icon: SiCisco, label: 'Cisco Networking' },
  { icon: FaShieldAlt, label: 'FortiGate Firewall' },
  { icon: FaNetworkWired, label: 'IT Infrastructure' },
];

export type ExperienceItem = {
  role: string;
  period: string;
  company: string;
  description: string;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'IT Support',
    period: 'March 2025 — Present',
    company: 'Full Screen For Accounting and Warehouse Management Co',
    description:
      'Providing end-user technical support and maintaining reliable, secure IT operations across hardware, software, and network environments.\nTroubleshoot and resolve hardware and software incidents to minimize user downtime.\nPerform system checks, updates, backups, and preventive maintenance to maintain system reliability.\nConfigure and troubleshoot network connectivity and related technical issues.\nManage IT incidents through ITSM practices and escalate critical issues when required.',
    tags: ['IT Support', 'ITSM', 'Network Troubleshooting', 'Preventive Maintenance'],
  },
  {
    role: 'IT Support',
    period: '2025 — Present',
    company: 'Vodafone Egypt',
    description:
      'Providing enterprise-level IT support across a large-scale corporate network. Managing user accounts, resolving escalated incidents, and maintaining endpoint security and compliance standards.',
    tags: ['Office 365', 'Active Directory', 'Endpoint Security', 'ITIL'],
  },
  {
    role: 'IT Administrator',
    period: '2023 — 2024',
    company: 'Xceed',
    description:
      'Administered Windows Server environments, Active Directory, Group Policy, and Exchange. Managed virtualization on VMware and supported Office 365 tenants for thousands of users.',
    tags: ['Windows Server', 'Group Policy', 'VMware', 'Exchange'],
  },
  {
    role: 'Technical Support Specialist',
    period: '2021 — 2023',
    company: 'B-Connect',
    description:
      'Delivered tiered technical support, configured networking equipment, and handled FortiGate firewall policies. Maintained LAN/WAN connectivity and resolved TCP/IP issues across sites.',
    tags: ['FortiGate', 'LAN/WAN', 'TCP/IP', 'Remote Desktop'],
  },
  {
    role: 'Senior Technical Support',
    period: '2019 — 2021',
    company: '—',
    description:
      'Led frontline troubleshooting for hardware, software, and network issues. Documented resolutions and trained junior technicians on best practices and ITIL-aligned workflows.',
    tags: ['Troubleshooting', 'DNS', 'DHCP', 'ITIL'],
  },
];

export type Skill = {
  name: string;
  icon: IconType;
  category: 'Systems' | 'Cloud & Virtualization' | 'Networking' | 'Security' | 'Practices';
};

export const skills: Skill[] = [
  { name: 'Windows Server', icon: FaWindows, category: 'Systems' },
  { name: 'Active Directory', icon: FaMicrosoft, category: 'Systems' },
  { name: 'Group Policy', icon: FiSettings, category: 'Systems' },
  { name: 'DNS', icon: FiServer, category: 'Systems' },
  { name: 'DHCP', icon: FiServer, category: 'Systems' },
  { name: 'Exchange', icon: FaExchangeAlt, category: 'Systems' },
  { name: 'Office 365', icon: FaCloud, category: 'Cloud & Virtualization' },
  { name: 'VMware', icon: SiVmware, category: 'Cloud & Virtualization' },
  { name: 'Microsoft Azure', icon: TbCloudComputing, category: 'Cloud & Virtualization' },
  { name: 'Cisco CCNA', icon: SiCisco, category: 'Networking' },
  { name: 'LAN/WAN', icon: FaNetworkWired, category: 'Networking' },
  { name: 'TCP/IP', icon: FiGitBranch, category: 'Networking' },
  { name: 'FortiGate Firewall', icon: TbFirewallFlame, category: 'Security' },
  { name: 'ITIL', icon: FiActivity, category: 'Practices' },
  { name: 'Remote Desktop', icon: FiMonitor, category: 'Practices' },
  { name: 'Troubleshooting', icon: FiTerminal, category: 'Practices' },
];

export const skillCategories = [
  'Systems',
  'Cloud & Virtualization',
  'Networking',
  'Security',
  'Practices',
] as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: IconType;
  accent: string;
};

export const projects: Project[] = [
  {
    title: 'FortiGate Firewall Project',
    description:
      'Built firewall policies using VMware. Designed segmented network zones, NAT rules, and security profiles to simulate an enterprise perimeter defense in a virtualized environment.',
    tags: ['FortiGate', 'VMware', 'Firewall Policies', 'Network Security'],
    icon: TbFirewallFlame,
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'CCNA Network Project',
    description:
      'Built an enterprise network using Packet Tracer and GNS3. Configured routing, switching, VLANs, inter-VLAN routing, and WAN connectivity across multiple sites.',
    tags: ['Cisco', 'Packet Tracer', 'GNS3', 'Routing & Switching'],
    icon: SiCisco,
    accent: 'from-cyan-500 to-blue-500',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  status: 'Certified' | 'In Progress';
  icon: IconType;
};

export const certifications: Certification[] = [
  { name: 'CCNA', issuer: 'Cisco', status: 'Certified', icon: SiCisco },
  { name: 'NSE 4', issuer: 'Fortinet', status: 'Certified', icon: TbFirewallFlame },
  { name: 'CompTIA A+', issuer: 'CompTIA', status: 'Certified', icon: FiServer },
  { name: 'MCSA', issuer: 'Microsoft', status: 'Certified', icon: FaWindows },
  { name: 'ICDL', issuer: 'ECDL Foundation', status: 'Certified', icon: FiMonitor },
  { name: 'AZ-104', issuer: 'Microsoft', status: 'In Progress', icon: TbCloudComputing },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
