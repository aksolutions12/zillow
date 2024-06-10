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
import GetStartedPage from "./pages/Advertise/GetStarted/GetStartedPage";
import BuilderPage from "./pages/Advertise/Builder/BuilderPage";
import NewConstrctuctionPage from "./pages/Advertise/Builder/NewContruction/NewConstrctuctionPage";
import NewsandDataPage from "./pages/Advertise/Builder/New and Data/NewsandDataPage";
import MarketingTips from "./pages/Advertise/Builder/OtherPages/MarketingTips";
import SuccessStories from "./pages/Advertise/Builder/OtherPages/SuccessStories";
import TrainingBuiler from "./pages/Advertise/Builder/OtherPages/TrainingBuiler";
import Webinar from "./pages/Advertise/Builder/OtherPages/Webinar";
import ProductPage from "./pages/Advertise/Builder/Product/ProductPage";
import BuilderToolPage from "./pages/Advertise/Builder/BuilderTool/BuilderToolPage.js";
import BuilderDisoveryPage from "./pages/Advertise/Builder/BuilderTool/BuilderDisoveryPage.js";
import MultiFamilyResource from "./pages/Advertise/PropertyManager/MultiFamilyResource/MultiFamilyResource.js";
import RentalMarketing from "./pages/Advertise/PropertyManager/MultiFamilyResource/RentalMarketing.js";
import PropertyManagement from "./pages/Advertise/PropertyManager/MultiFamilyResource/PropertyManagement.js";
import TrainingandDevelopment from "./pages/Advertise/PropertyManager/MultiFamilyResource/TrainingandDevelopment.js";
import RenterInsights from "./pages/Advertise/PropertyManager/MultiFamilyResource/RenterInsights.js";
import EmailMarketing from "./pages/Advertise/PropertyManager/MultiFamilyResource/EmailMarketing.js";
import SocialMarketing from "./pages/Advertise/PropertyManager/MultiFamilyResource/SocialMarketing.js";
import GeneralMarketing from "./pages/Advertise/PropertyManager/MultiFamilyResource/GeneralMarketing.js";
import ResidentEngagement from "./pages/Advertise/PropertyManager/MultiFamilyResource/ResidentEngagement.js";
import MultifamilySucessStories from "./pages/Advertise/PropertyManager/MultiFamilyResource/MultifamilySucessStories.js";
import MarketTrend from "./pages/Advertise/PropertyManager/MultiFamilyResource/MarketTrend.js";
import RentReconnect from "./pages/Advertise/PropertyManager/RentReconnect/RentReconnect.js";
import LeaseConnect from "./pages/Advertise/PropertyManager/LeaseConnect/LeaseConnect.js";
import BoostPage from "./pages/Advertise/PropertyManager/Boost/BoostPage.js";
import ZillowManagerPage from "./pages/ZillowManager/ZillowManagerPage.js";
import ManagerRentalResources from "./pages/ZillowManager/Resources/ManagerRentalResources.js";
import LandlordingBasics from "./pages/ZillowManager/Resources/LandlordingBasics.js";
import ToolsForms from "./pages/ZillowManager/Resources/ToolsForms.js";
import ManagingYourRental from "./pages/ZillowManager/Resources/ManagingYourRental.js";
import LandlordLawsRegulations from "./pages/ZillowManager/Resources/LandlordLawsRegulations.js";
import PriceMyRental from "./pages/ZillowManager/PriceMyRental/PriceMyRental.js";
import Tenantscreening from "./pages/ZillowManager/Tenantscreening/Tenantscreening.js";
import OnlineLease from "./pages/ZillowManager/OnlineLease/OnlineLease.js";
import RentPayment from "./pages/ZillowManager/RentPayment/RentPayment.js";
import RentalListings from "./pages/ZillowManager/RentalListings/RentalListings.js";
import LoginManager from "./components/Login/LoginManager.js";
import SingleBlog from "./pages/LearningCenter/SingleBlog.js";
import SingleHomeView from "./components/SingleHomeView.js";
import SavedHomesPage from "./pages/Profile/SavedHome/SavedHomesPage.js";
import SavedSearchesPage from "./pages/Profile/SavedSearches/SavedSearchesPage.js";
import YourTeamPage from "./pages/Profile/YourTeam/YourTeamPage.js";
import YourHomePage from "./pages/Profile/YourHome/YourHomePage.js";
import RecentlyViewedPage from "./pages/Profile/RecentlyViewed/RecentlyViewedPage.js";
import ManagetoursPage from "./pages/Profile/Managetours/ManagetoursPage.js";
import AccountsettingsPage from "./pages/Profile/Account settings/AccountsettingsPage.js";
import RenterHubPage from "./pages/Profile/RenterHub/RenterHubPage.js";
import HiddenhomesPage from "./pages/Profile/SavedHome/HiddenhomesPage.js";
import ProfileSettings from "./pages/Profile/SavedHome/ProfileSettings.js";
import DocumentSettings from "./pages/Profile/SavedHome/DocumentSettings.js";

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
            <Route path="/singlehome/:id" element={<SingleHomeView />} />

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
            <Route path="//blog/:id" element={<SingleBlog />} />

            {/* Advertise Section */}
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/advertiseManager" element={<ManagerAdvertise />} />
            <Route path="/rentReconnect" element={<RentReconnect />} />
            <Route path="/leaseConnect" element={<LeaseConnect />} />
            <Route path="/boost" element={<BoostPage />} />

            <Route path="/loanorLenderOfficer" element={<OfficerPage />} />
            <Route path="/brandadvertising" element={<BrandAdvertisngPage />} />
            <Route path="/mediaplacement" element={<MediaPlacementPage />} />
            <Route path="/customHome" element={<CustomHome />} />
            <Route path="/adtargeting" element={<AdTargetingPage />} />
            <Route path="/localAdvertising" element={<LocalAdvertising />} />
            <Route path="/getStarted" element={<GetStartedPage />} />
            <Route
              path="/newconstructionadvertising"
              element={<BuilderPage />}
            />
            <Route
              path="/newconstructioncenter"
              element={<NewConstrctuctionPage />}
            />
            <Route path="/newsanddata" element={<NewsandDataPage />} />
            <Route path="/marketingtips" element={<MarketingTips />} />
            <Route path="/successStories" element={<SuccessStories />} />
            <Route path="/training" element={<TrainingBuiler />} />
            <Route path="/webinars" element={<Webinar />} />
            <Route path="/productadvertising" element={<ProductPage />} />
            <Route path="/builderTool" element={<BuilderToolPage />} />
            <Route path="/builderDiscovery" element={<BuilderDisoveryPage />} />
            <Route
              path="/multiFamilyResource"
              element={<MultiFamilyResource />}
            />
            <Route path="/rentalMarketing" element={<RentalMarketing />} />
            <Route
              path="/propertyManagement"
              element={<PropertyManagement />}
            />
            <Route
              path="/trainingandDevelopment"
              element={<TrainingandDevelopment />}
            />
            <Route path="/renterInsights" element={<RenterInsights />} />
            <Route path="/emailMarketing" element={<EmailMarketing />} />
            <Route path="/socialMarketing" element={<SocialMarketing />} />
            <Route path="/generalMarketing" element={<GeneralMarketing />} />
            <Route
              path="/residentEngagement"
              element={<ResidentEngagement />}
            />
            <Route
              path="/multifamilySucessStories"
              element={<MultifamilySucessStories />}
            />
            <Route path="/marketTrend" element={<MarketTrend />} />

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

            {/* Zillow Rental Manager */}
            <Route
              path="/zillowrentalManager"
              element={<ZillowManagerPage />}
            />
            <Route
              path="/managerRentalResources"
              element={<ManagerRentalResources />}
            />
            <Route path="/landlordingBasics" element={<LandlordingBasics />} />
            <Route path="/toolsandForms" element={<ToolsForms />} />
            <Route
              path="/managingYourRental"
              element={<ManagingYourRental />}
            />
            <Route
              path="/landlordLawsandRegulations"
              element={<LandlordLawsRegulations />}
            />
            <Route path="/priceMyRental" element={<PriceMyRental />} />
            <Route path="/tenantscreening" element={<Tenantscreening />} />
            <Route path="/onlineLease" element={<OnlineLease />} />
            <Route path="/rentPayment" element={<RentPayment />} />
            <Route path="/rentListings" element={<RentalListings />} />
            <Route path="/managerlogin" element={<LoginManager />} />

            {/* Profile Section */}
            <Route path="/savedHomes" element={<SavedHomesPage />} />
            <Route path="/hiddenhomes" element={<HiddenhomesPage />} />

            <Route path="/savedSearches" element={<SavedSearchesPage />} />
            <Route path="/yourteam" element={<YourTeamPage />} />
            <Route path="/yourhome" element={<YourHomePage />} />
            <Route path="/recentlyViewed" element={<RecentlyViewedPage />} />
            <Route path="/managetours" element={<ManagetoursPage />} />
            <Route path="/accountsettings" element={<AccountsettingsPage />} />
            <Route path="/profilesettings" element={<ProfileSettings />} />
            <Route
              path="/document-preferences"
              element={<DocumentSettings />}
            />
            <Route path="/renterHub" element={<RenterHubPage />} />

            <Route path="*" element={<NotFoundPage />} />
            {/* Catch-all route for not found */}
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
