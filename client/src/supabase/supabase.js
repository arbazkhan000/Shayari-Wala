import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://pccljaggpovptxxcqltl.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjY2xqYWdncG92cHR4eGNxbHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTY0MDQsImV4cCI6MjA2NDYzMjQwNH0.Ehs9NFxplg2vXAGXVR7orsq3ii9w_7VdMiFwUbpkci0";

export const supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase  and supabse url key is", supabaseKey, supabaseUrl);


// console.log(
//     "import.meta.env.VITE_SUPABASE_KEY",import.meta.env.VITE_SUPABASE_KEY
// );
