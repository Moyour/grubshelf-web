import { redirect } from "next/navigation";

/** Legacy path: canonical home is `/`. */
export default function VfRedirectPage() {
  redirect("/");
}
