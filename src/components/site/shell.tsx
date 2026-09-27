import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { CartDrawer } from "@/components/site/cart-drawer";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <CartDrawer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "var(--color-ink)",
            color: "var(--color-ivory)",
            border: "none",
            borderRadius: "999px",
          },
        }}
      />
    </div>
  );
}
