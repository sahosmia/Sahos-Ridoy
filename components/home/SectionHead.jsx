export default function SectionHead({ title, des, content, center = false }) {
  return (
    <div className="container mb-5">
      <p className="sub-title">{des}</p>
      <h3 className="section-heading">{title}</h3>
      {content && <p className="text-slate-600 mb-8">{content}</p>}
    </div>
  );
}
