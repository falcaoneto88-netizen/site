const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://eiccvmfdsxqyafszkzcz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpY2N2bWZkc3hxeWFmc3premN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNzc4MDAsImV4cCI6MjA4ODc1MzgwMH0._0xlU-RzT01WQk-doz3xcNz8XKYSVyLX5TJP_QE1LoA";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function checkProjects() {
    console.log('Checking projects...');
    const { data, error } = await supabase.from('projects').select('user_id').limit(10);
    if (error) {
        console.error('Error fetching projects:', error);
    } else {
        console.log('Project user_ids:', data);
    }
}

checkProjects();
