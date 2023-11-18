import { createClient } from "@supabase/supabase-js";

const URL = "https://tkroxuievxmgtncuzajh.supabase.co";

const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrcm94dWlldnhtZ3RuY3V6YWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyNzAwNjQsImV4cCI6MjAxNTg0NjA2NH0.w9vi1-koc9WrSjJDfNFrPKWr7LLCz9nhE3ITCPA1SS8";


export const supabase = createClient(URL, KEY);

