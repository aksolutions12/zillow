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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<HomePage />} />

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

          {/* HelpPage */}
          <Route path="/homeloans" element={<HomeLoans />} />

          <Route path="*" element={<NotFoundPage />} />
          {/* Catch-all route for not found */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
