const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

export async function postJSON(path, data) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json();
}

export function track(event, props = {}) {
  try {
    // Basic analytics hook (replace with GA4/Plausible)
    window.dispatchEvent(new CustomEvent("analytics", { detail: { event, props } }));
  } catch (e) {
    // noop
  }
}
