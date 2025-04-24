import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Footer from './components/Footer';  
import Blog from './components/Blog';
import DownloadPage from './components/DownloadPage';
import Subscribe from './components/Subscribe.jsx';
import FC25 from './components/Blog/FC25'
import Shop from './components/Shop';
import Inter from './components/Clubs/Inter';
import Atlanta from './components/Clubs/Atlanta'; 
import Austin from './components/Clubs/Austin';
import Charlotte from './components/Clubs/Charlotte';
import Chicago from './components/Clubs/Chicago';
import Supplements from './components/Supplements.jsx';
import Games from './components/Games';
import Contact from './components/Contact';
import Social from './components/Social';
import Navbar from './components/Navbar';
import Imga from './components/Blog/Imga';
import TopMLSJerseys2024 from './components/Blog/TopMlsJersey2024.jsx';
import VancouverWhitecapsForSale from './components/Blog/Vancouver-Whitecaps-For-Sale.jsx';
import ColumbusCrewvsInterMiamiResult from "./components/Blog/ColumbusCrewvsInterMiamiResult.jsx";
import ColumbusVsMiamiMLSBlog from './components/Blog/ColumbusVsMiamiMLSBlog.jsx';
import PeterVermesBlog from './components/Blog/PeterVermesBlog.jsx';
import KevinDb from './components/Blog/KevinDb.jsx';
import Boupendza from './components/Blog/Boupendza.jsx';
import OnePlanetKit from './components/Blog/OnePlanetKit.jsx';
import ThomasMullerMLSBlog from './components/Blog/ThomasMullerMLSBlog.jsx';
import SanDiegoNews from './components/Blog/SanDiegoNews.jsx';
import SanDiegoFirstWin from './components/Blog/SanDiegoFirstWin.jsx';
import Mlspast from './components/Blog/Mlspast.jsx';
import SupplementsSoccer from './components/Blog/SupplementsSoccer.jsx';
import BeckhamEffect from './components/Blog/BeckhamEffect.jsx';
import WomenSoccer from './components/Blog/WomenSoccer.jsx';
import Us11 from './components/Blog/Us11.jsx';
import Cincinnati from './components/Clubs/Cincinnati';
import Colorado from './components/Clubs/Colorado';
import Columbus from './components/Clubs/Columbus';
import Dallas from './components/Clubs/Dallas';
import Dc from './components/Clubs/Dc';
import Earthquakes from './components/Clubs/Earthquakes';
import Houston from './components/Clubs/Houston';
import Lafc from './components/Clubs/Lafc';
import Lagalaxy from './components/Clubs/Lagalaxy';
import Mexico from './components/Clubs/Mexico';
import Montreal from './components/Clubs/Montreal';
import Minnesota from './components/Clubs/Minnesota';
import Nashville from './components/Clubs/Nashville';
import Ne from './components/Clubs/Ne';
import Nycfc from './components/Clubs/Nycfc';
import Nyrb from './components/Clubs/Nyrb';
import Orlando from './components/Clubs/Orlando';
import Philadelphia from './components/Clubs/Philadelphia';
import Portland from './components/Clubs/Portland';
import Real from './components/Clubs/Real';
import Seattle from './components/Clubs/Seattle';
import Sporting from './components/Clubs/Sporting';
import St from './components/Clubs/St';
import Sandiego from './components/Clubs/Sandiego';
import Toronto from './components/Clubs/Toronto';
import Usa from './components/Clubs/Usa';
import Vancouver from './components/Clubs/Vancouver';
import Canada from './components/Clubs/Canada';
import Messi from './components/Clubs/Players/Messi';
import Suarez from './components/Clubs/Players/Suarez';
import Busquets from './components/Clubs/Players/Busquets';
import Alba from './components/Clubs/Players/Alba';
import Miranchuk from './components/Clubs/Players/AtlantaPlayers/Miranchuk.jsx';
import Williams from './components/Clubs/Players/AtlantaPlayers/Williams.jsx';
import Mosquera from './components/Clubs/Players/AtlantaPlayers/Mosquera.jsx';
import Thiare from './components/Clubs/Players/AtlantaPlayers/Thiare.jsx';
import Driussi from './components/Clubs/Players/AustinPlayers/Driussi.jsx';
import Finlay from './components/Clubs/Players/AustinPlayers/Finlay.jsx';
import Ring from './components/Clubs/Players/AustinPlayers/Ring.jsx';
import Zardes from './components/Clubs/Players/AustinPlayers/Zardes.jsx';
import Westwoods from './components/Clubs/Players/CharlottePlayers/Westwoods.jsx';
import Swiderski from './components/Clubs/Players/CharlottePlayers/Swiderski.jsx';
import Ream from './components/Clubs/Players/CharlottePlayers/Ream.jsx';
import Abada from './components/Clubs/Players/CharlottePlayers/Abada.jsx';
import Gutierrez from './components/Clubs/Players/ChicagoPlayers/Gutierrez.jsx';
import Mueller from './components/Clubs/Players/ChicagoPlayers/Mueller.jsx';
import Souquet from './components/Clubs/Players/ChicagoPlayers/Souquet.jsx';
import Teran from './components/Clubs/Players/ChicagoPlayers/Teran.jsx';
import Acosta from './components/Clubs/Players/CincinnatiPlayers/Acosta.jsx';
import Kubo from './components/Clubs/Players/CincinnatiPlayers/Kubo.jsx';
import Hagglund from './components/Clubs/Players/CincinnatiPlayers/Hagglund.jsx';
import Robinson from './components/Clubs/Players/CincinnatiPlayers/Robinson.jsx';
import Rosenberry from './components/Clubs/Players/ColoradoPlayers/Rosenberry';
import Mihailovic from './components/Clubs/Players/ColoradoPlayers/Miahilovic.jsx';
import Maxso from './components/Clubs/Players/ColoradoPlayers/Maxso.jsx';
import Cabral from './components/Clubs/Players/ColoradoPlayers/Cabral.jsx';
import CuchoHernandez from './components/Clubs/Players/ColumbusPlayers/Hernandez.jsx';
import Nagbe from './components/Clubs/Players/ColumbusPlayers/Nagbe.jsx';
import Rossi from './components/Clubs/Players/ColumbusPlayers/Rossi.jsx';
import ChristianBenteke from './components/Clubs/Players/DcPlayers/Benteke.jsx';
import Pirani from './components/Clubs/Players/DcPlayers/Pirani.jsx';
import Lletget from './components/Clubs/Players/DallasPlayers/Lletget.jsx';
import Kowalczyk from './components/Clubs/Players/HoustonPlayers/Kowalczyk.jsx';
import Salloi from './components/Clubs/Players/SportingPlayers/Salloi.jsx';
import Radoja from './components/Clubs/Players/SportingPlayers/Radoja.jsx';
import Reus from './components/Clubs/Players/GalaxyPlayers/Reus.jsx';
import Puig from './components/Clubs/Players/GalaxyPlayers/Puig.jsx';
import Pec from './components/Clubs/Players/GalaxyPlayers/Pec.jsx';
import Joveljic from './components/Clubs/Players/GalaxyPlayers/Joveljic.jsx';
import DenisBouanga from './components/Clubs/Players/LaPlayers/Bouanga.jsx';
import OlivierGiroud from './components/Clubs/Players/LaPlayers/Giroud.jsx';
import HugoLloris from './components/Clubs/Players/LaPlayers/Lloris.jsx';
import CristianOlivera from './components/Clubs/Players/LaPlayers/Olivera.jsx';
import RobinLod from './components/Clubs/Players/MinnesotaPlayers/Lod.jsx';
import FrancoFragapane from './components/Clubs/Players/MinnesotaPlayers/Fragapane.jsx';
import TeemuPukki from './components/Clubs/Players/MinnesotaPlayers/Pukki.jsx';
import Piette from './components/Clubs/Players/MontrealPlayers/Piette.jsx';
import Clark from './components/Clubs/Players/MontrealPlayers/Clark.jsx';
import WalkerZimmerman from './components/Clubs/Players/NashvillePlayers/Zimmerman.jsx';
import LeonardoCampana from './components/Clubs/Players/RevolutionPlayers/Campana.jsx';
import CarlesGil from './components/Clubs/Players/RevolutionPlayers/Gil.jsx';
import LucaLangoni from './components/Clubs/Players/RevolutionPlayers/Langoni.jsx';
import MattPolster from './components/Clubs/Players/RevolutionPlayers/Polster.jsx';
import MaxiMoralez from './components/Clubs/Players/NycfcPlayers/Moralez.jsx';
import SantiagoRodriguez from './components/Clubs/Players/NycfcPlayers/SantiagoRodriguez.jsx';
import MonsefBakrar from './components/Clubs/Players/NycfcPlayers/Bakrar.jsx';
import EmilForsberg from './components/Clubs/Players/NyrbPlayers/Forsber.jsx';
import LewisMorgan from './components/Clubs/Players/NyrbPlayers/LewisMorgan.jsx';
import ChoupoMoting from './components/Clubs/Players/NyrbPlayers/ChoupoMoting.jsx';
import RobinJansson from './components/Clubs/Players/OrlandoPlayers/Jansson.jsx';
import LuisMuriel from './components/Clubs/Players/OrlandoPlayers/Muriel.jsx';
import AlejandroBedoya from './components/Clubs/Players/PhiladelphiaPlayers/Bedoya.jsx';
import DanielGazdag from './components/Clubs/Players/PhiladelphiaPlayers/Gazdag.jsx';
import Uhre from './components/Clubs/Players/PhiladelphiaPlayers/Uhre.jsx';
import KamalMiller from './components/Clubs/Players/PortlandPlayers/KamalMiller.jsx';
import DiegoChara from './components/Clubs/Players/PortlandPlayers/Chara.jsx';
import PabloRuiz from './components/Clubs/Players/RealPlayers.jsx/PabloRuiz.jsx';
import DiegoLuna from './components/Clubs/Players/RealPlayers.jsx/Luna.jsx';
import CristianEspinoza from './components/Clubs/Players/EarthquakesPlayers/Espinoza.jsx';
import CristianArango from './components/Clubs/Players/EarthquakesPlayers/Arango.jsx';
import CarlosGruezo from './components/Clubs/Players/EarthquakesPlayers/Gruezo.jsx';
import JordanMorris from './components/Clubs/Players/SoundersPlayers/Morris.jsx';
import PedroDeLaVega from './components/Clubs/Players/SoundersPlayers/Delavega.jsx';
import AlbertRusnak from './components/Clubs/Players/SoundersPlayers/Rusnak.jsx';
import CristianRoldan from './components/Clubs/Players/SoundersPlayers/Roldan.jsx';
import FedericoBernardeschi from './components/Clubs/Players/TorontoPlayers/Bernadeski.jsx';
import LorenzoInsigne from './components/Clubs/Players/TorontoPlayers/Insigne.jsx';
import KevinLong from './components/Clubs/Players/TorontoPlayers/KevinLong.jsx';
import JonathanOsorio from './components/Clubs/Players/TorontoPlayers/Osorio.jsx';
import StuartArmstrong from './components/Clubs/Players/VancouverPlayers/Armstrong.jsx';
import AndresCubas from './components/Clubs/Players/VancouverPlayers/Cubas.jsx';
import RyanGauld from './components/Clubs/Players/VancouverPlayers/Gauld.jsx';
import RankoVeselinovic from './components/Clubs/Players/VancouverPlayers/Veselinovic.jsx';
import JoaoKlauss from './components/Clubs/Players/StlouisPlayers/Klauss.jsx';
import TomasOstrak from './components/Clubs/Players/StlouisPlayers/Ostrak.jsx';
import ChrisDurkin from './components/Clubs/Players/StlouisPlayers/Durkin.jsx';
import MarcelHartel from './components/Clubs/Players/StlouisPlayers/Hartel.jsx';
import HirvingLozano from './components/Clubs/Players/SandiegoPlayers/Lozano.jsx';
import MarcusIngvartsen from './components/Clubs/Players/SandiegoPlayers/Ingvartsen.jsx';
import PaddyMcNair from './components/Clubs/Players/SandiegoPlayers/Mcnair.jsx';
import ChristianPulisic from './components/Clubs/Players/UsaPlayers/Pulisic.jsx';
import GiovanniReyna from './components/Clubs/Players/UsaPlayers/Gioreyna.jsx';
import WestonMcKennie from './components/Clubs/Players/UsaPlayers/Mckennie.jsx';
import TylerAdams from './components/Clubs/Players/UsaPlayers/Adams.jsx';
import AlphonsoDavies from './components/Clubs/Players/CanadaPlayers/Davies.jsx';
import JonathanDavid from './components/Clubs/Players/CanadaPlayers/David.jsx';
import CyleLarin from './components/Clubs/Players/CanadaPlayers/Larin.jsx';
import StephenEustaquio from './components/Clubs/Players/CanadaPlayers/Eustaquio.jsx';
import RaulJimenez from './components/Clubs/Players/MexicoPlayers/Rauljimenez.jsx';
import OrbelinPineda from './components/Clubs/Players/MexicoPlayers/Pineda.jsx';
import EdsonAlvarez from './components/Clubs/Players/MexicoPlayers/Edsonalvarez.jsx';
import Preworkout from './components/Supplements/Preworkout';
import EnergyDrinks from './components/Supplements/EnergyDrinks';
















 






 
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/download-page" element={<DownloadPage />} />
        <Route path="/inter" element={<Inter />} />
        <Route path="/atlanta" element={<Atlanta />} />
        <Route path="/austin" element={<Austin />} />
        <Route path="/charlotte" element={<Charlotte />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/FC25" element={<FC25 />} />
        <Route path="/blog/inter-miami-global-attraction" element={<Imga />} />
        <Route path="/blog/Boupendza" element={<Boupendza />} />
        <Route path="/blog/OnePlanetKit" element={<OnePlanetKit />} />
        <Route path="/blog/TopMlsJersey2024" element={<TopMLSJerseys2024 />} />
        <Route path="/blog/Vancouver-Whitecaps-For-Sale" element={<VancouverWhitecapsForSale />} />
        <Route path="/blog/ColumbusVsMiamiMLSBlog" element={<ColumbusVsMiamiMLSBlog />} />
        <Route path="/blog/ColumbusCrewvsInterMiamiResult" element={<ColumbusCrewvsInterMiamiResult />} />
        <Route path="/blog/PeterVermesBlog" element={<PeterVermesBlog />} />
        <Route path="/blog/KevinDb" element={<KevinDb />} />
        <Route path="/blog/ThomasMullerMLSBlog" element={<ThomasMullerMLSBlog />} />
        <Route path="/blog/san-diego-news" element={<SanDiegoNews />} />
        <Route path="/blog/san-diego-first-win" element={<SanDiegoFirstWin />} />
        <Route path="/blog/supplements-in-soccer" element={<SupplementsSoccer />} />
        <Route path="/blog/mls-past" element={<Mlspast />} />
        <Route path="/blog/beckham-effect" element={<BeckhamEffect />} />
        <Route path="/blog/women-in-soccer" element={<WomenSoccer />} />
        <Route path="/blog/us11" element={<Us11 />} />
        <Route path="/cincinnati" element={<Cincinnati />} />
        <Route path="/colorado" element={<Colorado />} />
        <Route path="/columbus" element={<Columbus />} />
        <Route path="/dallas" element={<Dallas />} />
        <Route path="/dc" element={<Dc />} />
        <Route path="/earthquakes" element={<Earthquakes />} />
        <Route path="/houston" element={<Houston />} />
        <Route path="/lafc" element={<Lafc />} />
        <Route path="/lagalaxy" element={<Lagalaxy />} />
        <Route path="/montreal" element={<Montreal />} />
        <Route path="/mexico" element={<Mexico />} />
        <Route path="/minnesota" element={<Minnesota />} />
        <Route path="/nashville" element={<Nashville />} />
        <Route path="/ne" element={<Ne />} />
        <Route path="/nycfc" element={<Nycfc />} />
        <Route path="/nyrb" element={<Nyrb />} />
        <Route path="/orlando" element={<Orlando />} />
        <Route path="/philadelphia" element={<Philadelphia />} />
        <Route path="/portland" element={<Portland />} />
        <Route path="/real" element={<Real />} />
        <Route path="/seattle" element={<Seattle />} />
        <Route path="/sporting" element={<Sporting />} />
        <Route path="/st" element={<St />} />
        <Route path="/sandiego" element={<Sandiego />} />
        <Route path="/toronto" element={<Toronto />} />
        <Route path="/usa" element={<Usa />} />
        <Route path="/vancouver" element={<Vancouver />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/messi" element={<Messi />} />
        <Route path="/suarez" element={<Suarez />} />
        <Route path="/busquets" element={<Busquets />} />
        <Route path="/alba" element={<Alba />} />
        <Route path="/miranchuk" element={<Miranchuk />} />
        <Route path="/williams" element={<Williams />} />
        <Route path="/mosquera" element={<Mosquera />} />
        <Route path="/thiare" element={<Thiare />} />
        <Route path="/finlay" element={<Finlay />} />
        <Route path="/driussi" element={<Driussi />} />
        <Route path="/ring" element={<Ring />} />
        <Route path="/zardes" element={<Zardes />} />
        <Route path="/westwoods" element={<Westwoods />} />
        <Route path="/swiderski" element={<Swiderski />} />
        <Route path="/ream" element={<Ream />} />
        <Route path="/abada" element={<Abada />} />
        <Route path="/gutierrez" element={<Gutierrez />} />
        <Route path="/mueller" element={<Mueller />} />
        <Route path="/souquet" element={<Souquet />} />
        <Route path="/teran" element={<Teran />} />
        <Route path="/acosta" element={<Acosta />} />
        <Route path="/kubo" element={<Kubo />} />
        <Route path="/hagglund" element={<Hagglund />} />
        <Route path="/milesrobinson" element={<Robinson />} />
        <Route path="/cabral" element={<Cabral />} />
        <Route path="/maxso" element={<Maxso />} />
        <Route path="/mihailovic" element={<Mihailovic />} />
        <Route path="/rosenberry" element={<Rosenberry />} />
        <Route path="/preworkout" element={<Preworkout />} />
        <Route path="/energydrinks" element={<EnergyDrinks />} />
        <Route path="/hernandez" element={<CuchoHernandez />} />
  <Route path="/nagbe" element={<Nagbe />} />
  <Route path="/rossi" element={<Rossi />} />
  <Route path="/benteke" element={<ChristianBenteke />} />
  <Route path="/pirani" element={<Pirani />} />
  <Route path="/lletget" element={<Lletget />} />
  <Route path="/kowalczyk" element={<Kowalczyk />} />
  <Route path="/salloi" element={<Salloi />} />
  <Route path="/radoja" element={<Radoja />} />
  <Route path="/reus" element={<Reus />} />
  <Route path="/puig" element={<Puig />} />
  <Route path="/pec" element={<Pec />} />
  <Route path="/joveljic" element={<Joveljic />} />
  <Route path="/bouanga" element={<DenisBouanga />} />
  <Route path="/giroud" element={<OlivierGiroud />} />
  <Route path="/lloris" element={<HugoLloris />} />
  <Route path="/olivera" element={<CristianOlivera />} />
  <Route path="/lod" element={<RobinLod />} />
  <Route path="/fragapane" element={<FrancoFragapane />} />
  <Route path="/pukki" element={<TeemuPukki />} />
  <Route path="/piette" element={<Piette />} />
  <Route path="/clark" element={<Clark />} />
  <Route path="/zimmerman" element={<WalkerZimmerman />} />
  <Route path="/campana" element={<LeonardoCampana />} />
  <Route path="/gil" element={<CarlesGil />} />
  <Route path="/langoni" element={<LucaLangoni />} />
  <Route path="/polster" element={<MattPolster />} />
  <Route path="/moralez" element={<MaxiMoralez />} />
  <Route path="/santiago" element={<SantiagoRodriguez />} />
  <Route path="/bakrar" element={<MonsefBakrar />} />
  <Route path="/forsberg" element={<EmilForsberg />} />
  <Route path="/morgan" element={<LewisMorgan />} />
  <Route path="/moting" element={<ChoupoMoting />} />
  <Route path="/jansson" element={<RobinJansson />} />
  <Route path="/muriel" element={<LuisMuriel />} />
  <Route path="/bedoya" element={<AlejandroBedoya />} />
  <Route path="/gazdag" element={<DanielGazdag />} />
  <Route path="/uhre" element={<Uhre />} />
  <Route path="/kamalmiller" element={<KamalMiller />} />
  <Route path="/chara" element={<DiegoChara />} />
  <Route path="/pabloruiz" element={<PabloRuiz />} />
  <Route path="/luna" element={<DiegoLuna />} />
  <Route path="/espinoza" element={<CristianEspinoza />} />
  <Route path="/arango" element={<CristianArango />} />
  <Route path="/gruezo" element={<CarlosGruezo />} />
  <Route path="/morris" element={<JordanMorris />} />
  <Route path="/delavega" element={<PedroDeLaVega />} />
  <Route path="/rusnak" element={<AlbertRusnak />} />
  <Route path="/roldan" element={<CristianRoldan />} />
  <Route path="/bernardeski" element={<FedericoBernardeschi />} />
  <Route path="/insigne" element={<LorenzoInsigne />} />
  <Route path="/kevinlong" element={<KevinLong />} />
  <Route path="/osorio" element={<JonathanOsorio />} />
  <Route path="/armstrong" element={<StuartArmstrong />} />
  <Route path="/cubas" element={<AndresCubas />} />
  <Route path="/gauld" element={<RyanGauld />} />
  <Route path="/veselinovic" element={<RankoVeselinovic />} />
  <Route path="/klauss" element={<JoaoKlauss />} />
  <Route path="/ostrak" element={<TomasOstrak />} />
  <Route path="/durkin" element={<ChrisDurkin />} />
  <Route path="/hartel" element={<MarcelHartel />} />
  <Route path="/lozano" element={<HirvingLozano />} />
  <Route path="/ingvartsen" element={<MarcusIngvartsen />} />
  <Route path="/mcnair" element={<PaddyMcNair />} />
  <Route path="/pulisic" element={<ChristianPulisic />} />
  <Route path="/gio" element={<GiovanniReyna />} />
  <Route path="/mckennie" element={<WestonMcKennie />} />
  <Route path="/adams" element={<TylerAdams />} />
  <Route path="/davies" element={<AlphonsoDavies />} />
  <Route path="/david" element={<JonathanDavid />} />
  <Route path="/larin" element={<CyleLarin />} />
  <Route path="/eustaquio" element={<StephenEustaquio />} />
  <Route path="/rauljimenez" element={<RaulJimenez />} />
  <Route path="/pineda" element={<OrbelinPineda />} />
  <Route path="/edsonalvarez" element={<EdsonAlvarez />} />
      </Routes>
      <Social />
      <Footer />
    </Router>
  );
};

export default App;



