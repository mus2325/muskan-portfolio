import { ArrowDown, ArrowUp } from 'lucide-react'
import { AboutMe, FeaturedWork, MoreWork, SiteNotes } from '@/components/work'

export default function Page() {
  return <div className="shell" id="top">
    <a className="skip" href="#main">Skip to content</a>
    <header><a className="identity" href="#top"><span className="mark">MS</span>Muskan Saxena</a><nav className="flex-wrap" aria-label="Page sections"><a href="#featured">Featured work</a><a href="#more">More work</a><a href="#about">About</a><a href="#site">About this site</a></nav></header>
    <main id="main"><section className="hero" aria-labelledby="headline"><div className="intro"><div className="eyebrow"><i/> Analytics &amp; product portfolio</div><h1 id="headline">I turn data and<br/> research into <em>tools<br/> people can use.</em></h1><p>I’m Muskan, a Management of Technology graduate student at NYU Tandon and a Digital Accessibility Analyst at NYU IT.</p><a className="cta" href="#featured">View featured work <ArrowDown size={16} aria-hidden="true"/></a></div>
    <figure aria-hidden="true"><div className="plate"><b className="tl">+</b><b className="tr">+</b><b className="bl">+</b><b className="br">+</b><img src="/ribbon.webp" alt="" width="720" height="720"/></div><figcaption><span>FIG. 01</span><span>Research → Structure → Tool</span></figcaption></figure></section>
    <FeaturedWork/><MoreWork/><AboutMe/><SiteNotes sourceUrl="https://github.com/mus2325/muskan-portfolio"/></main><footer><span>Muskan Saxena <small>/ Portfolio</small></span><a href="#top">Back to top <ArrowUp size={14}/></a></footer></div>
}
