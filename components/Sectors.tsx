import { getTranslations } from "next-intl/server";

export default async function Sectors() {
  const t = await getTranslations("sectors");
  const items = t.raw("items") as { icon: string; label: string }[];

  return (
    <section className="bg-slate-50 py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-6 sm:gap-12">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em] flex-shrink-0">
            {t("title")}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {items.map((item, i) => (
              <span
                key={item.label}
                className="text-sm font-medium text-slate-600"
              >
                {item.label}
                {i < items.length - 1 && (
                  <span className="text-slate-300 ml-8 hidden sm:inline">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
