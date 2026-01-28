"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Target,
  Search,
  Lightbulb,
  Hammer,
  CheckCircle2,
  ArrowRight,
  Play
} from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  prompt: string;
  icon: typeof Target;
  duration: string;
}

interface Workflow {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  steps: WorkflowStep[];
  principle: string;
  estimatedTime: string;
}

const workflows: Workflow[] = [
  {
    id: "strategic-stacking",
    title: "Strategic Stacking",
    subtitle: "THE COMPOUND GROWTH PATH",
    description:
      "Layer Jay's seven principles to create exponential leverage. Each step builds on the previous, creating a compound effect that multiplies your results.",
    principle: "ALL SEVEN PRINCIPLES",
    estimatedTime: "2-3 hours",
    steps: [
      {
        id: 1,
        title: "Perception Audit",
        description:
          "Identify the opportunities you're missing because of how you've been trained to see your business.",
        prompt: `Let's start with Perceptual Asymmetry. Describe your business in 2-3 sentences, then answer:

1. What do you believe is your main product/service?
2. Who do you think your competition is?
3. What do you consider your biggest limitation?

I'll show you what Jay Abraham might see differently.`,
        icon: Search,
        duration: "15 min",
      },
      {
        id: 2,
        title: "Hidden Asset Discovery",
        description:
          "Map the untapped assets, relationships, and opportunities hiding in plain sight.",
        prompt: `Based on your Perception Audit, let's find your hidden assets.

List everything your business has access to:
- Customer relationships
- Supplier relationships
- Skills and knowledge
- Physical assets
- Data and information
- Brand equity
- Distribution channels

I'll identify which ones are underlevered and how to monetize them.`,
        icon: Target,
        duration: "20 min",
      },
      {
        id: 3,
        title: "Irreplaceability Gap Analysis",
        description:
          "Find where you're replaceable and design your path to category of one.",
        prompt: `Now let's examine your Irreplaceability.

1. If you disappeared tomorrow, what would your customers do?
2. What alternatives exist for what you offer?
3. What could you do that NO ONE else could truthfully claim?

I'll help you design your irreplaceability strategy.`,
        icon: Lightbulb,
        duration: "25 min",
      },
      {
        id: 4,
        title: "Leverage Architecture",
        description:
          "Design systems that multiply every unit of effort into multiple units of result.",
        prompt: `Let's architect your leverage.

From your hidden assets and irreplaceability work:
1. What can be systematized and repeated?
2. What partnerships could multiply your reach?
3. What one-time efforts could produce ongoing returns?

I'll help you design your infinite leverage system.`,
        icon: Hammer,
        duration: "30 min",
      },
      {
        id: 5,
        title: "Implementation Blueprint",
        description:
          "Turn insights into a 90-day action plan with specific next steps.",
        prompt: `Final step: Your Strategic Stack Blueprint.

Based on everything we've uncovered, I'll create:
1. Your top 3 leverage opportunities ranked by impact
2. A 90-day implementation roadmap
3. The ONE thing to do tomorrow that starts the domino effect
4. Metrics to track your progress

Let's make this actionable.`,
        icon: CheckCircle2,
        duration: "20 min",
      },
    ],
  },
  {
    id: "partnership-accelerator",
    title: "Partnership Accelerator",
    subtitle: "THE PREEMINENCE PATH",
    description:
      "Craft irresistible partnership proposals using Jay's Preeminence philosophy. Lead with their success, not yours.",
    principle: "INFINITE LEVERAGE + PREEMINENCE",
    estimatedTime: "45 minutes",
    steps: [
      {
        id: 1,
        title: "Partner Research",
        description: "Deep-dive into your target partner's business, challenges, and goals.",
        prompt: `Who do you want to partner with? Tell me:

1. Company/Person name
2. What they're known for
3. Their current challenges (if known)
4. What you think they want to achieve

I'll help you see their world through their eyes.`,
        icon: Search,
        duration: "10 min",
      },
      {
        id: 2,
        title: "Value Mapping",
        description: "Identify exactly how you can contribute to THEIR success.",
        prompt: `Based on your partner research, let's map your value to their goals.

1. What unique asset/capability do you have?
2. How does this directly advance THEIR objectives?
3. What would they gain that they can't easily get elsewhere?

I'll help you frame this in Preeminence terms.`,
        icon: Target,
        duration: "15 min",
      },
      {
        id: 3,
        title: "Proposal Craft",
        description: "Write the outreach that makes saying 'yes' the obvious choice.",
        prompt: `Now let's craft your Preeminence-based proposal.

I'll generate:
1. An opening that proves you understand their world
2. A value proposition framed around their success
3. A risk-reversal that removes their downside
4. A low-friction next step

This will feel different from anything else in their inbox.`,
        icon: Hammer,
        duration: "20 min",
      },
    ],
  },
];

