import GeneratorHeader from "@/components/Headers/GeneratorHeader";
import BeeGenerator from "@/features/BeeGenerator/BeeGenerator";
export default function GeneratorPage() {
  return (
    <div className="desert-bg">
      <div className="app">
        <GeneratorHeader />
        <BeeGenerator />
      </div>
    </div>
  );
}
