import { useMemo, useState } from 'react';
import { projects } from './projects';
import './styles.css';

const filters = ['All', 'AI & Copilot', 'Analytics & BI', 'Compliance & Governance', 'Knowledge & Content', 'People & HR', 'Operations & Automation'];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-kicker">{project.categories.map((category) => <span className="category-tag" key={category}>{category}</span>)}</div>
      <h3>{project.name}</h3>
      <p className="project-summary">{project.description}</p>
      <div className="tech-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <details className="project-details"><summary>Read full project description +</summary><p>{project.description}</p></details>
    </article>
  );
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((project) => {
      const searchable = [project.name, project.description, ...project.tags, ...project.categories].join(' ').toLowerCase();
      return (!query || searchable.includes(query)) && (activeFilter === 'All' || project.categories.includes(activeFilter));
    });
  }, [activeFilter, search]);
  const resetProjects = () => { setSearch(''); setActiveFilter('All'); };

  return (<>
<a className="skip-link" href="#main">Skip to content</a>
<header className="site-header" id="top">
<div className="container nav-wrap">
<a aria-label="Abhilash Reddy home" className="brand" href="#top">
<span className="brand-mark">AR</span><span className="brand-name">Abhilash Reddy</span>
</a>
<button aria-expanded={navOpen} aria-label="Open navigation" className="nav-toggle" onClick={() => setNavOpen((open) => !open)}><span></span><span></span><span></span></button>
<nav aria-label="Primary navigation" className={`site-nav${navOpen ? ' open' : ''}`} onClick={() => setNavOpen(false)}>
<a href="#about">About</a><a href="#clients">Clients</a><a href="#projects">Projects</a><a href="#self-projects">Self Projects</a>
<a href="#experience">Experience</a><a href="#skills">Skills</a><a className="nav-cta" href="#contact">Contact</a>
</nav>
</div>
</header>
<main id="main">
<section className="hero section">
<div className="container hero-grid">
<div className="hero-copy">
<p className="eyebrow">POWER PLATFORM • MICROSOFT COPILOT • POWER BI • ENTERPRISE AUTOMATION</p>
<h1>I build practical enterprise solutions that connect <span>AI, low-code, data and people.</span></h1>
<p className="hero-lead">Power Platform &amp; Copilot Lead with 7+ years of experience delivering applications, workflow automation,
            analytics, integrations, governance and AI-assisted experiences across government, retail, finance, HR, logistics,
            education and compliance.</p>
<div className="hero-actions">
<a className="button primary" href="#projects"><svg aria-hidden="true" viewBox="0 0 24 24"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect></svg> Explore 39 Projects</a>
<a className="button secondary" href="https://www.linkedin.com/in/abhilash-reddy-a43213163" rel="noreferrer" target="_blank"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.5 8.5V18"></path><path d="M6.5 5.5h.01"></path><path d="M10.5 18v-5.2c0-2 1.2-3.3 3-3.3 2.2 0 3.5 1.4 3.5 4V18"></path><path d="M10.5 12.5c.4-1.8 1.6-3 3.5-3"></path></svg> LinkedIn</a>
</div>
<div className="hero-meta">
<span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg> United States</span>
<span><svg aria-hidden="true" viewBox="0 0 24 24"><rect height="14" rx="2" width="18" x="3" y="5"></rect><path d="m4 7 8 6 8-6"></path></svg> <a href="mailto:abhi96reddy@gmail.com?subject=Portfolio%20Inquiry%20-%20Abhilash%20Reddy">abhi96reddy@gmail.com</a></span>
</div>
</div>
<aside aria-label="Career highlights" className="hero-panel">
<div className="profile-monogram">AR</div>
<h2>Power Platform / Copilot Lead</h2>
<p>Solution delivery from discovery and architecture through build, governance, deployment and production support.</p>
<div className="metric-grid">
<div><strong>7+</strong><span>Years</span></div>
<div><strong>39</strong><span>Total Projects</span></div>
<div><strong>20+</strong><span>BI Dashboards</span></div>
<div><strong>80%</strong><span>App Performance Gain</span></div>
</div>
</aside>
</div>
</section>
<section className="tech-showcase" aria-label="Core Microsoft technology stack">
<div className="container">
<div className="tech-showcase-intro">
<span>CORE TECHNOLOGY STACK</span>
<p>Microsoft technologies I work with across enterprise applications, automation, analytics, AI and collaboration.</p>
</div>
<div className="tech-logo-grid">
<div className="tech-logo-card"><div className="tech-logo-image"><img src="https://msicons.com/icons/power-platform/03335-icon-service-Power-Platform.svg" alt="Microsoft Power Platform logo" referrerPolicy="no-referrer"/></div><span>Power Platform</span></div>
<div className="tech-logo-card"><div className="tech-logo-image"><img src="https://msicons.com/icons/power-platform/PowerApps_scalable.svg" alt="Microsoft Power Apps logo" referrerPolicy="no-referrer"/></div><span>Power Apps</span></div>
<div className="tech-logo-card"><div className="tech-logo-image"><img src="https://msicons.com/icons/power-platform/PowerAutomate_scalable.svg" alt="Microsoft Power Automate logo" referrerPolicy="no-referrer"/></div><span>Power Automate</span></div>
<div className="tech-logo-card"><div className="tech-logo-image"><img src="https://msicons.com/icons/fabric/power_bi_color.svg" alt="Microsoft Power BI logo" referrerPolicy="no-referrer"/></div><span>Power BI</span></div>
<div className="tech-logo-card"><div className="tech-logo-image"><img src={`${import.meta.env.BASE_URL}microsoft.svg`} alt="Microsoft logo"/></div><span>Microsoft 365</span></div>
<div className="tech-logo-card"><div className="tech-logo-image"><img src="https://msicons.com/icons/power-platform/PowerPages_scalable.svg" alt="Microsoft Power Pages logo" referrerPolicy="no-referrer"/></div><span>Power Pages</span></div>
<div className="tech-logo-card"><div className="tech-logo-image"><img src="https://cdn.freebiesupply.com/logos/large/2x/microsoft-copilot-logo-png-transparent.png" alt="Microsoft Copilot logo" referrerPolicy="no-referrer"/></div><span>Microsoft Copilot</span></div>
<div className="tech-logo-card"><div className="tech-logo-image"><img src="https://msicons.com/icons/sharepoint/microsoft-office-sharepoint-2025.svg" alt="Microsoft SharePoint logo" referrerPolicy="no-referrer"/></div><span>SharePoint</span></div>
<div className="tech-logo-card"><div className="tech-logo-image"><img src="https://msicons.com/icons/power-platform/Dataverse_scalable.svg" alt="Microsoft Dataverse logo" referrerPolicy="no-referrer"/></div><span>Dataverse</span></div>
<div className="tech-logo-card"><div className="tech-logo-image"><img src="https://msicons.com/icons/databases/10130-icon-service-SQL-Database.svg" alt="Microsoft SQL logo" referrerPolicy="no-referrer"/></div><span>SQL</span></div>
</div>
</div>
</section>
<section aria-label="Selected impact" className="impact-strip">
<div className="container impact-grid">
<div><strong>98%</strong><span>Reduction in refresh errors</span></div>
<div><strong>60%</strong><span>Increase in user adoption</span></div>
<div><strong>75%</strong><span>Less manual data entry</span></div>
<div><strong>40%</strong><span>Faster reporting</span></div>
<div><strong>15%</strong><span>Route-time improvement</span></div>
</div>
</section>
<section className="section" id="about">
<div className="container">
<div className="section-heading narrow">
<p className="eyebrow">MY STORY</p>
<h2>The work stays inspiring because every client brings a new challenge.</h2>
</div>
<div className="story-grid">
<article className="story-card"><svg aria-hidden="true" className="story-icon" viewBox="0 0 24 24"><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z"></path><path d="m18 14 .7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7L18 14Z"></path><path d="m5 12 .6 1.9 1.9.6-1.9.6L5 16l-.6-1.9-1.9-.6 1.9-.6L5 12Z"></path></svg><h3>I enjoy learning the business first</h3>
<p>The projects I enjoy most often begin with a simple problem: a process is too manual, information is hard to find,
            reporting is slow, or governance is getting in the way of delivery. I like learning how the business actually works,
            understanding the friction, and turning that into a solution people can trust and use.</p></article>
<article className="story-card"><svg aria-hidden="true" className="story-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="m15 9-2 4-4 2 2-4 4-2Z"></path></svg><h3>Different clients keep me curious</h3>
<p>Government, retail, finance, HR, logistics, education and compliance all have different language, risk models,
            user expectations and operating rhythms. Moving between those environments pushes me to ask better questions,
            adapt quickly, and avoid forcing the same answer onto every problem.</p></article>
<article className="story-card"><svg aria-hidden="true" className="story-icon" viewBox="0 0 24 24"><path d="M14 5c3-3 6-2 6-2s1 3-2 6l-5 5-3-3 4-6Z"></path><path d="m10 11-4 1-3 3 5 1"></path><path d="m13 14-1 4-3 3-1-5"></path><circle cx="16" cy="7" r="1"></circle></svg><h3>I welcome difficult, unfamiliar work</h3>
<p>New challenges are what make the work exciting for me. I enjoy taking on situations where the path is not obvious,
            combining Power Platform, Copilot, analytics, APIs and Microsoft 365, and then making the outcome secure,
            maintainable and practical enough to succeed after go-live.</p></article>
</div>
<blockquote className="pull-quote">“The best part of consulting is not repeating what I already know. It is entering a new problem space,
          learning fast, and leaving the client with something simpler, stronger and more useful than what they had before.”</blockquote>
</div>
</section>
<section className="section section-soft" id="clients">
<div className="container">
<div className="section-heading">
<div><p className="eyebrow">CLIENT ENGAGEMENTS</p><h2>Organizations and teams I have supported</h2></div>
<p className="section-note">Presented together, independent of individual project cards.</p>
</div>
<div className="client-grid"><a className="client-card" href="https://www.gmu.edu/" rel="noreferrer" target="_blank"><span className="client-logo-wrap"><img alt="" className="client-logo" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://www.google.com/s2/favicons?domain=gmu.edu&amp;sz=128"/><span className="client-fallback">GM</span></span><span className="client-text"><strong>George Mason University / QuadriaIQ</strong><small>Higher Education • Compliance &amp; AI</small></span><span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span></a><a className="client-card" href="https://www.lyondellbasell.com/" rel="noreferrer" target="_blank"><span className="client-logo-wrap"><img alt="" className="client-logo" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://www.google.com/s2/favicons?domain=lyondellbasell.com&amp;sz=128"/><span className="client-fallback">L</span></span><span className="client-text"><strong>LyondellBasell</strong><small>Chemicals • Enterprise Power Platform</small></span><span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span></a><div className="client-card"><span className="client-logo-wrap"><span className="client-fallback always">ES</span></span><span className="client-text"><strong>Eighty20 Solutions</strong><small>Consulting • Multi-solution Delivery</small></span></div><a className="client-card" href="https://www.aurecongroup.com/" rel="noreferrer" target="_blank"><span className="client-logo-wrap"><img alt="" className="client-logo" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://www.google.com/s2/favicons?domain=aurecongroup.com&amp;sz=128"/><span className="client-fallback">A</span></span><span className="client-text"><strong>Aurecon</strong><small>Engineering • Client Assessment</small></span><span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span></a><a className="client-card" href="https://cottonongroup.com.au/" rel="noreferrer" target="_blank"><span className="client-logo-wrap"><img alt="" className="client-logo" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://www.google.com/s2/favicons?domain=cottonongroup.com.au&amp;sz=128"/><span className="client-fallback">CO</span></span><span className="client-text"><strong>Cotton On Group</strong><small>Retail • Procurement Automation</small></span><span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span></a><div className="client-card"><span className="client-logo-wrap"><span className="client-fallback always">M</span></span><span className="client-text"><strong>MetaCite</strong><small>IT Services • Service Desk Automation</small></span></div><a className="client-card" href="https://www.gpt.com.au/" rel="noreferrer" target="_blank"><span className="client-logo-wrap"><img alt="" className="client-logo" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://www.google.com/s2/favicons?domain=gpt.com.au&amp;sz=128"/><span className="client-fallback">G</span></span><span className="client-text"><strong>GPT</strong><small>Enterprise • Access Review</small></span><span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span></a><a className="client-card" href="https://vcea.catholic.edu.au/" rel="noreferrer" target="_blank"><span className="client-logo-wrap"><img alt="" className="client-logo" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://www.google.com/s2/favicons?domain=vcea.catholic.edu.au&amp;sz=128"/><span className="client-fallback">CV</span></span><span className="client-text"><strong>Catholic Education Commission of Victoria Limited (CECV / VCEA)</strong><small>Education • Power Platform CoE, Governance &amp; Collaboration</small></span><span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span></a><a className="client-card" href="https://www.bdo.com.au/" rel="noreferrer" target="_blank"><span className="client-logo-wrap"><img alt="" className="client-logo" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://www.google.com/s2/favicons?domain=bdo.com.au&amp;sz=128"/><span className="client-fallback">B</span></span><span className="client-text"><strong>BDO</strong><small>Professional Services • Career Platform</small></span><span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span></a><a className="client-card" href="https://www.service.nsw.gov.au/" rel="noreferrer" target="_blank"><span className="client-logo-wrap"><img alt="" className="client-logo" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://www.google.com/s2/favicons?domain=service.nsw.gov.au&amp;sz=128"/><span className="client-fallback">SN</span></span><span className="client-text"><strong>Service NSW</strong><small>Government • Knowledge &amp; Service Delivery</small></span><span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span></a><a className="client-card" href="https://archway.com/" rel="noreferrer" target="_blank"><span className="client-logo-wrap"><img alt="" className="client-logo" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://www.google.com/s2/favicons?domain=archway.com&amp;sz=128"/><span className="client-fallback">A</span></span><span className="client-text"><strong>Archway</strong><small>Marketing &amp; Logistics • Operations Automation</small></span><span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span></a><a className="client-card" href="https://www.riotinto.com/" rel="noreferrer" target="_blank"><span className="client-logo-wrap"><img alt="" className="client-logo" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://www.google.com/s2/favicons?domain=riotinto.com&amp;sz=128"/><span className="client-fallback">RT</span></span><span className="client-text"><strong>Rio Tinto</strong><small>Mining • HR Automation</small></span><span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span></a><a className="client-card" href="https://www.pepsico.com/" rel="noreferrer" target="_blank"><span className="client-logo-wrap"><img alt="" className="client-logo" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://www.google.com/s2/favicons?domain=pepsico.com&amp;sz=128"/><span className="client-fallback">P</span></span><span className="client-text"><strong>PepsiCo</strong><small>Consumer Goods • Supply Chain &amp; Audit</small></span><span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span></a><div className="client-card"><span className="client-logo-wrap"><span className="client-fallback always">IM</span></span><span className="client-text"><strong>iShare Migration Engagement</strong><small>SharePoint • Migration &amp; Modernization</small></span></div><a className="client-card" href="https://archway.com/" rel="noreferrer" target="_blank">
<span className="client-logo-wrap archway-logo-wrap">
<img alt="Archway Marketing Services logo" className="client-logo client-logo-wide" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'grid'; }} src="https://cdn.prod.website-files.com/5a33fa924bd421000199c9db/66011c3649679804584b8b83_Archway_RedBlack_CMYK-_1_.webp"/>
<span className="client-fallback">AMS</span>
</span>
<span className="client-text"><strong>Archway Marketing Services</strong><small>Marketing Execution • Logistics • Operations Automation</small></span>
<span className="client-external"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5"></path><path d="m10 14 9-9"></path><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path></svg></span>
</a></div>
<p className="brand-disclaimer">Client and company names, logos and marks belong to their respective owners and are shown only
          to identify professional engagement context. No endorsement is implied.</p>
