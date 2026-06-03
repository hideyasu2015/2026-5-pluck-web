/* PLUCK UI kit — page screens. Uses window primitives from components.jsx. */
const { Icon, Eyebrow, SectionHeader, Photo, Roundel } = window;

/* shared scroll-reveal hook */
function useReveal(){
  React.useEffect(()=>{
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((es)=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }),{threshold:.12});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  });
}

/* ---------------- HERO (home) ---------------- */
function Hero({go}){
  return (
    <section style={{position:"relative",minHeight:"92vh",display:"flex",alignItems:"center",justifyContent:"center",
      background:"var(--matcha-deep)",overflow:"hidden",textAlign:"center"}}>
      <div className="imgph imgph-photo" style={{position:"absolute",inset:0,opacity:.4,mixBlendMode:"overlay"}}/>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(11,61,46,.9),rgba(11,61,46,.3) 55%,transparent)"}}/>
      <div style={{position:"relative",zIndex:2,padding:"0 28px"}}>
        <h1 className="serif" style={{color:"var(--cream-silk)",fontSize:"clamp(4.5rem,13vw,10rem)",fontWeight:500,
          lineHeight:.95,letterSpacing:"-.04em",margin:0,textShadow:"0 8px 40px rgba(0,0,0,.4)"}}>PLUCK</h1>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:14}}>
          <div style={{width:96,height:1,background:"color-mix(in oklab,var(--cream-silk) 30%,transparent)",marginBottom:16}}/>
          <span className="serif" style={{color:"color-mix(in oklab,var(--cream-silk) 90%,transparent)",
            letterSpacing:".38em",textTransform:"uppercase",fontSize:"clamp(1.1rem,2vw,2rem)",fontWeight:500}}>Tokyo</span>
        </div>
        <div style={{display:"flex",gap:18,justifyContent:"center",marginTop:44,flexWrap:"wrap"}}>
          <button className="btn btn-primary" onClick={()=>go("wholesale")}>Explore Wholesale</button>
          <button className="btn btn-ghost" onClick={()=>go("story")}>Our Story</button>
        </div>
      </div>
      <div style={{position:"absolute",bottom:34,left:"50%",transform:"translateX(-50%)",display:"flex",
        flexDirection:"column",alignItems:"center",gap:8,color:"color-mix(in oklab,var(--cream-silk) 50%,transparent)"}}>
        <div style={{width:1,height:54,background:"color-mix(in oklab,var(--cream-silk) 25%,transparent)"}}/>
        <span style={{fontSize:10,letterSpacing:".2em",textTransform:"uppercase"}}>Scroll</span>
      </div>
    </section>
  );
}

