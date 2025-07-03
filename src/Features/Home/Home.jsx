import Demo from "./Components/Organisms/Demo";
import HomeBg from "./Components/Organisms/HomeBg";
import KeyFeatures from "./Components/Organisms/KeyFeatures";
import OurCustomers from "./Components/Organisms/OurCustomers";
import Plan from "./Components/Organisms/Plan";
import Works from "./Components/Organisms/Works";


export default function LandingPage() {
  return <>
    <HomeBg/>
    <KeyFeatures/>
    <Works/>
    <OurCustomers/>
    <Plan/>
    <Demo/>
  </>
}
