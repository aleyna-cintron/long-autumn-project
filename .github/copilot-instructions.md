This repository is a Next.js 15 application (App Router) implementing a small e-commerce demo called "Long Autumn".

Quick context for AI coding agents — be concise and concrete. Use these notes to make safe, correct edits and to suggest improvements.

1) Big-picture architecture
- Frontend: Next.js (app/ directory, App Router). Top-level layout is `app/layout.tsx` which wraps pages in `CartStoreProvider` and `NavBar`.
- UI components live under `app/component/` (e.g. `ProductCard.tsx`, `Cart.tsx`, `AddToCartButton.tsx`, `ProductsList.tsx`).
- Client state: a vanilla Zustand store created in `app/store/cart-store.ts` and exposed via `app/store/cart-store-provider.tsx`. Components import hooks from the provider (e.g. `useCartStore`, `useCartStoreRaw`).
- Backend/API: Simple HTTP routes under `app/api/` using Next.js route handlers — see `app/api/products/route.ts` (GET returns `app/product-data.ts`) and `app/api/checkout_session/route.ts` (checkout endpoint; file currently empty in this copy).
- Payments: Stripe is integrated server-side in `app/actions/stripe.ts` (uses `../lib/stripe`) and client-side helpers reference `/api/checkout-session`. Confirm the API route names when wiring checkout flows.

2) Source-of-truth files and important patterns
- Products are defined in `app/product-data.ts` (exported `Product` type and sample data commented). Use this when adding or migrating product data.
- Cart logic is in `app/store/cart-store.ts` (createCartStore) and the provider in `app/store/cart-store-provider.tsx`. The provider instantiates the store once per app in `layout.tsx` using a ref.
- Persist/hydration: components call `cartStore.persist?.rehydrate()` and check `persist.hasHydrated()` before rendering cart-dependent UI (see `ProductCard.tsx`). When updating state persistence, follow this established pattern.
- Client/server conventions: UI components in `app/component/*` are mostly client components ('use client') and call into the cart store or fetch API routes. Server-only Stripe code is under `app/actions/stripe.ts` (marked 'use server').

3) Integration points and gotchas
- API endpoints vs client calls: components call `fetch('/api/checkout-session', { method: 'POST' })` (see `Cart.tsx`). Ensure `app/api/checkout_session/route.ts` accepts POST and returns a JSON payload containing `url` for redirect.
- Stripe usage: `app/actions/stripe.ts` demonstrates creating checkout sessions server-side. The project expects a `lib/stripe` helper that exports a configured Stripe client. If you modify Stripe behaviour, update both `app/actions/stripe.ts` and any API route that proxies checkout.
- Image assets: `ProductCard` and `ProductsList` use `next/image` with paths from `product.imageUrl`. Ensure images are present in `public/` or update to remote URLs and add `next.config.ts` remote patterns if needed.

4) Build, run, and developer workflows
- Start dev server: `npm run dev` (uses `next dev --turbopack`). Build: `npm run build`. Lint: `npm run lint`.
- This project targets Next.js 15 and React 19. Keep changes compatible with the App Router conventions (async server components, 'use client' for client components).
- When adding API routes, prefer creating files under `app/api/<resource>/route.ts` and follow the existing GET/POST shape shown in `app/api/products/route.ts`.

5) Project-specific conventions
- Store/provider pattern: create a vanilla Zustand store (`createStore`) in `app/store/cart-store.ts` and expose typed hooks via `app/store/cart-store-provider.tsx`. Consumers import `useCartStore` and occasionally `useCartStoreRaw` for low-level access.
- Split client/server logic: mark client components with `'use client'` at the top, and place server-only utilities under `app/actions/` or `lib/` and mark them `'use server'` where appropriate.
- Minimal server responses: API handlers return new Response(JSON.stringify(...), { status: 200, headers: { 'Content-Type': 'application/json' } }) — follow this pattern for consistency.

6) Examples to copy-paste
- Read products: `app/api/products/route.ts` (GET) — returns `products` from `app/product-data.ts`.
- Create checkout: client calls POST `/api/checkout-session` (see `app/component/Cart.tsx`) and expects JSON with `url`. If implementing the route, reuse `app/actions/stripe.ts` to create a session and return `{ url: session.url }`.

7) Safety and testing notes for AI edits
- When changing API routes or checkout code, do not leak secrets. Stripe secret keys should only live in server-side `lib/stripe` and environment variables — do not commit keys.
- Preserve 'use client' / 'use server' boundaries. Moving code to the wrong side will cause runtime errors.
- If you modify the Zustand store shape, update TypeScript types in `app/store/cart-store.ts` and all callers (AddToCartButton, Cart, ProductCard). Run TypeScript checks.

8) Files to check first for most tasks
- `app/layout.tsx` — global providers and layout.
- `app/store/cart-store.ts` and `app/store/cart-store-provider.tsx` — cart state and hooks.
- `app/component/*` — UI behavior for cart/product flows.
- `app/api/*/route.ts` — API endpoints; mirror existing response shapes.
- `app/actions/stripe.ts` and `lib/stripe` — payments.

If any section of this guidance is unclear or you want it expanded (e.g., specific TypeScript types, expected env vars for Stripe, or sample request/response schemas), tell me which area and I will extend the instructions.
