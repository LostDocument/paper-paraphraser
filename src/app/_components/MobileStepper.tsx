"use client";

import { Check } from "lucide-react";

export default function MobileStepper({
	currentStep,
	totalSteps,
	onStepChange,
	showResults,
	getStepTitle,
}: {
	currentStep: number;
	totalSteps: number;
	onStepChange: (step: number) => void;
	showResults: boolean;
	getStepTitle: (step: number) => string;
}) {
	return (
		<div className="lg:hidden shrink-0 bg-surface border-b border-border">
			{/* App Branding */}
			<div className="px-4 pt-3 pb-2 border-b border-border">
				<div className="flex items-start justify-center gap-1 mb-1">
					<h1 className="text-base font-semibold">RefCheck</h1>
					<span className="text-[9px] font-normal text-text-tertiary leading-[0.9] flex flex-col pt-px">
						<span>by</span>
						<a
							href="https://github.com/LostDocument"
							target="_blank"
							rel="noopener noreferrer"
							className="underline decoration-1 underline-offset-1 hover:text-primary hover:decoration-primary hover:underline-offset-2 transition-all duration-300"
							aria-label="Visit LostDocument on GitHub"
						>
							LostDocument
						</a>
					</span>
				</div>
				<p className="text-xs text-text-secondary text-center font-inter">
					Check similarity. Protect originality.
				</p>
			</div>

			{/* Stepper */}
			<div className="p-4">
				<div className="flex items-center justify-center mb-3">
					{Array.from({ length: totalSteps }, (_, i) => i + 1).map(
						(step, index) => (
							<div key={step} className="flex items-center">
								<button
									onClick={() => {
										// Allow going back to completed steps
										if (
											step < currentStep ||
											(step === totalSteps && showResults)
										) {
											onStepChange(step);
										}
									}}
									disabled={
										step > currentStep && !(step === totalSteps && showResults)
									}
									className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
										step < currentStep ||
										(step === totalSteps && showResults && step !== currentStep)
											? "bg-primary text-white cursor-pointer"
											: step === currentStep
												? "bg-primary text-white"
												: "bg-surface-elevated text-text-tertiary"
									}`}
								>
									{step < currentStep ||
									(step === totalSteps &&
										showResults &&
										step !== currentStep) ? (
										<Check className="w-4 h-4" />
									) : (
										step
									)}
								</button>
								{index < totalSteps - 1 && (
									<div
										className={`w-16 h-0.5 mx-2 ${
											step < currentStep ? "bg-primary" : "bg-border"
										}`}
									/>
								)}
							</div>
						)
					)}
				</div>
				<h2 className="text-lg font-semibold text-center">
					{getStepTitle(currentStep)}
				</h2>
			</div>
		</div>
	);
}
