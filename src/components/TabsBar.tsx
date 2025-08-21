export default function TabsBar({
  tab,
  setTab,
  theme,
}: {
  tab: string;
  setTab: (tab: string) => void;
  theme: string;
}) {
  const tabList = ["Overview", "Features", "Specifications"];

  return (
    <div
      className={`flex rounded-xl border p-1 w-full justify-between ${
        theme === "dark" ? "bg-[#181f28] border-[#232b36]" : "bg-gray-100 border-gray-200"
      }`}
    >
      {tabList.map((t) => (
        <button
          key={t}
          className={`px-6 py-2 rounded-lg font-semibold w-1/3 text-sm transition-colors duration-200
            ${tab === t
              ? theme === "dark"
                ? "bg-[#232b36] text-white"
                : "bg-white text-[#08bc7c] shadow-sm"
              : theme === "dark"
              ? "text-gray-400 hover:text-white"
              : "text-gray-500 hover:text-[#08bc7c]"}`}
          onClick={() => setTab(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