</div>
</section>
<section className="section" id="projects">
<div className="container">
<div className="section-heading">
<div><p className="eyebrow">PROJECT PORTFOLIO</p><h2>36 professional projects across AI, automation, analytics and enterprise operations</h2></div>
<p className="section-note">Search by project name, technology or business problem.</p>
</div>
<div className="project-toolbar" role="search">
<label className="search-box"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg><input aria-label="Search projects" id="projectSearch" placeholder="Search projects, e.g. Copilot, audit, HR, Power BI…" type="search" value={search} onChange={(event) => setSearch(event.target.value)}/></label>
<div className="filters" id="filters">
{filters.map((filter) => (
  <button
    className={`filter${activeFilter === filter ? ' active' : ''}`}
    data-filter={filter}
    key={filter}
    onClick={() => setActiveFilter(filter)}
  >
    {filter === 'Compliance & Governance' ? 'Compliance' :
      filter === 'Analytics & BI' ? 'Analytics' :
      filter === 'Knowledge & Content' ? 'Knowledge' :
      filter === 'People & HR' ? 'HR' :
      filter === 'Operations & Automation' ? 'Operations' : filter}
  </button>
))}
</div>
</div>
<div className="project-count"><strong id="projectCount">{filteredProjects.length}</strong> projects shown</div>
<div aria-live="polite" className="project-grid" id="projectGrid">
{filteredProjects.map((project) => <ProjectCard key={project.name} project={project} />)}
</div>
<div className="empty-state" hidden={filteredProjects.length !== 0} id="emptyState">
<h3>No matching projects</h3><p>Try a different keyword or reset the filters.</p>
<button className="button secondary" id="resetProjects" onClick={resetProjects}>Reset projects</button>
</div>
</div>
</section>
<section className="section section-soft" id="self-projects">
<div className="container">
<div className="section-heading">
<div><p className="eyebrow">SELF PROJECTS</p><h2>Hands-on builds where I explore new AI and automation patterns</h2></div>
<p className="section-note">Independent projects used to test emerging capabilities and turn ideas into working solutions.</p>
</div>
<div className="project-grid self-project-grid">
<article className="project-card self-project-card">
<div className="project-kicker"><span className="category-tag">Automation</span><span className="category-tag">Marketing</span></div>
<h3>n8n Multi-Channel Marketing Automation</h3>
<p className="project-summary self-project-summary">Building an n8n-based marketing automation service that orchestrates scheduled content publishing across LinkedIn, Instagram and TikTok. The workflow centralizes channel scheduling and automated posting so recurring campaign content can be managed from a single automation layer instead of being posted manually across each platform.</p>
<div className="tech-tags"><span>n8n</span><span>LinkedIn</span><span>Instagram</span><span>TikTok</span><span>Workflow Automation</span></div>
</article>
<article className="project-card self-project-card">
<div className="project-kicker"><span className="category-tag">AI</span><span className="category-tag">Power Platform</span></div>
<h3>AI-Powered Face Authentication System</h3>
<p className="project-summary self-project-summary">Built a biometric login system using Azure Cognitive Services Face API integrated with a Canvas Power App. A custom Power Platform connector handles user enrolment and real-time face recognition. Confidence-threshold based access control improves authentication accuracy, with fallback PIN authentication for low-confidence scenarios.</p>
<div className="tech-tags"><span>Power Apps Canvas</span><span>Azure Face API</span><span>Custom Connector</span><span>Biometric Authentication</span></div>
</article>
<article className="project-card self-project-card">
<div className="project-kicker"><span className="category-tag">Code Apps</span><span className="category-tag">AI-Assisted Development</span></div>
<h3>Power Apps Code App – Field Inspection Solution</h3>
<p className="project-summary self-project-summary">Built a Power Apps Code App using TypeScript and React components inside a managed Power Platform solution. Power Platform Vibe Coding was used to rapidly scaffold data-bound components, reducing development time by about 40%. Dataverse provides the backend with real-time offline sync for field engineers, while Code App components and standard Canvas controls create a hybrid low-code/pro-code experience across mobile and desktop.</p>
<div className="tech-tags"><span>Power Apps Code Apps</span><span>TypeScript</span><span>React</span><span>Dataverse</span><span>Vibe Coding</span><span>Offline Sync</span></div>
</article>
</div>
</div>
</section><section className="section section-soft" id="experience">
<div className="container">
<div className="section-heading narrow"><p className="eyebrow">EXPERIENCE</p><h2>A delivery path from enterprise automation to AI-forward solution leadership</h2></div>
<div className="timeline"><article className="timeline-item">
<div className="timeline-marker"></div>
<div className="timeline-card">
<div className="timeline-top">
<div><h3>Power Platform / Copilot Lead</h3><p className="company">4A Consulting LLC</p></div>
<div className="period"><span className="current-badge">Current</span><span>Feb 2026 — Present</span></div>
</div>


