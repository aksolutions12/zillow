import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { GlobalStyles } from "./styles/global/GlobalStyles";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Advertise from "./pages/Advertise/Advertise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelpPage from "./pages/Help/HelpPage";
import AgentFinder from "./pages/AgentFinder/AgentFinder";
import HomeImproment from "./pages/AgentFinder/HomeImproment";
import PropertyManager from "./pages/AgentFinder/PropertyManager";
import Inspecter from "./pages/AgentFinder/Inspecter";
import Photographers from "./pages/AgentFinder/Photographers";
import Other from "./pages/AgentFinder/Other";
import Builder from "./pages/AgentFinder/Builder";
import HomeLoans from "./pages/HomeLoans/HomeLoans";
import Refinance from "./pages/HomeLoans/Refinance/Refinance";
import HomeAgentPremium from "./pages/ZillowAgentPremium/HomeAgentPremium";
import BlogHome from "./pages/ZillowAgentPremium/Blog/BlogHome";
import BlogCategory from "./pages/ZillowAgentPremium/Blog/Components/BlogCategory";
import AppDownloadHome from "./pages/Other Pages/AppDownload/AppDownloadHome";
import DownPayementHome from "./pages/Other Pages/DownPayement/DownPayementHome";
import AllHomesPage from "./pages/Other Pages/All Homes/AllHomesPage";
import AllRentalBuildings from "./pages/Other Pages/AllRental Buildings/AllRentalBuildings";
import SellHome from "./pages/Sell/SellHome/SellHome";
import WorthPage from "./pages/Sell/HowMuchWorth/WorthPage";
import PostSaleOwnerPage from "./pages/Sell/PostSaleByOwner/PostSaleOwnerPage";
import MortgageCalculator from "./pages/HomeLoans/MortgagesCalculators/MortgageCalculator";
import AffordabilityCalculatorPage from "./pages/HomeLoans/Affordability Calculator/AffordabilityCalculatorPage";
import RefinanceCalculatorPage from "./pages/HomeLoans/Refinance Calculator/RefinanceCalculatorPage";
import LenderDirectoryPage from "./pages/HomeLoans/Lender Directory/LenderDirectoryPage";
import RentAffordability from "./pages/Rent/RentAffordability/RentAffordability";
import GetQualifiedPage from "./pages/HomeLoans/GetQualified/GetQualifiedPage";
import BuyPage from "./pages/Buy/BuyPage";
import ForeclosuresPage from "./pages/Buy/ForeclosuresPage";
import Openhouses from "./pages/Buy/Openhouses";
import Newconstruction from "./pages/Buy/Newconstruction";
import Comingsoon from "./pages/Buy/Comingsoon";
import Forsalebyowner from "./pages/Buy/Forsalebyowner";
import RentPage from "./pages/Rent/RentPage";
import LearningCenterPage from "./pages/LearningCenter/LearningCenterPage";
import BuyingPage from "./pages/LearningCenter/BuyingPage";
import RentingPage from "./pages/LearningCenter/RentingPage";
import SellingPage from "./pages/LearningCenter/SellingPage";
import FinancingPage from "./pages/LearningCenter/FinancingPage";
import OwningPage from "./pages/LearningCenter/OwningPage";
import { AuthProvider } from "./ContextApi/AuthContext";
import ManagerAdvertise from "./pages/Advertise/PropertyManager/ManagerAdvertise";
import OfficerPage from "./pages/Advertise/Loan officer/OfficerPage";
import BrandAdvertisngPage from "./pages/Advertise/Brand Advertising/BrandAdvertisngPage";
import MediaPlacementPage from "./pages/Advertise/MediaPlacement/MediaPlacementPage";
import CustomHome from "./pages/Advertise/Custom Home/CustomHome";
import AdTargetingPage from "./pages/Advertise/Ad Targeting/AdTargetingPage";
import LocalAdvertising from "./pages/Advertise/LocalAdvertising/LocalAdvertising";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buy/appdownload" element={<AppDownloadHome />} />

            <Route path="/sell" element={<SellHome />} />
            <Route path="/howmuchworth" element={<WorthPage />} />
            <Route path="/postsalebyowner" element={<PostSaleOwnerPage />} />

            <Route path="/downPayment" element={<DownPayementHome />} />
            <Route path="/allHomes" element={<AllHomesPage />} />

            {/* Rent Section */}
            <Route path="/forrent" element={<RentPage />} />

            <Route path="/housesforrent" element={<RentPage />} />
            <Route path="/apartmentsforrent" element={<RentPage />} />
            <Route path="/allrentallistings" element={<RentPage />} />
            <Route path="/forrent" element={<RentPage />} />
            <Route
              path="/allrentalBuildings"
              element={<AllRentalBuildings />}
            />
            <Route
              path="/rent-affordability-calculator"
              element={<RentAffordability />}
            />

            {/* Buy Section */}
            <Route path="/buyhome" element={<BuyPage />} />
            <Route path="/Foreclosures" element={<ForeclosuresPage />} />
            <Route path="/Homesforsale" element={<BuyPage />} />
            <Route path="/Openhouses" element={<Openhouses />} />
            <Route path="/Newconstruction" element={<Newconstruction />} />
            <Route path="/Comingsoon" element={<Comingsoon />} />
            <Route path="/Recenthomesales" element={<Comingsoon />} />
            <Route path="/Forsalebyowner" element={<Forsalebyowner />} />

            {/* Learning Section */}
            <Route path="/learn" element={<LearningCenterPage />} />
            <Route path="/buying" element={<BuyingPage />} />
            <Route path="/renting" element={<RentingPage />} />
            <Route path="/selling" element={<SellingPage />} />
            <Route path="/financing" element={<FinancingPage />} />
            <Route path="/owning" element={<OwningPage />} />

            {/* Advertise Section */}
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/advertiseManager" element={<ManagerAdvertise />} />
            <Route path="/loanorLenderOfficer" element={<OfficerPage />} />
            <Route path="/brandadvertising" element={<BrandAdvertisngPage />} />
            <Route path="/mediaplacement" element={<MediaPlacementPage />} />
            <Route path="/customHome" element={<CustomHome />} />
            <Route path="/adtargeting" element={<AdTargetingPage />} />
            <Route path="/localAdvertising" element={<LocalAdvertising />} />

            {/* HelpPage  Section */}
            <Route path="/help" element={<HelpPage />} />

            {/* Agent Finder Section */}
            <Route path="/agentFinder/agents" element={<AgentFinder />} />
            <Route
              path="/agentFinder/homeimprovement"
              element={<HomeImproment />}
            />
            <Route
              path="/agentFinder/propertymanagers"
              element={<PropertyManager />}
            />

            <Route path="/agentFinder/inspectors" element={<Inspecter />} />
            <Route
              path="/agentFinder/photographers"
              element={<Photographers />}
            />
            <Route path="/agentFinder/other" element={<Other />} />

            <Route path="/agentFinder/builders" element={<Builder />} />

            {/* Home Loans Section */}
            <Route path="/homeloans" element={<HomeLoans />} />
            <Route path="/homeloans/refinance" element={<Refinance />} />
            <Route
              path="/homeloans/eligibility"
              element={<GetQualifiedPage />}
            />

            {/* Mortgages Pages */}
            <Route
              path="/mortgages/mortgagescalculator"
              element={<MortgageCalculator />}
            />
            <Route
              path="/mortgages/affordabilitycalculator"
              element={<AffordabilityCalculatorPage />}
            />
            <Route
              path="/mortgages/refinancecalculator"
              element={<RefinanceCalculatorPage />}
            />
            <Route
              path="/mortgages/lenderdirectory"
              element={<LenderDirectoryPage />}
            />

            {/* Agent Premium */}
            <Route path="/agentPremium" element={<HomeAgentPremium />} />
            <Route path="/agentResources/blog" element={<BlogHome />} />
            <Route path="/category/:categoryName" element={<BlogCategory />} />

            <Route path="*" element={<NotFoundPage />} />
            {/* Catch-all route for not found */}
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
