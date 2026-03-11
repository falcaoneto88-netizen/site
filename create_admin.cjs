const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://eiccvmfdsxqyafszkzcz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpY2N2bWZkc3hxeWFmc3premN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNzc4MDAsImV4cCI6MjA4ODc1MzgwMH0._0xlU-RzT01WQk-doz3xcNz8XKYSVyLX5TJP_QE1LoA";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const email = 'admin@admin.com';
const password = 'admin123';

async function signup() {
    console.log('Final attempt to signup admin...');
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        if (error.message.includes('already registered')) {
            console.log('SUCCESS: Admin already exists.');
        } else {
            console.error('Signup error:', error.message);
        }
    } else {
        console.log('Signup success. User created.');
        console.log('NOTE: Email confirmation might still be required depending on project settings.');
    }
}

signup();