<p>At 4A Consulting, I lead enterprise-grade Power Platform and Copilot delivery from stakeholder discovery and solution architecture through development, security, ALM, validation, deployment and production stabilization. The work spans compliance automation, governed knowledge experiences, Power Apps, Power Automate, SharePoint, Azure SQL, Power BI and Microsoft 365. Selected delivery includes OpsIQ / ProcessIQ, Enterprise Knowledge Copilot, and an IT Helpdesk Copilot that combines Copilot Studio, SharePoint Search, ServiceNow integration, Microsoft Teams escalation and SLA automation. The focus is on building production-ready solutions that are secure, maintainable, measurable and aligned to real operating processes rather than simply demonstrating platform features.</p></div>
</article><article className="timeline-item">
<div className="timeline-marker"></div>
<div className="timeline-card">
<div className="timeline-top">
<div><h3>Power Platform / Business Intelligence Developer</h3><p className="company">CBase Inc.</p></div>
<div className="period"><span>May 2025 — Dec 2025</span></div>
</div>


<p>At CBase, I delivered professional Power Platform solutions across Dataverse, Canvas Apps, Power Automate, Power BI, Microsoft Teams, custom connectors and governance. The work included project-governance applications, shipping and customs automation, Snowflake integration, document-generation workflows, reusable solution components, ALM standards and quality reviews. I worked across requirements, data modeling, workflow design, testing, user adoption and release readiness, translating business needs into structured enterprise solutions while improving manual processes and maintaining secure deployment patterns.</p></div>
</article><article className="timeline-item">
<div className="timeline-marker"></div>
<div className="timeline-card">
<div className="timeline-top">
<div><h3>Senior Consultant — Power Platform / BI / Azure</h3><p className="company">AutomationX</p></div>
<div className="period"><span>Dec 2021 — Jan 2024</span></div>
</div>


