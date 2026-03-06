import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Derrick Weil | AI Security, Infrastructure, and Governance",
  description:
    "Technical portfolio and resume for Derrick Weil, focused on AI security, AI infrastructure, AI governance, cloud platforms, and control-minded consulting.",
  openGraph: {
    title: "Derrick Weil | AI Security, Infrastructure, and Governance",
    description:
      "Grounded portfolio site focused on secure AI systems, governed platforms, Kubernetes, DevSecOps, and control-driven architecture.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
