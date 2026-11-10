import { site } from "@/content/site";

const items = site.skillGroups.flatMap((g) => g.items);

/**
 * Poppy-red tape across the page. Decorative: the same skills are listed as
 * real text in About, so this whole band is hidden from assistive tech.
 */
export function Marquee() {
  return (
    <div aria-hidden className="overflow-clip py-10">
      <div className="-mx-4 -rotate-2 bg-poppy py-4 text-paper">
        <div className="animate-marquee flex w-max">
          {/* Two copies: the track slides by exactly one copy, then loops. */}
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center whitespace-nowrap font-display text-h2 font-semibold uppercase"
                >
                  {item}
                  <span className="mx-7 h-2 w-2 rotate-45 bg-paper" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
