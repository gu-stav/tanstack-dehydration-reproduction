import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import type { Route } from "./+types/home";

// Loader function that creates and dehydrates a QueryClient
export async function loader() {
  const queryClient = new QueryClient();

  // Prefetch some data
  await queryClient.prefetchQuery({
    queryKey: ["example"],
    queryFn: async () => {
      return { message: "Hello from dehydrated query!" };
    },
  });

  return {
    dehydratedState: dehydrate(queryClient),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <HydrationBoundary state={loaderData.dehydratedState}>
      <div>
        <h1>React Router Framework Mode with TanStack Query</h1>
        <p>This route uses a dehydrated query client with HydrationBoundary.</p>
      </div>
    </HydrationBoundary>
  );
}