<p>At AutomationX, I worked across multiple client environments in government, retail, professional services, marketing logistics and enterprise operations, delivering Power Platform, Power BI, SharePoint, Azure integration and conversational AI solutions. My work combined consulting, requirements workshops, architecture, development, analytics, integration, deployment and user enablement. This included an Enterprise HR Copilot built with Copilot Studio and Azure OpenAI, grounded in SharePoint and Dataverse, connected to workflows through Power Automate, secured with Azure AD, deployed through Teams and SharePoint, and monitored through Application Insights. The role also included enterprise dashboards, AI Builder use cases, custom connectors, workflow automation and mentoring users and junior consultants.</p></div>
</article><article className="timeline-item">
<div className="timeline-marker"></div>
<div className="timeline-card">
<div className="timeline-top">
<div><h3>Associate Consultant — Power Platform / Power BI</h3><p className="company">Infosys</p></div>
<div className="period"><span>Jun 2021 — Dec 2021</span></div>
</div>


<p>At Infosys, I delivered Microsoft 365 and Power Platform solutions for Rio Tinto across HR automation, compensation review, FAQ management, analytics, SharePoint modernization and production support. The work required close collaboration with HR, PTP and Finance stakeholders to understand business rules, design user-friendly Canvas and Model-Driven applications, automate validation and approval processes, embed Power BI insights, and integrate Microsoft 365 identity and permissions through Graph API. Delivery was performed under enterprise release timelines with emphasis on reliability, data integrity and user adoption.</p></div>
</article><article className="timeline-item">
<div className="timeline-marker"></div>
<div className="timeline-card">
<div className="timeline-top">
<div><h3>Programmer Analyst — Power Platform / SharePoint</h3><p className="company">Cognizant Technology Solutions</p></div>
<div className="period"><span>Sep 2017 — May 2021</span></div>
</div>


