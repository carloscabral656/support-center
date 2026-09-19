import { SideNav } from './shared/components/ui/sidenav/SideNav';
import { DashboardPage } from './slicies/dashboard/page/DashboardPage';

export function App() {
  return (
    <div className="flex w-screen h-screen font-sans">
      <SideNav />
      <DashboardPage />
    </div>
  );
}

export default App;