function Home({go}){
  useReveal();
  return (
    <div className="page">
      <Hero go={go}/>

      {/* philosophy */}
      <section className="section" style={{borderTop:"1px solid color-mix(in oklab,var(--matcha-deep) 5%,transparent)",borderBottom:"1px solid color-mix(in oklab,var(--matcha-deep) 5%,transparent)"}}>
        <div className="container reveal" style={{maxWidth:880,textAlign:"center"}}>
          <p className="serif" style={{fontSize:"clamp(1.6rem,3vw,2.25rem)",color:"var(--matcha-deep)",margin:0,opacity:.92}}>Delivering authentic matcha, with care.</p>
          <p style={{fontWeight:300,fontSize:16,lineHeight:1.9,color:"color-mix(in oklab,var(--matcha-deep) 85%,transparent)",marginTop:28,whiteSpace:"pre-line"}}>
{`Today, matcha is attracting attention worldwide. Yet matcha differing from its original quality — with invisible origins — is in circulation.

Our mission is not merely to sell products, but to pass on the "authentic matcha culture" that Japan is proud of, to the next generation and the world.`}</p>
          <Photo label="philosophy — ceremonial whisking" ratio="21/9" radius={24} style={{marginTop:40}}/>
          <div className="rule" style={{width:48,margin:"40px auto 0"}}/>
        </div>
      </section>

      {/* commitment */}
      <section className="section">
        <div className="container">
          <div className="reveal"><SectionHeader title="Our Commitment" sub="We possess over 100 varieties of premium matcha. We propose the ideal selection for every application."/></div>
          <div className="commit-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:32,marginTop:56}}>
            {[["Top Growing Regions","Selected matcha from Japan's leading regions."],
              ["100% Japan-Grown","Clear, traceable origins — grown entirely in Japan."],
              ["Wide Matcha Selection","The right matcha for each and every use case."]].map((c,i)=>(
              <div key={i} className="reveal" style={{textAlign:"center",transitionDelay:(i*90)+"ms"}}>
                <Photo label={c[0]} ratio="4/5" radius={18}/>
                <h3 className="serif" style={{fontSize:24,color:"var(--matcha-deep)",margin:"22px 0 8px",fontWeight:500}}>{c[0]}</h3>
                <p style={{fontWeight:300,fontSize:14,lineHeight:1.6,color:"color-mix(in oklab,var(--charcoal-light) 70%,transparent)",maxWidth:280,margin:"0 auto"}}>{c[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* supply chain split */}
      <section className="section section-mint">
        <div className="container split" style={{display:"flex",gap:64,alignItems:"center"}}>
          <div className="reveal" style={{flex:1}}>
            <Eyebrow>Global Supply Chain</Eyebrow>
            <h2 className="serif" style={{fontSize:"clamp(1.9rem,3.2vw,3rem)",color:"var(--matcha-deep)",lineHeight:1.25,margin:"18px 0",fontWeight:400,letterSpacing:"-.01em"}}>From Japan to the World,<br/>Trusted Quality, Delivered.</h2>
            <div className="rule" style={{width:80}}/>
            <p style={{fontWeight:300,fontSize:18,lineHeight:1.7,color:"color-mix(in oklab,var(--charcoal-light) 85%,transparent)",maxWidth:480,marginTop:22}}>Leveraging production networks across Japan, we maintain a stable and reliable supply system.</p>
            <div style={{marginTop:28}}><button className="btn btn-outline" onClick={()=>go("wholesale")}>See Wholesale</button></div>
          </div>
          <div className="reveal" style={{flex:1}}>
            <Photo label="global wholesale supply" ratio="4/3" radius={0} style={{borderTopRightRadius:24,borderBottomLeftRadius:24,boxShadow:"0 25px 50px -12px rgba(0,0,0,.25)"}}/>
          </div>
        </div>
      </section>

      <CtaBand go={go}/>
    </div>
  );
}

/* reusable dark CTA */
function CtaBand({go}){
  return (
    <section className="section section-dark">
      <div className="grain-local"/>
      <div className="container" style={{position:"relative",zIndex:1,maxWidth:620}}>
        <div style={{background:"color-mix(in oklab,#fff 5%,transparent)",backdropFilter:"blur(12px)",
          border:"1px solid color-mix(in oklab,#fff 10%,transparent)",borderRadius:18,padding:"42px 40px",textAlign:"center"}}>
          <h3 className="serif" style={{fontSize:26,color:"var(--cream-silk)",margin:"0 0 12px"}}>Let's get started</h3>
          <p style={{fontWeight:300,lineHeight:1.7,color:"color-mix(in oklab,var(--cream-silk) 80%,transparent)",margin:"0 0 24px",whiteSpace:"pre-line"}}>
{`Your first sample is complimentary.
Wholesale, OEM, bulk supply, and more —
please reach out at your convenience.`}</p>
          <button className="btn btn-primary" style={{width:"100%"}} onClick={()=>go("contact")}>info@pluck.co.jp</button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- inner page hero ---------------- */
function PageHero({title, sub, eyebrow, label}){
  return (
    <section style={{position:"relative",minHeight:"58vh",display:"flex",alignItems:"flex-end",justifyContent:"center",
      background:"var(--matcha-deep)",overflow:"hidden",textAlign:"center",paddingBottom:56}}>
      <div className="imgph imgph-photo" style={{position:"absolute",inset:0,opacity:.4,mixBlendMode:"overlay"}}><span className="imgph-cap">{label}</span></div>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(11,61,46,.8),transparent 45%,rgba(11,61,46,.9))"}}/>
      <div style={{position:"relative",zIndex:2,padding:"0 28px",maxWidth:680}}>
        <h1 className="serif" style={{color:"var(--cream-silk)",fontSize:"clamp(3rem,6vw,4.5rem)",fontWeight:300,lineHeight:1.15,margin:0}}>{title}</h1>
        {eyebrow && <p style={{color:"color-mix(in oklab,var(--cream-silk) 90%,transparent)",letterSpacing:".2em",textTransform:"uppercase",fontSize:14,marginTop:14}}>{eyebrow}</p>}
        {sub && <p style={{color:"color-mix(in oklab,var(--cream-silk) 90%,transparent)",fontWeight:300,fontSize:19,marginTop:14,lineHeight:1.5}}>{sub}</p>}
      </div>
    </section>
  );
}

/* ---------------- STORY ---------------- */
function Story({go}){
  useReveal();
  const items = [
    ["#01: Market Distortion and Authentic Matcha Out of Reach","#cfe8d4",
     "While the world rushes toward \u201cMATCHA,\u201d the underside of the market is warping. \u201cFrom Japan\u201d is used loosely while imitations spread. Demand surges, yet legitimate production cannot keep pace — so genuinely high-quality matcha fails to reach those who need it. Elevating matcha into a sustainable industry Japan can be proud of is PLUCK's mission."],
    ["#02: PLUCK as a Gateway of Trust","#b8dcc4",
     "We are not tea farmers — and that is precisely why we are not bound by one region's habits or supply constraints. Uji, Yame, Nishio: we connect directly with trusted gardens across Japan, from curating quality to securing stable supply. For partners worldwide who want authentic Japanese matcha, PLUCK becomes the most honest and resilient gateway of trust."],
    ["#03: A Gateway to a Richer Everyday Life","#9fcea8",
     "PLUCK's journey does not end at wholesale. In the years ahead we envision our own brands and shops bringing matcha directly to end consumers. In a restless modern world, one bowl of matcha can restore quiet to the mind — and we weave that authentic experience into daily life around the globe."],
  ];
  return (
    <div className="page">
      <PageHero title="The Spirit of PLUCK" eyebrow="Brand Story" label="tea fields at first light"/>
      <section className="section" style={{background:"#e5f0e7"}}>
        <div className="container" style={{maxWidth:760}}>
          <div className="reveal" style={{textAlign:"center",marginBottom:48}}>
            <Eyebrow>Story</Eyebrow>
            <h2 className="serif" style={{fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"var(--matcha-deep)",margin:"16px 0 0",fontWeight:400}}>PLUCK | Story Strategy</h2>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:28}}>
            {items.map((it,i)=>(
              <article key={i} className="reveal" style={{background:it[1],borderRadius:16,padding:"34px 36px",
                border:"1px solid color-mix(in oklab,var(--matcha-soft) 28%,transparent)",boxShadow:"0 1px 3px rgba(0,0,0,.06)"}}>
                <h3 className="mincho" style={{fontFamily:"var(--font-mincho)",fontSize:"clamp(1.25rem,2vw,1.5rem)",color:"var(--matcha-deep)",margin:"0 0 18px",lineHeight:1.4}}>{it[0]}</h3>
                <p style={{fontWeight:300,fontSize:15,lineHeight:1.75,color:"color-mix(in oklab,var(--charcoal-light) 90%,transparent)",margin:0}}>{it[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand go={go}/>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About({go}){
  useReveal();
  const rows = [
    ["building","Company Name","PLUCK Inc."],
    ["building","English Name","PLUCK Inc."],
    ["users","CEO","Takahiro Endo"],
    ["users","Directors","Yosuke Oikawa / Takeaki Fukuoka"],
    ["briefcase","Business","Domestic and international matcha sales"],
    ["banknote","Capital","1,000,000 JPY"],
    ["pin","Address","R-Cube Aoyama 3F, 1-3-1 Kita-Aoyama, Minato-ku, Tokyo"],
  ];
  return (
    <div className="page">
      <PageHero title="About PLUCK" sub="We operate a domestic and international matcha sales business." label="the workshop, Aoyama"/>
      <section className="section">
        <div className="container split" style={{display:"flex",gap:64,alignItems:"flex-start",maxWidth:1040}}>
          <div className="reveal" style={{flex:"0 0 280px",display:"flex",justifyContent:"center"}}>
            <div style={{width:240,height:240,borderRadius:9999,background:"radial-gradient(circle at 38% 32%,#2f6b4f,#0b3d2e 70%)",
              display:"flex",alignItems:"center",justifyContent:"center",color:"var(--cream-silk)",
              fontFamily:"var(--font-serif)",fontSize:84,boxShadow:"0 25px 50px -12px rgba(11,61,46,.4)"}}>P</div>
          </div>
          <div className="reveal" style={{flex:1}}>
            <h2 className="serif" style={{fontSize:"clamp(1.8rem,3vw,2.25rem)",color:"var(--matcha-deep)",margin:0,fontWeight:500}}>PLUCK Inc.</h2>
            <p style={{fontWeight:300,fontSize:17,lineHeight:1.75,color:"color-mix(in oklab,var(--charcoal-light) 85%,transparent)",marginTop:18}}>PLUCK was born not by chance, but from everything we have built together — taking small, certain steps, one after another.</p>
            <div style={{borderTop:"1px solid color-mix(in oklab,var(--matcha-deep) 8%,transparent)",marginTop:30,paddingTop:30}}>
              <Eyebrow>Name Origin</Eyebrow>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginTop:18}}>
                <div style={{background:"color-mix(in oklab,#fff 55%,transparent)",border:"1px solid color-mix(in oklab,var(--matcha-deep) 10%,transparent)",borderRadius:16,padding:"20px 22px"}}>
                  <h4 className="serif" style={{fontSize:17,color:"var(--matcha-deep)",margin:"0 0 8px"}}>Physical Meaning</h4>
                  <p style={{fontWeight:300,fontSize:13.5,lineHeight:1.6,color:"color-mix(in oklab,var(--charcoal-light) 90%,transparent)",margin:0}}>To pluck with care. The act of hand-picking tea leaves is the very origin of matcha.</p>
                </div>
                <div style={{background:"color-mix(in oklab,#fff 55%,transparent)",border:"1px solid color-mix(in oklab,var(--matcha-deep) 10%,transparent)",borderRadius:16,padding:"20px 22px"}}>
                  <h4 className="serif" style={{fontSize:17,color:"var(--matcha-deep)",margin:"0 0 8px"}}>Spiritual Meaning</h4>
                  <p style={{fontWeight:300,fontSize:13.5,lineHeight:1.6,color:"color-mix(in oklab,var(--charcoal-light) 90%,transparent)",margin:0}}>To seize luck through your own effort and courage — the will of our co-founders, embedded in the name.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{background:"color-mix(in oklab,var(--matcha-light) 20%,var(--cream-silk))"}}>
        <div className="container" style={{maxWidth:880}}>
          <div className="reveal" style={{textAlign:"center",marginBottom:40}}>
            <h2 className="serif" style={{fontSize:"clamp(1.8rem,3vw,2.25rem)",color:"var(--matcha-deep)",margin:0}}>Company Information</h2>
            <p style={{fontWeight:300,color:"color-mix(in oklab,var(--charcoal-light) 80%,transparent)",marginTop:8}}>Corporate Profile</p>
          </div>
          <div className="reveal">
            {rows.map((r,i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"230px 1fr",gap:16,padding:"22px 24px",
                borderBottom:"1px solid color-mix(in oklab,var(--matcha-deep) 10%,transparent)",alignItems:"center"}}>
                <div style={{display:"flex",alignItems:"center",gap:12,color:"var(--matcha-deep)"}}>
                  <span style={{color:"var(--matcha-soft)"}}><Icon name={r[0]} size={18}/></span>
                  <span style={{fontSize:14,fontWeight:600}}>{r[1]}</span>
                </div>
                <span style={{fontSize:14,fontWeight:300,color:"var(--charcoal-light)"}}>{r[2]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand go={go}/>
    </div>
  );
}

window.PLUCK_SCREENS = { Home, Story, About, PageHero, CtaBand, useReveal };
