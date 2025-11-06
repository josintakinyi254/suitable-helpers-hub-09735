import { cn } from "@/lib/utils";

interface StepsProps {
  steps: {
    number: number;
    label: string;
  }[];
  currentStep: number;
}

export const Steps = ({ steps, currentStep }: StepsProps) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-muted -z-10">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {/* Step Circles */}
        {steps.map((step, index) => {
          const isActive = step.number === currentStep;
          const isComplete = step.number < currentStep;
          
          return (
            <div key={step.number} className="flex flex-col items-center flex-1">
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 mb-2",
                  isComplete && "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-medium",
                  isActive && "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-strong scale-110",
                  !isActive && !isComplete && "bg-muted text-muted-foreground"
                )}
              >
                {step.number}
              </div>
              <span
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive && "text-orange-600 font-semibold",
                  !isActive && "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
