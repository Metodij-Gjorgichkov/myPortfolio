export interface HeaderType {
  logo_name: string;
  nav_links: {
    title: string;
    href: string;
  }[];
}
export interface BannerType {
  who_am_i: string;
  name: string;
  front_end: string;
  contact: string;
  contactLinkTo: string;
  image: string;
  passionate_frond_end: string;
}
export interface SkillsType {
  title: string;
  skills_type: {
    image: string;
    title: string;
  }[];
}
export interface ProjectsType {
  title: string;
  project_type: {
    all: string;
    nextjs: string;
    reactjs: string;
    javascript: string;
    bootstrap: string;
    sass: string;
  };
}
export interface ProjectsSpecificationType {
  id: number;
  category: string;
  image: string;
  name: string;
  desc: string;
  linkTo?: string;
  linkGithub: string;
}
export interface ContactType {
  title: string;
  header: string;
  info: {
    name: string;
    image: string;
    linkTo?: string;
  }[];
}
