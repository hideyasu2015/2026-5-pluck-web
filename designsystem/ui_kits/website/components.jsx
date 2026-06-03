/* PLUCK UI kit — shared primitives & chrome.
   Exposed on window for cross-file use. */

const Icon = ({name, size=24, stroke=2, ...p}) => {
  const paths = {
    globe:<><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></>,
    mail:<><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></>,
    arrow:<><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    building:<><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></>,
    users:<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></>,
    briefcase:<><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></>,
    banknote:<><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></>,
    pin:<><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></>,
    store:<><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"/><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"/><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"/></>,
    utensils:<><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></>,
    cake:<><path d="M16 13H3"/><path d="M16 17H3"/><path d="m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6"/><circle cx="9" cy="7" r="2"/></>,
    leaf:<><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>{paths[name]}</svg>;
};

const Eyebrow = ({children, className=""}) => <span className={"eyebrow "+className}>{children}</span>;

const SectionHeader = ({eyebrow, title, sub, center=true, light=false}) => (
  <div style={{textAlign:center?"center":"left",maxWidth:center?720:560,margin:center?"0 auto":0}}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="serif" style={{fontWeight:500,fontSize:"clamp(2rem,4vw,3rem)",lineHeight:1.2,
      margin:"14px 0 0",color:light?"var(--cream-silk)":"var(--matcha-deep)",letterSpacing:"-.01em"}}>{title}</h2>
    {sub && <p style={{fontWeight:300,fontSize:18,lineHeight:1.65,margin:"16px 0 0",
      color:light?"color-mix(in oklab,var(--cream-silk) 85%,transparent)":"color-mix(in oklab,var(--charcoal-light) 82%,transparent)"}}>{sub}</p>}
    {center && <div className="rule" style={{width:48,margin:"22px auto 0"}}/>}
  </div>
);

/* Photographic placeholder block */
const Photo = ({label, ratio="16/9", radius=16, style={}}) => (
  <div className="imgph imgph-photo" style={{aspectRatio:ratio,borderRadius:radius,...style}}>
    <span className="imgph-cap">{label}</span>
  </div>
);

const Roundel = () => <div className="roundel" style={{color:"var(--cream-silk)"}}>P</div>;

function Header({route, go, dark}){
  const [scrolled,setScrolled] = React.useState(false);
  const [menu,setMenu] = React.useState(false);
  React.useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 40);
    window.addEventListener("scroll",onScroll); onScroll();
    return ()=> window.removeEventListener("scroll",onScroll);
  },[]);
  const onHero = !scrolled && dark;
  const col = onHero || scrolled ? null : null;
  const txt = scrolled ? "var(--matcha-deep)" : (dark? "var(--cream-silk)":"var(--matcha-deep)");
  return (
    <header className={"hdr"+(scrolled?" scrolled":"")} style={{color:txt}}>
      <div className="container hdr-inner">
        <a className="brandmark" onClick={()=>go("home")} style={{cursor:"pointer"}}>
          <Roundel/><span className="wordmark">PLUCK</span>
        </a>
        <nav className="nav">
          {window.PLUCK_NAV.map(n=>(
            <a key={n.id} className={route===n.id?"active":""} onClick={()=>go(n.id)} style={{cursor:"pointer",color:txt}}>{n.label}</a>
          ))}
          <a className="contact-link" onClick={()=>go("contact")} style={{cursor:"pointer",borderColor:"color-mix(in oklab,"+txt+" 30%,transparent)",color:txt}}>Contact</a>
          <span className="globe" style={{color:txt}}><Icon name="globe" size={15}/>EN</span>
        </nav>
        <button className="menu-btn" onClick={()=>setMenu(!menu)} style={{display:"none"}} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" stroke={txt} strokeWidth="2" strokeLinecap="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
        </button>
      </div>
    </header>
  );
}

function Footer({go}){
  return (
    <footer className="section-dark" style={{padding:"72px 0 40px"}}>
      <div className="grain-local"/>
      <div className="container" style={{position:"relative",zIndex:1}}>
        <div className="footer-grid" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1.4fr",gap:48}}>
          <div>
            <a className="brandmark" onClick={()=>go("home")} style={{cursor:"pointer"}}>
              <Roundel/><span className="serif" style={{fontSize:28,letterSpacing:"-.01em"}}>PLUCK Inc.</span>
            </a>
            <p style={{fontWeight:300,fontSize:14,lineHeight:1.6,maxWidth:340,marginTop:18,
              color:"color-mix(in oklab,var(--cream-silk) 80%,transparent)"}}>Premium Japanese matcha. Sourced with integrity, crafted with courage.</p>
          </div>
          <div>
            <h4 style={{fontSize:11,letterSpacing:".18em",textTransform:"uppercase",color:"var(--gold)",marginBottom:16}}>Discover</h4>
            {window.PLUCK_NAV.map(n=>(
              <div key={n.id} style={{marginBottom:11}}><a onClick={()=>go(n.id)} style={{cursor:"pointer",fontWeight:300,fontSize:14,opacity:.85}}>{n.label}</a></div>
            ))}
          </div>
          <div>
            <h4 style={{fontSize:11,letterSpacing:".18em",textTransform:"uppercase",color:"var(--gold)",marginBottom:16}}>Inquiries</h4>
            <div style={{display:"flex",flexDirection:"column",gap:11,fontWeight:300,fontSize:14,opacity:.85}}>
              <a onClick={()=>go("contact")} style={{cursor:"pointer"}}>Contact</a>
              <span style={{display:"flex",alignItems:"center",gap:8}}><Icon name="mail" size={14}/>info@pluck.co.jp</span>
              <span style={{fontStyle:"italic",lineHeight:1.5,maxWidth:300}}>R-Cube Aoyama 3F, 1-3-1 Kita-Aoyama, Minato-ku, Tokyo</span>
            </div>
          </div>
        </div>
        <div style={{borderTop:"1px solid color-mix(in oklab,var(--cream-silk) 10%,transparent)",marginTop:48,paddingTop:24,
          display:"flex",justifyContent:"space-between",fontSize:11,opacity:.4,flexWrap:"wrap",gap:10}}>
          <span>© 2026 PLUCK Inc. All Rights Reserved.</span>
          <span style={{letterSpacing:".18em",textTransform:"uppercase",fontSize:10}}>Premium Japanese Matcha Wholesale</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, Eyebrow, SectionHeader, Photo, Roundel, Header, Footer });
