

// Personal Info Component
export function AboutPersonalInfoItem({ item }) {
  return (
    <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
      <h6 className="font-semibold text-slate-700 text-sm">{item.title}</h6>
      <p className="text-slate-500 text-base">{item.value}</p>
    </div>
  );
}