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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy/appdownload" element={<AppDownloadHome />} />
          <Route path="/downPayment" element={<DownPayementHome />} />

          {/* Advertise Section */}
          <Route path="/advertise" element={<Advertise />} />

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

          {/* Agent Premium */}
          <Route path="/agentPremium" element={<HomeAgentPremium />} />
          <Route path="/agentResources/blog" element={<BlogHome />} />
          <Route path="/category/:categoryName" element={<BlogCategory />} />

          <Route path="*" element={<NotFoundPage />} />
          {/* Catch-all route for not found */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
