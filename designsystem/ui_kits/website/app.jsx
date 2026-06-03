/* PLUCK UI kit — app shell + router. */
const { Header, Footer } = window;
const { Home, Story, About } = window.PLUCK_SCREENS;
const { Wholesale, Products, ProductDetail, Contact } = window.PLUCK_SCREENS2;

function App(){
  const [route,setRoute] = React.useState("home");
  const [param,setParam] = React.useState(null);
  const go = (r,p=null)=>{
    setRoute(r); setParam(p);
    requestAnimationFrame(()=>window.scrollTo(0,0));
  };

  const darkHeader = route==="home"||route==="story"||route==="about"||route==="wholesale"||route==="products"||route==="contact";

  let screen;
  if(route==="home") screen=<Home go={go}/>;
  else if(route==="story") screen=<Story go={go}/>;
  else if(route==="about") screen=<About go={go}/>;
  else if(route==="wholesale") screen=<Wholesale go={go}/>;
  else if(route==="products") screen=<Products go={go}/>;
  else if(route==="product") screen=<ProductDetail code={param} go={go}/>;
  else if(route==="contact") screen=<Contact go={go}/>;
  else screen=<Home go={go}/>;

  // product detail uses a light header (no hero)
  const headerDark = route==="product" ? false : darkHeader;

  return (
    <React.Fragment>
      <Header route={route} go={go} dark={headerDark}/>
      <main>
        {screen}
        <Footer go={go}/>
      </main>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