function WorkflowCard({ workflow, onClick }: { workflow: Workflow; onClick: () => void }) {
  return (
    <motion.div
      className="oracle-card rounded-xl p-6 cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-[10px] font-mono text-teal tracking-[0.2em]">
            {workflow.subtitle}
          </span>
          <h3 className="mt-1 font-[family-name:var(--font-monument)] text-2xl">
            {workflow.title}
          </h3>
        </div>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-teal/50 group-hover:bg-teal/10 transition-colors">
          <Play className="w-4 h-4 text-slate group-hover:text-teal transition-colors" />
        </div>
      </div>

      <p className="text-slate text-sm leading-relaxed mb-4">
        {workflow.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-slate/60">
            {workflow.steps.length} STEPS
          </span>
          <span className="text-xs font-mono text-slate/60">
            {workflow.estimatedTime}
          </span>
        </div>
        <span className="text-xs font-mono text-teal/60">
          {workflow.principle}
        </span>
      </div>
    </motion.div>
  );
}

function StepIndicator({
  step,
  isActive,
  isCompleted,
  onClick
}: {
  step: WorkflowStep;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-lg transition-all w-full text-left ${
        isActive
          ? "bg-teal/10 border border-teal/30"
          : isCompleted
          ? "bg-white/5 border border-white/10 opacity-60"
          : "border border-transparent hover:bg-white/5"
      }`}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isActive
          ? "bg-teal text-paper"
          : isCompleted
          ? "bg-white/10 text-teal"
          : "bg-white/5 text-slate"
      }`}>
        {isCompleted ? (
          <CheckCircle2 className="w-4 h-4" />
        ) : (
          <span className="text-sm font-mono">{step.id}</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-sm font-medium truncate ${isActive ? "text-paper" : "text-slate"}`}>
          {step.title}
        </div>
        <div className="text-[10px] font-mono text-slate/50">{step.duration}</div>
      </div>
    </button>
  );
}

function WorkflowStudio({ workflow, onBack }: { workflow: Workflow; onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const step = workflow.steps[currentStep];

  const handleCompleteStep = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < workflow.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-white/5 bg-void/80 backdrop-blur-md sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate hover:text-paper transition-colors text-sm"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to workflows
          </button>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-teal tracking-[0.2em]">
                {workflow.subtitle}
              </span>
              <h1 className="font-[family-name:var(--font-monument)] text-2xl">
                {workflow.title}
              </h1>
            </div>
            <div className="text-right">
              <div className="text-sm font-mono text-slate">
                Step {currentStep + 1} of {workflow.steps.length}
              </div>
              <div className="text-xs text-slate/50">
                {completedSteps.length} completed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Step navigation sidebar */}
          <div className="space-y-2">
            {workflow.steps.map((s, idx) => (
              <StepIndicator
                key={s.id}
                step={s}
                isActive={idx === currentStep}
                isCompleted={completedSteps.includes(idx)}
                onClick={() => setCurrentStep(idx)}
              />
            ))}
          </div>

          {/* Current step content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Step header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-teal tracking-[0.2em]">
                    STEP {step.id}
                  </span>
                  <h2 className="font-[family-name:var(--font-monument)] text-xl">
                    {step.title}
                  </h2>
                </div>
              </div>
              <p className="text-slate">{step.description}</p>
            </div>

            {/* Prompt card */}
            <div className="oracle-card rounded-xl overflow-hidden">
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate tracking-wider">
                  PROMPT
                </span>
                <button
                  onClick={() => navigator.clipboard.writeText(step.prompt)}
                  className="text-xs font-mono text-teal hover:text-paper transition-colors"
                >
                  Copy
                </button>
              </div>
              <div className="p-6 bg-white/[0.02]">
                <pre className="font-mono text-sm text-slate/90 whitespace-pre-wrap leading-relaxed">
                  {step.prompt}
                </pre>
              </div>
            </div>

            {/* Action terminals */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate tracking-wider">
                OPEN IN:
              </span>
              <button className="action-terminal">
                <span className="w-2 h-2 rounded-full bg-teal" />
                JAY-I
              </button>
              <button className="action-terminal">
                CLAUDE
              </button>
              <button className="action-terminal">
                CHATGPT
              </button>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="flex items-center gap-2 text-slate hover:text-paper disabled:opacity-30 disabled:hover:text-slate transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Previous
              </button>
              <button
                onClick={handleCompleteStep}
                className="flex items-center gap-2 px-6 py-3 bg-teal text-paper font-medium rounded hover:bg-teal-dark transition-colors"
              >
                {currentStep === workflow.steps.length - 1 ? (
                  <>
                    Complete Workflow
                    <CheckCircle2 className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Mark Complete & Continue
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function StudioPage() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);

  if (selectedWorkflow) {
    return (
      <main>
        <Navigation />
        <div className="pt-16">
          <WorkflowStudio
            workflow={selectedWorkflow}
            onBack={() => setSelectedWorkflow(null)}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono text-teal tracking-[0.3em]">
              THE STUDIO
            </span>
            <h1 className="mt-3 font-[family-name:var(--font-monument)] text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              GUIDED
              <br />
              <span className="text-slate">WORKFLOWS</span>
            </h1>
            <p className="mt-6 text-slate max-w-2xl text-lg">
              Multi-step strategic paths that stack Jay's principles for
              compound results. Each workflow guides you through a complete
              transformation process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workflows grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {workflows.map((workflow) => (
              <WorkflowCard
                key={workflow.id}
                workflow={workflow}
                onClick={() => setSelectedWorkflow(workflow)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
