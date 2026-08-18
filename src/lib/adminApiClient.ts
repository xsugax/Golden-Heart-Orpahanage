"use client";

export class AdminUnauthorizedError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "AdminUnauthorizedError";
  }
}

export class AdminNetworkError extends Error {
  constructor(message = "Network request failed") {
    super(message);
    this.name = "AdminNetworkError";
  }
}

function redirectToAdminLogin() {
  if (typeof window === "undefined") return;

  const from = `${window.location.pathname}${window.location.search}`;
  const loginUrl = new URL("/admin/login", window.location.origin);
  loginUrl.searchParams.set("from", from);
  window.location.replace(loginUrl.toString());
}

async function getErrorMessageFromResponse(res: Response): Promise<string> {
  const contentType = res.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const data = (await res.json()) as { error?: unknown };
    if (typeof data.error === "string" && data.error.trim()) {
      return data.error;
    }
  }

  const text = await res.text();
  if (text.trim()) {
    return text;
  }

  return `Request failed with status ${res.status}.`;
}

export async function adminFetch(input: RequestInfo | URL, init?: RequestInit) {
  let response: Response;
  try {
    response = await fetch(input, { credentials: "same-origin", ...init });
  } catch {
    throw new AdminNetworkError("Unable to connect. Please check your internet and try again.");
  }

  if (response.status === 401) {
    redirectToAdminLogin();
    throw new AdminUnauthorizedError();
  }

  return response;
}

export async function adminFetchJson<T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> {
  const res = await adminFetch(input, init);
  if (!res.ok) {
    throw new Error(await getErrorMessageFromResponse(res));
  }
  return (await res.json()) as T;
}

export async function assertAdminOk(res: Response): Promise<void> {
  if (!res.ok) {
    throw new Error(await getErrorMessageFromResponse(res));
  }
}
