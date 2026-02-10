import { PanelCard } from "./components/ui/PanelCard";
import PageHeader from "./components/ui/PageHeader";
import { Button } from "./components/ui/Button";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen text-text-primary md:pt-20 lg:pt-24 pb-20">
      <PageHeader title="404" subtitle="Page not found" />

      <div className="max-w-xl md:max-w-2xl mx-auto px-4 mt-10 md:mt-16">
        <PanelCard>
          <div className="p-6 md:p-0 text-center space-y-6">
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/" label="Back to Home" variant="primary" size="sm" />
              <Button href="/shows" label="View Upcoming Shows" variant="outline" size="sm" />
            </div>
          </div>
        </PanelCard>
      </div>
    </div>
  );
}
