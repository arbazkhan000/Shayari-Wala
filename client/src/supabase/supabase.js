import { createClient } from "@supabase/supabase-js";

// Debug environment variables
console.log('Environment variables:', {
    url: import.meta.env.VITE_SUPABASE_URL,
    key: import.meta.env.VITE_SUPABASE_ANON_KEY
});

// Fallback to hardcoded values if env variables are not available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://pccljaggpovptxxcqltl.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjY2xqYWdncG92cHR4eGNxbHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTY0MDQsImV4cCI6MjA2NDYzMjQwNH0.Ehs9NFxplg2vXAGXVR7orsq3ii9w_7VdMiFwUbpkci0';

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables. Please check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
console.log("Supabase  and supabse url key is", supabaseAnonKey, supabaseUrl);

// console.log(
//     "import.meta.env.VITE_SUPABASE_KEY",import.meta.env.VITE_SUPABASE_KEY
// );
