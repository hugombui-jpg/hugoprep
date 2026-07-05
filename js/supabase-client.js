// ============================================================
// HugoPrep — Supabase connection
//
// This file is NOT wired to a real backend yet. Replace the two
// placeholders below once the Supabase project exists:
//   Supabase Dashboard -> Settings -> API
//     - "Project URL"        -> SUPABASE_URL
//     - "anon" "public" key  -> SUPABASE_ANON_KEY
//
// Until real values are pasted in, every page that uses this file
// will show a friendly "not connected yet" message instead of
// silently failing.
// ============================================================

const SUPABASE_URL = "PASTE_YOUR_SUPABASE_PROJECT_URL_HERE";
const SUPABASE_ANON_KEY = "PASTE_YOUR_SUPABASE_ANON_PUBLIC_KEY_HERE";

const isSupabaseConfigured =
  !SUPABASE_URL.includes("PASTE_YOUR") && !SUPABASE_ANON_KEY.includes("PASTE_YOUR");

const supabaseClient = isSupabaseConfigured
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

// Shared helper: show a "backend not connected" notice and stop.
function requireSupabaseOrWarn(msgEl) {
  if (isSupabaseConfigured) return true;
  if (msgEl) {
    msgEl.textContent =
      "This page isn't connected to the account system yet. (Missing Supabase project URL/key in js/supabase-client.js.)";
    msgEl.classList.add("show", "info");
  }
  return false;
}
