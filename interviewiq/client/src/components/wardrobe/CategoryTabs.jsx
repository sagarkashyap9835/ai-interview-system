export default function CategoryTabs({ selected, setSelected }) {
  const tabs = ["All", "Tops", "Bottoms", "Footwear", "Accessories"];

  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setSelected(tab)}
          className={`px-4 py-2 rounded-full text-sm transition
          ${selected === tab ? "bg-[#1f4f47] text-white" : "bg-gray-200"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
