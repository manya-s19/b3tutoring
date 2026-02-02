import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bmtvrwplrnzayibjquqr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdHZyd3Bscm56YXlpYmpxdXFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMDA1NDIsImV4cCI6MjA4NTU3NjU0Mn0.xISdToB6lgVQTCetVW0DJ_BqGvHNWplm5G8lPiydWuI';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
