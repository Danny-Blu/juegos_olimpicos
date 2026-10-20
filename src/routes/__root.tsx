import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "motion/react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Intro } from "@/components/site/Intro";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-night px-4 text-cream">
      <div className="max-w-md text-center">
        <h1 className="display-xl text-andino">404</h1>
        <p className="mt-4 text-lg">Esta pista no existe.</p>
        <Link to="/" className="eyebrow mt-8 inline-flex rounded-full bg-paraba px-6 py-3 text-ivory">Volver al inicio</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-md">Esta página no cargó</h1>
        <p className="mt-2 text-sm text-muted-foreground">Algo salió mal. Intenta de nuevo.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="eyebrow rounded-full bg-primary px-5 py-3 text-primary-foreground">Reintentar</button>
          <Link to="/" className="eyebrow rounded-full border border-input px-5 py-3">Inicio</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Juegos Bolivia 2026" },
      { name: "description", content: "Tres espíritus. Una misma pasión. La plataforma oficial de los Juegos Bolivia 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Space+Grotesk:wght@500;700&display=swap" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <QueryClientProvider client={queryClient}>
      <Intro />
      <Header />
      <motion.main key={path} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
        <Outlet />
      </motion.main>
      <Footer />
    </QueryClientProvider>
  );
}
