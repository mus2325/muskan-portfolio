import { ArrowUpRight, Award } from 'lucide-react'

const featured = [
  {id:'coursewise',type:'Product design', title:'Coursewise', text:'I built a semester-planning prototype to help students see how courses fit into their schedule. After testing the flow, I fixed a navigation issue that opened the next screen partway down the page.', link:'Try Coursewise', url:'https://delay-foil-44706164.figma.site'},
  {id:'beverage-market',type:'Data visualization',title:'Decoding the Beverage Market',award:'Top 5 Finalist · LibertyViz 2026',text:'I used Tableau level-of-detail calculations to define retail tiers and compare supply. The dashboard shows how budget products drive volume while premium products anchor value.',link:'Explore the Tableau dashboard',url:'https://public.tableau.com/app/profile/muskan.saxena2290/viz/MS_TableauComp/Dashboard1'},
  {id:'customer-churn-research',type:'Machine learning',title:'Customer Churn Rate Prediction using Machine Learning Techniques for E-Commerce Sector',award:'Best Paper Award · ICICC 2024',text:'I presented this research on February 16, 2024, at the 7th International Conference on Innovative Computing & Communication and received the Best Paper Award in March 2024.',link:'Read the research paper',url:'https://www.researchgate.net/publication/384932722_Customer_Churn_Rate_Prediction_Using_Machine_Learning_Techniques_for_E-Commerce_Sector'}
]
const more = [
  {id:'fundly',title:'Fundly',type:'Product development',text:'I took Fundly from defining the problem and understanding the target user through building, testing, and iterating. I used Claude during development.',link:'Try Fundly',url:'https://fundly-smart-start.base44.app'},
  {id:'beyond-the-fare',title:'Beyond the Fare',type:'Spatial storytelling',text:'I used an ArcGIS StoryMap to help readers explore fine particulate pollution in the NYC subway.',link:'Explore the StoryMap',url:'https://arcg.is/1br0jj'},
  {id:'inlight',title:'Inlight',type:'User research',text:'For a creative arts platform, I developed three core use cases and mapped a five-stage user journey: Attend → Connect → Collaborate → Build → Return. The journey shows how event attendance can lead to connections and collaboration between events.'}
]

function ProjectLink({url,label}:{url:string,label:string}) {
  return <a className="project-link" href={url} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={15} aria-hidden="true"/></a>
}
function Heading({id,number,title,side}:{id:string,number:string,title:string,side:string}) {
  return <div className="section-heading"><div><span className="section-num" aria-hidden="true">/{number}</span><h2 id={id} tabIndex={-1}>{title}</h2></div><span className="small-label">{side}</span></div>
}
export function FeaturedWork() {
  return <section className="block" aria-labelledby="featured">
    <Heading id="featured" number="01" title="Featured work" side="Selected projects (03)"/>
    <div className="features">{featured.map((p,i)=><article key={p.id} aria-labelledby={p.id}>
      <div className="cover"><img src={`/cover-${i}.webp`} alt="" width="848" height="421"/><span>0{i+1} / 03</span></div>
      <div className="category">{p.type}</div><h3 id={p.id} tabIndex={-1}>{p.title}</h3>
      {p.award&&<div className="award"><Award size={16} aria-hidden="true"/>{p.award}</div>}
      <p>{p.text}</p><ProjectLink url={p.url} label={p.link}/>
    </article>)}</div>
  </section>
}
export function MoreWork() {
  return <section className="block" aria-labelledby="more">
    <Heading id="more" number="02" title="More work" side="Project index (04)"/>
    <article className="vpat" aria-labelledby="vpat-analyzer"><div><div className="category">Accessibility tools</div><h3 id="vpat-analyzer" tabIndex={-1}>VPAT Analyzer</h3><p>At NYU IT, I helped build the VPAT Analyzer, a Google Sheets tool that uses AI and APIs to support reviews of vendor accessibility documentation. It applies weighted criteria to produce a documentation quality score and letter grade. Reviewers can use the breakdown to decide where to ask vendors for more evidence or clearer explanations.</p></div>
      <div className="example"><table><caption>Illustrative example · fictional report</caption><thead><tr><th>Criterion</th><th>Weight</th><th>Score</th></tr></thead><tbody>{[['Completeness','40%','90'],['Clarity of evidence','35%','80'],['Specificity of explanations','25%','88']].map(r=><tr key={r[0]}><th>{r[0]}</th><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table><div className="result">Weighted result <strong>86/100 · B</strong></div><p>This measures documentation quality. Accessibility conformance requires a separate assessment.</p></div>
    </article>
    <div className="other">{more.map(p=><article key={p.id} aria-labelledby={p.id}>
      <div className="category">{p.type}</div><h3 id={p.id} tabIndex={-1}>{p.title}</h3><p>{p.text}</p>
      {p.url&&<ProjectLink url={p.url} label={p.link}/>}
    </article>)}</div>
  </section>
}
export function AboutMe() {
  return <section className="block" aria-labelledby="about">
    <Heading id="about" number="03" title="About me" side="Background"/>
    <p className="site-note">I’m Muskan Saxena. I started out studying English, then moved into business operations and analytics. That path shaped how I work. I like digging into the data, asking who needs to use it, and figuring out how to make it useful to them.</p>
    <p className="site-note">I’m now pursuing a master’s in Management of Technology at NYU Tandon and working as a Digital Accessibility Analyst at NYU IT. I’ve built a dashboard to help the American Chemical Society understand how its local sections’ activities aligned with its strategy, prototyped a semester-planning app for students, and helped build a tool that gives accessibility reviewers a clearer starting point for vendor follow-up. The part I enjoy most is figuring out what would make someone’s next decision easier, then building something they can actually use.</p>
  </section>
}
export function SiteNotes({sourceUrl}:{sourceUrl:string}) {
  return <section className="block" aria-labelledby="site">
    <Heading id="site" number="04" title="How I built this site" side="Portfolio notes"/>
    <p className="site-note">I built this portfolio in v0 and published it on Vercel to give recruiters one place to explore my work. A keyboard-friendly jump link takes readers straight to Featured work, and I use the connected GitHub repository to track revisions.</p>
    <ProjectLink url={sourceUrl} label="View source on GitHub"/>
  </section>
}
