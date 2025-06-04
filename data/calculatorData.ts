// /data/calculatorData.ts

export type Calculator = {
  slug: string;
  name: string;
  description: string;
  category: "Cultivation" | "Extraction" | "Edibles" | "Business";
};

export const calculators: Calculator[] = [
  {
    slug: "break-even",
    name: "Break-even Calculator",
    description: "Find your true cost per gram based on yield and operation cost.",
    category: "Cultivation",
  },
  {
    slug: "cost-allocation-tool",
    name: "Cost Allocation Tool",
    description: "Split costs across products using weight or market price.",
    category: "Business",
  },
  {
    slug: "decarboxylation-calculator",
    name: "Decarboxylation Calculator",
    description: "Estimate activated THC/CBD after heating your material.",
    category: "Extraction",
  },
  {
    slug: "edibles-unit-cost",
    name: "Edibles Unit Cost",
    description: "Calculate cost per piece and per mg of THC in your edibles.",
    category: "Edibles",
  },
  {
    slug: "yield-forecasting",
    name: "Yield Forecasting",
    description: "Estimate annual yield based on lights, plants, or canopy.",
    category: "Cultivation",
  },
  {
    slug: "cost-per-unit",
    name: "Cost Per Unit",
    description: "Calculate cost per gram or pound based on input costs and output volume.",
    category: "Cultivation",
  },
  {
    slug: "extraction-cost",
    name: "Extraction Cost",
    description: "Estimate the cost of producing extracts based on solvent use, yields, and time.",
    category: "Extraction",
  },
  {
    slug: "gummy-recipe",
    name: "Gummy Recipe Generator",
    description: "Generate a batch-ready gummy recipe using potency and dosage requirements.",
    category: "Edibles",
  },
  {
    slug: "infusion-dosage",
    name: "Infusion Dosage",
    description: "Determine how much oil or distillate to use for target potency per serving.",
    category: "Edibles",
  },
  {
    slug: "labor-cost-plant",
    name: "Labor Cost Per Plant",
    description: "Track labor time and calculate cost per plant across your grow cycles.",
    category: "Cultivation",
  },    
  {
    slug: "process-comparison",
    name: "Process Comparison",
    description: "Compare time, labor, and material costs between two production methods.",
    category: "Extraction",
  },
  {
    slug: "processing-output",
    name: "Processing Output",
    description: "Estimate units produced after post-processing and calculate total batch cost.",
    category: "Extraction",
  },
  {
    slug: "production-goal-planner",
    name: "Production Goal Planner",
    description: "Set volume or revenue targets and calculate required batch runs to hit them.",
    category: "Business",
  },
  {
    slug: "profit-margin",
    name: "Profit Margin Calculator",
    description: "Calculate your profit per unit and net margin after all costs and discounts.",
    category: "Business",
  },
  {
    slug: "solvent-recovery",
    name: "Solvent Recovery",
    description: "Track and calculate your solvent recovery efficiency and losses over time.",
    category: "Extraction",
  },
  {
    slug: "sop-time-tracker",
    name: "SOP Time Tracker",
    description: "Record labor time per SOP and calculate units per hour and cost per unit.",
    category: "Business",
  },
  {
    slug: "thc-loss",
    name: "THC Loss Tracker",
    description: "Calculate loss of THC across stages from harvest to final product output.",
    category: "Extraction",
  },
];
