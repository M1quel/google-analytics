import { useEffect, useState } from "react";
import CookieConsent from "./components/CookieConsent";
import Gallery from "./components/Gallery";
import Pitch from "./components/Pitch";
import Plans from "./components/Plans";
import PrimaryNavigation from "./components/PrimaryNavigation";
import Testimonials from "./components/Tesimonials";
import setCookies from "./helpers/setCookies";
import "./style.scss";

function App() {
  var [hasCookie, setHasCookie] = useState(false);
  useEffect(function(){
    var cookie = document.cookie
    setHasCookie(cookie.includes("landingpagedemo"));
  
    if(hasCookie) {
      var cookieArray = cookie.get("landingpagedemo").split("; ");
      var config = cookieArray.filter(string => string.includes("acceptnecessary"));

      config = new URLSearchParams(config[0]).get("landingpagedemo")
      setCookies(JSON.parse(config));
      document.body.className = "";
    }
  }, [setHasCookie, hasCookie])
  return (
    <>
      <PrimaryNavigation/>
      <Gallery/>
      <Pitch/>
      <Testimonials/>
      <Plans/>
      {!hasCookie && <CookieConsent/>}
    </>
  );
}

export default App;
