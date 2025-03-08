import { useState } from "react";

const tabs = [
  {
    id: "pp",
    label: "PP Compounds",
    content:
      "Overall, Polypropylene Compound is a versatile material widely used in automotive, packaging, and household applications. It offers excellent chemical resistance, low density, and good impact strength. PP compounds can be modified for enhanced heat resistance and durability. They are recyclable and commonly used in making car bumpers, containers, and medical devices. Their lightweight nature makes them a cost-effective solution in various industries.",
    image: "/pp.jpg",
  },
  {
    id: "abs",
    label: "ABS/SAN Compounds",
    content:
      "ABS/SAN Compounds are known for their durability and toughness, making them ideal for automotive interiors, consumer electronics, and appliance housings. ABS has high impact resistance and excellent surface quality, allowing for easy painting and finishing. SAN compounds offer good transparency and chemical resistance, making them suitable for cosmetic packaging and laboratory equipment. Their ability to withstand daily wear and tear makes them highly desirable in various industries.",
    image: "/abs.jpg",
  },
  {
    id: "pc",
    label: "PC Compounds",
    content:
      "PC Compounds offer high impact resistance and are widely used in the automotive, aerospace, and electronics industries. They exhibit excellent optical clarity, making them suitable for safety glasses, light covers, and optical discs. PC compounds have high thermal stability and good electrical insulation properties. Their ability to be flame-retardant enhances their safety for use in electrical enclosures and protective gear. PC is a durable alternative to glass and acrylic materials.",
    image: "/pc.jpg",
  },
  {
    id: "pc_abs",
    label: "PC- ABS Compounds",
    content:
      "PC-ABS Compounds provide a balance of strength, impact resistance, and heat resistance, making them ideal for automotive, electronics, and medical applications. They offer the toughness of PC combined with the processability of ABS. PC-ABS blends are widely used in dashboards, laptop casings, and structural parts of consumer goods. Their high dimensional stability ensures durability in extreme temperatures. These compounds also provide good surface finish for aesthetic applications.",
    image: "/pc_abs.jpg",
  },
  {
    id: "pmma",
    label: "PMMA Compounds",
    content:
      "PMMA Compounds are excellent for transparency and are widely used in optical applications like lenses, display panels, and signboards. They provide high UV resistance and weather durability, making them suitable for outdoor applications. PMMA has a high gloss finish, enhancing its aesthetic appeal in architectural and automotive industries. Its lightweight nature makes it a preferred alternative to glass. Additionally, PMMA offers excellent resistance to scratches and environmental degradation.",
    image: "/pmmma.jpg",
  },
  {
    id: "nylon",
    label: "NYLON Compounds",
    content:
      "NYLON Compounds are used in engineering plastics due to their excellent mechanical properties and chemical resistance. They are commonly found in automotive components, gears, and industrial machinery. Nylon offers high wear resistance, low friction, and strong tensile strength. It is highly versatile and can be reinforced with glass fiber for enhanced strength. These compounds also have good moisture resistance, making them suitable for applications in humid environments.",
    image: "/nylon.jpg",
  },
  {
    id: "pbt",
    label: "PBT Compounds",
    content:
      "PBT Compounds are known for their thermal resistance and electrical insulating properties, making them ideal for electronic connectors and automotive components. They offer good dimensional stability, ensuring long-term durability in demanding applications. PBT is resistant to chemicals, fuels, and UV radiation, which makes it suitable for outdoor exposure. Reinforced PBT variants provide enhanced mechanical strength. Their high heat resistance allows them to be used in high-performance engineering applications.",
    image: "/pbt.jpg",
  },
];

export default function CompoundsTabs() {
  const [activeTab, setActiveTab] = useState("pp");

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-4 bg-white flex flex-col md:flex-row">
    {/* Tabs on Top for Mobile, Sidebar for Desktop */}
    <div className="w-full md:w-1/4 bg-gray-100 flex flex-col md:flex-col space-x-2 md:space-x-0 md:space-y-2 p-2 overflow-x-auto md:overflow-visible">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex-1 md:w-full text-center md:text-left p-3 text-sm font-semibold transition-colors duration-300 rounded-md shadow-md ${
            activeTab === tab.id ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Content Section */}
    <div className="w-full md:w-3/4 p-6">
      <img
        src={tabs.find((tab) => tab.id === activeTab)?.image}
        alt="Granules"
        className="w-full max-h-48 md:max-h-64 object-cover mb-4"
      />
      <h2 className="text-2xl font-bold text-gray-900 pb-2 mb-4">{tabs.find((tab) => tab.id === activeTab)?.label}</h2>
      <p className="text-gray-700 text-sm leading-relaxed">{tabs.find((tab) => tab.id === activeTab)?.content}</p>
    </div>
  </div>
  );
}
