import React from "react";

// Content Growth Engine Imports
import ContentGrowthEngine from "ContentGrowthEngine";
import OverviewDashboard from "OverviewDashboard";
import OnboardingForm from "components/OnboardingForm";
import ResearchEngine from "components/ResearchEngine";
import ContentDecisionEngine from "components/ContentDecisionEngine";
import ScriptStudio from "components/ScriptStudio";
import ProductionHub from "ProductionHub";
import PipelineDashboard from "components/PipelineDashboard";
import PublishingCenter from "components/PublishingCenter";
import PerformanceAnalytics from "components/PerformanceAnalytics";

// Icon Imports
import {
  IoFlaskOutline,
  IoBulbOutline,
  IoCreateOutline,
  IoVideocamOutline,
  IoRocketOutline,
  IoStatsChartOutline,
  IoDocumentTextOutline,
  IoHomeOutline,
  IoGridOutline
} from "react-icons/io5";

const cgeRoutes = [
  {
    name: "Dashboard",
    layout: "/cge",
    path: "dashboard",
    icon: <IoHomeOutline className="h-6 w-6" />,
    component: <ContentGrowthEngine />,
  },
  {
    name: "Overview",
    layout: "/cge",
    path: "overview",
    icon: <IoGridOutline className="h-6 w-6" />,
    component: <OverviewDashboard />,
  },
  {
    name: "WF0: Onboarding",
    layout: "/cge",
    path: "onboarding",
    icon: <IoDocumentTextOutline className="h-6 w-6" />,
    component: <OnboardingForm />,
    phase: "Setup",
  },
  {
    name: "WF1: Research Engine",
    layout: "/cge",
    path: "research",
    icon: <IoFlaskOutline className="h-6 w-6" />,
    component: <ResearchEngine />,
    phase: "Intelligence",
  },
  {
    name: "WF2: Content Decisions",
    layout: "/cge",
    path: "decisions",
    icon: <IoBulbOutline className="h-6 w-6" />,
    component: <ContentDecisionEngine />,
    phase: "Intelligence",
  },
  {
    name: "WF3: Script Studio",
    layout: "/cge",
    path: "script-studio",
    icon: <IoCreateOutline className="h-6 w-6" />,
    component: <ScriptStudio />,
    phase: "Production",
  },
  {
    name: "WF4+5: Production Hub",
    layout: "/cge",
    path: "production",
    icon: <IoVideocamOutline className="h-6 w-6" />,
    component: <ProductionHub />,
    phase: "Production",
  },
  {
    name: "Pipeline Dashboard",
    layout: "/cge",
    path: "pipeline",
    icon: <IoVideocamOutline className="h-6 w-6" />,
    component: <PipelineDashboard />,
    phase: "Production",
  },
  {
    name: "WF6: Publishing",
    layout: "/cge",
    path: "publishing",
    icon: <IoRocketOutline className="h-6 w-6" />,
    component: <PublishingCenter />,
    phase: "Distribution",
  },
  {
    name: "WF7+8: Analytics",
    layout: "/cge",
    path: "analytics",
    icon: <IoStatsChartOutline className="h-6 w-6" />,
    component: <PerformanceAnalytics />,
    phase: "Analytics",
  },
];

export default cgeRoutes;
