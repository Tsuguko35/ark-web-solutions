import React from "react";
import { Footer, LandingPageHeader } from "../components";
import LandingPageContent from "../components/LandingPage/LandingPageContent";

function LandingPage() {
  return (
    <div>
      {/* Header */}
      <LandingPageHeader />

      {/* Content */}
      <LandingPageContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
