// ===============================
// SUPABASE CONNECT
// ===============================

const supabaseUrl = "https://puazbdmudwwvxeloirvu.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1YXpiZG11ZHd3dnhlbG9pcnZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzODQxODQsImV4cCI6MjA5ODk2MDE4NH0.67uiJ3OKpSU3Xy1d0ckDtw_c9EpitjAGzeXEVTrB1cg";

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

console.log("✅ Supabase Connected");
