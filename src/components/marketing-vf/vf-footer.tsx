import Image from "next/image";
import Link from "next/link";
import { V5 } from "@/components/marketing-v5/v5-tokens";
import { GRUBSHELF_APP_ICON_SRC } from "@/lib/grubshelf-brand";
import { getFooterLegalLinks, resolveAppStoreUrl } from "@/lib/marketing-nav";

export function VfFooter() {
  return (
    <footer
      className="border-t border-white/10 px-6 py-12 md:py-16"
      style={{ backgroundColor: V5.secondary }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
        {/* Brand column */}
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={GRUBSHELF_APP_ICON_SRC}
              alt=""
              width={128}
              height={128}
              className="h-9 w-9 rounded-[22%] object-cover"
            />
            <span className="gs-wordmark text-2xl font-semibold lowercase leading-none tracking-tight text-white/90">
              grubshelf
            </span>
          </Link>
          <p className="max-w-xs text-center font-sans text-sm leading-relaxed text-white/40 md:text-left">
            A quieter way through the store.
          </p>
        </div>

        {/* Links columns */}
        <div className="flex gap-16 text-center md:text-left">
          <div>
            <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-white/30">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#vf-features"
                  className="font-sans text-sm text-white/50 transition hover:text-white/80"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#v5-faq"
                  className="font-sans text-sm text-white/50 transition hover:text-white/80"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href={resolveAppStoreUrl(process.env.NEXT_PUBLIC_APP_STORE_URL)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-white/50 transition hover:text-white/80"
                >
                  Try the Beta
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-white/30">
              Legal
            </h4>
            <ul className="space-y-2">
              {getFooterLegalLinks().map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-white/50 transition hover:text-white/80"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-10 max-w-5xl border-t border-white/[0.06] pt-6 text-center md:text-left">
        <p className="font-sans text-xs text-white/25">
          &copy; {new Date().getFullYear()} Grubshelf. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
