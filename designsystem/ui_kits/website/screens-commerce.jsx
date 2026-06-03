/* PLUCK UI kit — wholesale, products, product detail, contact. */
const { Icon:Ic, Eyebrow:Eb, SectionHeader:SH, Photo:Ph } = window;
const { PageHero:PH, CtaBand:CB, useReveal:uR } = window.PLUCK_SCREENS;

/* ---------------- WHOLESALE ---------------- */
function Wholesale({go}){
  uR();
  const uses = [
    ["store","For Cafés","Latte & beverage grade"],
    ["utensils","For Restaurants","Ceremonial & premium"],
    ["cake","For Baking","Culinary grade"],
    ["building","For Business","OEM, bulk & corporate"],
  ];
  return (
    <div className="page">
      <PH title="Wholesale" sub="Premium matcha supply for every kind of business." label="bulk supply & packing"/>
      <section className="section">
        <div className="container">
          <div className="reveal card" style={{textAlign:"center",padding:"54px 28px",borderRadius:16}}>
            <h2 className="serif" style={{fontSize:"clamp(1.8rem,3vw,2.25rem)",color:"var(--matcha-deep)",margin:0,fontWeight:500}}>Wholesale Purchase</h2>
            <p style={{fontWeight:300,fontSize:17,color:"color-mix(in oklab,var(--charcoal-light) 80%,transparent)",margin:"16px auto 0",maxWidth:560,lineHeight:1.6}}>We ship over 100 premium matcha selections gathered from across Japan. We support every kind of business.</p>
          </div>
          <div className="use-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24,marginTop:28}}>
            {uses.map((u,i)=>(
              <div key={i} className="reveal card" style={{textAlign:"center",padding:"32px 18px",borderRadius:16,transitionDelay:(i*70)+"ms"}}>
                <span style={{color:"var(--gold)",display:"inline-block",marginBottom:14}}><Ic name={u[0]} size={38}/></span>
                <h3 style={{fontSize:13,fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"var(--charcoal-ink)",margin:"0 0 5px"}}>{u[1]}</h3>
                <p style={{fontSize:12,color:"color-mix(in oklab,var(--charcoal-light) 70%,transparent)",margin:0}}>{u[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* full-bleed divider */}
      <section style={{position:"relative",minHeight:300,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div className="imgph imgph-photo" style={{position:"absolute",inset:0}}/>
        <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,.2)"}}/>
        <div style={{position:"relative",zIndex:2,display:"flex",alignItems:"center",gap:24}}>
          <div style={{display:"flex",flexDirection:"column",gap:9}}><div style={{height:1,width:52,background:"#fff"}}/><div style={{height:1,width:52,background:"#fff"}}/></div>
          <h2 style={{fontSize:"clamp(2rem,5vw,3.5rem)",fontWeight:700,color:"#fff",letterSpacing:".14em",margin:0}}>OUR MATCHA</h2>
        </div>
      </section>

      {/* grades */}
      <section className="section section-mint">
        <div className="container" style={{display:"flex",flexDirection:"column",gap:80}}>
          {[["Ceremonial","\u6975\u4e0a — The finest grade for traditional tea ceremony","The finest masterpiece of tea leaves — a vivid emerald color and a deep, smooth umami that lingers on the palate.",false],
            ["Premium","Refined depth for signature menus","Full-bodied with refined umami and a clean, lingering finish — built for elevated lattes and specialty drinks.",true],
            ["Culinary","Bold character for baking & volume","A robust, cost-efficient grade whose flavor stays distinct through milk, sugar, and heat.",false]].map((g,i)=>(
            <div key={i} className="reveal grade-row" style={{display:"flex",gap:48,alignItems:"center",flexDirection:g[3]?"row-reverse":"row"}}>
              <div style={{flex:1}}><Ph label={g[0]+" grade"} ratio="4/5" radius={24} style={{boxShadow:"0 25px 50px -12px rgba(0,0,0,.25)"}}/></div>
              <div style={{flex:1}}>
                <h3 className="serif" style={{fontSize:"clamp(2rem,4vw,3rem)",color:"var(--matcha-deep)",margin:"0 0 10px",fontWeight:400}}>{g[0]}</h3>
                <p className="serif" style={{fontSize:15,letterSpacing:".06em",color:"var(--gold)",margin:"0 0 22px"}}>{g[1]}</p>
                <p style={{fontWeight:300,fontSize:17,lineHeight:1.7,color:"color-mix(in oklab,var(--charcoal-light) 80%,transparent)",maxWidth:440,margin:0}}>{g[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactForm go={go} compact/>
    </div>
  );
}

/* ---------------- PRODUCTS ---------------- */
function ProductCard({p, go}){
  return (
    <a className="card" onClick={()=>go("product",p.code)} style={{cursor:"pointer",overflow:"hidden",borderRadius:16,display:"flex",flexDirection:"column"}}>
      <div className="imgph" style={{aspectRatio:"4/3",background:"var(--pearl)"}}>
        <div className="imgph-jar" style={{background:"linear-gradient(160deg,"+ "#2f6b4f," + p.tone+")"}}/>
      </div>
      <div style={{padding:28,display:"flex",flexDirection:"column",flex:1}}>
        <div style={{fontSize:11,fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"var(--gold)",marginBottom:8}}>{p.cat}</div>
        <h3 className="serif" style={{fontSize:24,color:"var(--charcoal-ink)",margin:"0 0 10px"}}>{p.code}</h3>
        <p style={{fontWeight:300,fontSize:13.5,lineHeight:1.55,color:"color-mix(in oklab,var(--charcoal-light) 80%,transparent)",margin:"0 0 22px",flex:1,
          display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{p.desc}</p>
        <div style={{borderTop:"1px solid color-mix(in oklab,var(--charcoal-light) 10%,transparent)",paddingTop:16,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:13,fontWeight:500,color:"color-mix(in oklab,var(--charcoal-light) 60%,transparent)"}}>{p.region}</span>
          <span className="explore">Explore <Ic name="arrow" size={15}/></span>
        </div>
      </div>
    </a>
  );
}

function Products({go}){
  uR();
  const [cat,setCat] = React.useState("All");
  const list = window.PLUCK_PRODUCTS.filter(p=>cat==="All"||p.cat===cat);
  return (
    <div className="page">
      <PH title="Product Lineup" sub="We offer the widest selection of matcha varieties in Japan." label="our matcha, arranged"/>
      <section className="section" style={{paddingTop:56}}>
        <div className="container">
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12,marginBottom:48}}>
            {window.PLUCK_CATS.map(c=>(
              <button key={c} onClick={()=>setCat(c)} className="filter-pill"
                style={{padding:"9px 22px",borderRadius:9999,fontSize:13,fontWeight:500,
                border:"1px solid "+(cat===c?"var(--matcha-deep)":"color-mix(in oklab,var(--charcoal-light) 20%,transparent)"),
                background:cat===c?"var(--matcha-deep)":"#fff",color:cat===c?"var(--cream-silk)":"var(--charcoal-light)",whiteSpace:"nowrap",
                boxShadow:cat===c?"0 10px 15px -8px rgba(11,61,46,.5)":"none",transition:"all .3s var(--ease-out)"}}>{c}</button>
            ))}
          </div>
          <div className="prod-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:32}}>
            {list.map(p=><ProductCard key={p.code} p={p} go={go}/>)}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- PRODUCT DETAIL ---------------- */
function ProductDetail({code, go}){
  uR();
  const p = window.PLUCK_PRODUCTS.find(x=>x.code===code) || window.PLUCK_PRODUCTS[0];
  const attrs = [["Category",p.cat],["Origin",p.region],["Format","Stone-milled powder"],["Use","Latte · beverage · culinary"]];
  return (
    <div className="page" style={{paddingTop:96}}>
      <section className="section" style={{paddingTop:48}}>
        <div className="container">
          <button className="explore" onClick={()=>go("products")} style={{marginBottom:28,transform:"scaleX(-1)"}}><Ic name="arrow" size={15}/></button>
          <div className="split" style={{display:"flex",gap:56,alignItems:"flex-start"}}>
            <div className="reveal" style={{flex:1,position:"sticky",top:110}}>
              <div className="imgph" style={{aspectRatio:"1",background:"var(--pearl)",borderRadius:24,border:"1px solid color-mix(in oklab,var(--charcoal-light) 8%,transparent)"}}>
                <div className="imgph-jar" style={{width:"42%",background:"linear-gradient(160deg,#2f6b4f,"+p.tone+")"}}/>
              </div>
            </div>
            <div className="reveal" style={{flex:1}}>
              <Eb>{p.cat}</Eb>
              <h1 className="serif" style={{fontSize:"clamp(2.4rem,5vw,3.5rem)",color:"var(--matcha-deep)",margin:"14px 0 18px",fontWeight:500}}>{p.code}</h1>
              <p style={{fontWeight:300,fontSize:18,lineHeight:1.75,color:"color-mix(in oklab,var(--charcoal-light) 85%,transparent)",margin:0}}>{p.desc}</p>
              <div style={{margin:"32px 0",borderTop:"1px solid color-mix(in oklab,var(--matcha-deep) 10%,transparent)"}}>
                {attrs.map((a,i)=>(
                  <div key={i} style={{display:"grid",gridTemplateColumns:"160px 1fr",gap:16,padding:"16px 0",borderBottom:"1px solid color-mix(in oklab,var(--matcha-deep) 8%,transparent)"}}>
                    <span style={{fontSize:13,fontWeight:600,color:"var(--matcha-deep)",letterSpacing:".06em",textTransform:"uppercase"}}>{a[0]}</span>
                    <span style={{fontSize:15,fontWeight:300,color:"var(--charcoal-light)"}}>{a[1]}</span>
                  </div>
                ))}
              </div>
              <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
                <button className="btn btn-solid" onClick={()=>go("contact")}>Request a Sample</button>
                <button className="btn btn-outline" onClick={()=>go("wholesale")}>Wholesale Inquiry</button>
              </div>
              <p style={{fontSize:13,color:"color-mix(in oklab,var(--charcoal-light) 60%,transparent)",marginTop:20,fontStyle:"italic"}}>Your first sample is complimentary.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- CONTACT FORM ---------------- */
function ContactForm({go, compact}){
  const [sent,setSent] = React.useState(false);
  const fld = {width:"100%",padding:"14px 16px",borderRadius:12,border:"1px solid color-mix(in oklab,var(--charcoal-light) 18%,transparent)",
    background:"#fff",fontSize:15,fontFamily:"var(--font-sans)",color:"var(--charcoal-ink)",outline:"none"};
  const lab = {fontSize:12,fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:"var(--matcha-deep)",marginBottom:8,display:"block"};
  return (
    <section className="section" style={{background:compact?"var(--cream-silk)":"var(--cream-silk)"}}>
      <div className="container" style={{maxWidth:680}}>
        {!compact && <div style={{textAlign:"center",marginBottom:40}}><SH eyebrow="Contact" title="Let's get started" sub="Your first sample is complimentary. Fill out the form below."/></div>}
        {compact && <div style={{textAlign:"center",marginBottom:40}}><Eb>Get in touch</Eb><h2 className="serif" style={{fontSize:"clamp(1.8rem,3vw,2.25rem)",color:"var(--matcha-deep)",margin:"14px 0 0",fontWeight:500}}>Request wholesale pricing</h2></div>}
        {sent ? (
          <div className="card" style={{padding:"54px 32px",textAlign:"center",borderRadius:16}}>
            <span style={{color:"var(--gold)",display:"inline-block",marginBottom:16}}><Ic name="leaf" size={40}/></span>
            <h3 className="serif" style={{fontSize:26,color:"var(--matcha-deep)",margin:"0 0 10px"}}>Thank you.</h3>
            <p style={{fontWeight:300,color:"color-mix(in oklab,var(--charcoal-light) 80%,transparent)",margin:0}}>We'll be in touch shortly at the address you provided.</p>
          </div>
        ) : (
          <form className="card" style={{padding:"36px 34px",borderRadius:16,display:"flex",flexDirection:"column",gap:22}}
            onSubmit={e=>{e.preventDefault();setSent(true);}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
              <div><label style={lab}>Name</label><input style={fld} required placeholder="Your name"/></div>
              <div><label style={lab}>Company</label><input style={fld} placeholder="Business name"/></div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
              <div><label style={lab}>Email</label><input type="email" style={fld} required placeholder="you@company.com"/></div>
              <div><label style={lab}>Use case</label>
                <select style={fld}><option>For Cafés</option><option>For Restaurants</option><option>For Baking</option><option>OEM / Bulk</option></select>
              </div>
            </div>
            <div><label style={lab}>Message</label><textarea style={{...fld,resize:"vertical",minHeight:110}} placeholder="Tell us about your matcha needs…"/></div>
            <button className="btn btn-solid" type="submit" style={{alignSelf:"flex-start"}}>Send Inquiry</button>
          </form>
        )}
      </div>
    </section>
  );
}

function Contact({go}){
  return <div className="page"><PH title="Contact" eyebrow="info@pluck.co.jp" label="Aoyama, Tokyo"/><ContactForm go={go}/></div>;
}

window.PLUCK_SCREENS2 = { Wholesale, Products, ProductDetail, Contact };
