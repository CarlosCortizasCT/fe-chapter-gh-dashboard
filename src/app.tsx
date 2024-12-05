import { Button } from "@/components/ui/button";
import { FeChapterDashboardModal } from './components/fe-chapter-dashboard-modal';

export function App() {
  return (
    <>
      <div className="h-screen w-full grid place-items-center">
        <Button className="text-lg" size="lg" onClick={() => window.postMessage('__fec-dashboard-open-event__')}>Click me</Button>
      </div>
      <FeChapterDashboardModal />
    </>
  );
}
