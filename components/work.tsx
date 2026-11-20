import { ArrowUpRight, Award } from 'lucide-react'
import { VpatScoringDemo } from './vpat-scoring-demo'

const featured = [
  {id:'coursewise',type:'Product design', title:'Coursewise', text:'I built a prototype to help students discover courses and turn their choices into a semester plan.', link:'Try Coursewise', url:'https://delay-foil-44706164.figma.site'},
  {id:'beverage-market',type:'Data visualization',title:'Decoding the Beverage Market',award:'Top 5 Finalist · LibertyViz 2026',text:'I used Tableau level-of-detail calculations to define retail tiers and compare supply. The dashboard shows how budget products drive volume while premium products anchor value.',link:'Explore the Tableau dashboard',url:'https://public.tableau.com/app/profile/muskan.saxena2290/viz/MS_TableauComp/Dashboard1'},
  {id:'customer-churn-research',type:'Machine learning',title:'Customer Churn Rate Prediction using Machine Learning Techniques for E-Commerce Sector',award:'Best Paper Award · ICICC 2024',text:'I presented this research on February 16, 2024, at the 7th International Conference on Innovative Computing & Communication and received the Best Paper Award in March 2024.',link:'Read the research paper',url:'https://www.researchgate.net/publication/384932722_Customer_Churn_Rate_Prediction_Using_Machine_Learning_Techniques_for_E-Commerce_Sector'}
]
const more = [
  {"id":"nyc-airbnb-local-law-18","title":"NYC Airbnb After Local Law 18","type":"Data visualization","text":"I built an interactive Tableau dashboard to explore New York City’s Airbnb listings after Local Law 18.","link":"Explore the Airbnb dashboard","url":"https://public.tableau.com/app/profile/muskan.saxena2290/viz/NYCAirbnbAfterLocalLaw18/Dashboard1"},
  {"id":"nyc-urban-data-intelligence","title":"NYC Urban Data Intelligence","type":"Data engineering · In progress","text":"I’m building a pipeline that fetches new and updated NYC 311 service requests from NYC Open Data, cleans them with Python and Pandas, and stores them in SQLite. A local Streamlit dashboard lets users explore requests by borough, date, and complaint category.","link":"View the project on GitHub","url":"https://github.com/mus2325/nyc-urban-data-intelligence"},
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
      {p.id === 'coursewise' && (
        <details className="mt-4 rounded-md border border-[var(--rule)] p-4">
          <summary className="cursor-pointer text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--blue)]">What I learned from testing</summary>
          <dl className="mt-3 grid gap-3">
            <div className="rounded bg-[#f1f3f8] p-3">
              <dt className="text-sm font-semibold">Before</dt>
              <dd className="mt-1 text-sm leading-relaxed">Some testers struggled to see where to start and how to move through the planning flow.</dd>
            </div>
            <div className="rounded bg-[#eef1fc] p-3">
              <dt className="text-sm font-semibold">After</dt>
              <dd className="mt-1 text-sm leading-relaxed">I clarified the introduction and simplified the bottom navigation to two tabs.</dd>
            </div>
          </dl>
          <p><strong>5 of 5 returning participants</strong> completed the revised journey. They had already tried the original, so I’d test with new participants to see how the revised flow works for first-time users.</p>
        </details>
      )}
    </article>)}</div>
  </section>
}
export function MoreWork() {
  return <section className="block" aria-labelledby="more">
    <Heading id="more" number="02" title="More work" side={`Project index (${String(more.length + 1).padStart(2, '0')})`}/>
    <article className="vpat" aria-labelledby="vpat-analyzer"><div><div className="category">Accessibility tools</div><h3 id="vpat-analyzer" tabIndex={-1}>VPAT Analyzer</h3><p>At NYU IT, I helped build the VPAT Analyzer, a Google Sheets tool that uses AI and APIs to support reviews of vendor accessibility documentation. It applies weighted criteria to produce a documentation quality score and letter grade. Reviewers can use the breakdown to decide where to ask vendors for more evidence or clearer explanations.</p></div>
      <VpatScoringDemo/>
    </article>
    <div className="other">{more.map(p=><article key={p.id} aria-labelledby={p.id}>
      <div className="category">{p.type}</div><h3 id={p.id} tabIndex={-1}>{p.title}</h3><p>{p.text}</p>
      {p.id === 'nyc-urban-data-intelligence' && (
        <ol aria-label="NYC 311 data pipeline" className="mt-4 grid list-decimal gap-1 rounded-md border border-[var(--rule)] py-3 pr-3 pl-8 text-sm">
          <li>Fetch requests from NYC Open Data</li>
          <li>Validate and clean rows with Pandas</li>
          <li>Store new and updated records in SQLite</li>
          <li>Explore trends in Streamlit</li>
        </ol>
      )}
      {p.url&&<ProjectLink url={p.url} label={p.link}/>}
    </article>)}</div>
  </section>
}
export function AboutMe() {
  return <section className="block" aria-labelledby="about">
    <Heading id="about" number="03" title="About me" side="Background"/>
    <p className="site-note">I’m Muskan Saxena. I started out studying English, then moved into business operations and analytics. Studying English taught me to pay attention to what a reader needs. I still ask that question when I build a dashboard or prototype.</p>
    <p className="site-note">I’m now pursuing an MS (<strong>Master of Science</strong>) in Management of Technology at NYU Tandon and working as a Digital Accessibility Analyst at NYU IT. I’ve built a dashboard to help the American Chemical Society understand how its local sections’ activities aligned with its strategy, prototyped a semester-planning app for students, and helped build a tool that gives accessibility reviewers a clearer starting point for vendor follow-up. The part I enjoy most is figuring out what would make someone’s next decision easier, then building something they can actually use.</p>
    <div className="mt-6 max-w-[610px] border-l-2 border-[var(--blue)] pl-4">
      <h3 className="text-lg">Outside work</h3>
      <p className="site-note">I’m a Disney girl through and through, and rafting in Yosemite is a day I’ll never forget. I’ve rescued squirrels, kittens, and birds, and I have a golden retriever of my own.</p>
    </div>
    <ProjectLink url="https://www.linkedin.com/in/muskan-saxena25/" label="Connect on LinkedIn"/>
  </section>
}
export function SiteNotes({sourceUrl}:{sourceUrl:string}) {
  return <section className="block" aria-labelledby="site">
    <Heading id="site" number="04" title="How I built this site" side="Portfolio notes"/>
    <p className="site-note">I built this portfolio in v0 and published it on Vercel to give recruiters one place to explore my work. A keyboard-friendly jump link takes readers straight to Featured work, and I use the connected GitHub repository to track revisions.</p>
    <ProjectLink url={sourceUrl} label="View source on GitHub"/>
  </section>
}
