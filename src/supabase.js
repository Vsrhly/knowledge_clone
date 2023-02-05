import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gtdbrazgnjhmtdlrtjek.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0ZGJyYXpnbmpobXRkbHJ0amVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5OTIyOTcsImV4cCI6MTk5MDU2ODI5N30.DciY4RhLNSeQwmei1RM-hLSiPcajAoOUwQdJ4leWJX0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
