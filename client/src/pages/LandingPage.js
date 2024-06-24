import React from "react";
import { LandingPageHeader } from "../components";
import LandingPageContent from "../components/LandingPage/LandingPageContent";

function LandingPage() {
  return (
    <div>
      {/* Header */}
      <LandingPageHeader />

      {/* Content */}
      <LandingPageContent />
    </div>
  );
}

export default LandingPage;