<p>At Cognizant, I delivered enterprise automation and analytics solutions for PepsiCo across logistics, supply chain, HR, store operations, audit and procurement. The work covered requirements gathering, Power Apps development, Power Automate workflows, SharePoint, SQL, REST integrations and Power BI reporting across multiple business units. I supported solutions from design through deployment and production use, helping reduce manual processing, improve operational visibility and standardize business workflows while collaborating with business teams, technical stakeholders and support functions.</p></div>
</article></div>
</div>
</section>
<section className="section" id="skills">
<div className="container">
<div className="section-heading"><div><p className="eyebrow">CAPABILITIES</p><h2>Technical depth, business consulting and flexible delivery methods</h2></div></div>
<div className="skills-grid"><article className="skill-card"><h3>AI &amp; Copilot</h3><div className="skill-chips"><span>Microsoft 365 Copilot</span><span>Copilot Studio</span><span>AI Builder</span><span>Generative Answers</span><span>Knowledge Grounding</span><span>Agent-to-Workflow Actions</span><span>GPT-based Analytics</span></div></article><article className="skill-card"><h3>Power Platform</h3><div className="skill-chips"><span>Power Apps Canvas</span><span>Model-Driven Apps</span><span>Dataverse</span><span>Power Automate</span><span>Power Automate Desktop</span><span>Power Pages</span><span>Dynamics 365 CE</span></div></article><article className="skill-card"><h3>BI &amp; Data</h3><div className="skill-chips"><span>Power BI</span><span>DAX</span><span>Power Query</span><span>Dataflows</span><span>SQL / Azure SQL</span><span>Snowflake</span><span>GCP BigQuery</span><span>Python / Pandas / NumPy</span><span>SPSS</span></div></article><article className="skill-card"><h3>Integration &amp; Azure</h3><div className="skill-chips"><span>REST APIs</span><span>Microsoft Graph API</span><span>Custom Connectors</span><span>Azure Functions</span><span>Azure Logic Apps</span><span>Enterprise Gateways</span><span>Hybrid Connectivity</span></div></article><article className="skill-card"><h3>Governance &amp; Security</h3><div className="skill-chips"><span>Power Platform CoE</span><span>RBAC / RLS</span><span>DLP</span><span>ALM / CI-CD</span><span>Managed Solutions</span><span>Environment Variables</span><span>Connection References</span><span>NIST / CMMC / CMMI</span></div></article><article className="skill-card"><h3>M365 &amp; Development</h3><div className="skill-chips"><span>SharePoint Online</span><span>Microsoft Teams</span><span>Microsoft Viva</span><span>PnP Search</span><span>ShareGate</span><span>PowerShell</span><span>PCF</span><span>C# / JavaScript / .NET</span></div></article><article className="skill-card">
<h3>Business &amp; Consulting</h3>
<div className="skill-chips">
<span>Stakeholder Collaboration</span><span>Executive &amp; Client Communication</span><span>Requirements Elicitation</span>
<span>Discovery Workshops</span><span>Business Process Analysis</span><span>Solution Architecture</span>
<span>Process Improvement</span><span>Change Management</span><span>UAT Coordination</span>
<span>User Adoption</span><span>Training &amp; Mentoring</span><span>Technical Documentation</span><span>Production Support</span>
</div>
</article><article className="skill-card">
<h3>Delivery Methods &amp; Ways of Working</h3>
<div className="skill-chips">
<span>Agile</span><span>Scrum</span><span>Kanban</span><span>Waterfall</span><span>Hybrid Delivery</span>
<span>SDLC</span><span>DevOps</span><span>Sprint Planning</span><span>Backlog Refinement</span>
<span>User Stories</span><span>Acceptance Criteria</span><span>Release Planning</span><span>ALM / CI-CD</span>
<span>Risk &amp; Dependency Management</span>
</div>
</article></div>
<div className="credentials-grid">
<div className="education-card"><p className="eyebrow">EDUCATION</p><h3>MBA, Data Analytics</h3><p>Saint Leo University • December 2025</p><hr/>
<h3>Bachelor of Engineering, Computer Science</h3><p>Osmania University • June 2017</p></div>
<div className="cert-card"><p className="eyebrow">MICROSOFT CERTIFICATIONS</p><div className="cert-list"><div className="cert-item"><span>PL-400</span><p>Microsoft Certified: Power Platform Developer Associate</p></div><div className="cert-item"><span>PL-300</span><p>Microsoft Certified: Power BI Data Analyst Associate</p></div><div className="cert-item"><span>AB-731</span><p>Microsoft Certified: AI Transformation Leader</p></div><div className="cert-item"><span>AB-620</span><p>Microsoft Certified: AI Agent Builder Associate</p></div></div></div>
</div>
</div>
</section>
<section className="section contact-section" id="contact">
<div className="container contact-card">
<div><p className="eyebrow">LET'S CONNECT</p><h2>Interested in Power Platform, Copilot, AI agents, analytics or enterprise automation?</h2>
<p>I’m always interested in complex business problems, new client environments and opportunities where technology can make work simpler and more effective.</p></div>
<div className="contact-actions">
<a className="contact-email" href="mailto:abhi96reddy@gmail.com" aria-label="Email Abhilash Reddy at abhi96reddy@gmail.com">abhi96reddy@gmail.com</a>
<a className="button secondary" href="tel:+18132353242"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3h3l1.2 5-2 1.5a16 16 0 0 0 5.3 5.3l1.5-2L21 14v3c0 2-1.5 4-4 4C9 21 3 15 3 7c0-2.5 2-4 4-4Z"></path></svg> +1 (813) 235-3242</a>
<a className="button secondary" href="https://www.linkedin.com/in/abhilash-reddy-a43213163" rel="noreferrer" target="_blank"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.5 8.5V18"></path><path d="M6.5 5.5h.01"></path><path d="M10.5 18v-5.2c0-2 1.2-3.3 3-3.3 2.2 0 3.5 1.4 3.5 4V18"></path><path d="M10.5 12.5c.4-1.8 1.6-3 3.5-3"></path></svg> LinkedIn</a>
</div>
</div>
</section>
</main>
<footer className="site-footer">
<div className="container footer-wrap"><div><strong>Abhilash Reddy</strong><p>Power Platform • Microsoft Copilot • Power BI • Enterprise Automation</p></div><a href="#top">Back to top ↑</a></div>
</footer>
</>);
}
