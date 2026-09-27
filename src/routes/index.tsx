import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "@/components/site/home-view";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "TinyHands — Soft things for small beginnings" }],
  }),
  component: function Home() {
    return (
      <Shell>
        <HomeView />
      </Shell>
    );
  },
});
