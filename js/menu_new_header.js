// ========================================
// A-ONE BAKERY - MENU PAGE JAVASCRIPT
// ========================================

// SUPABASE CONFIGURATION
const supabaseUrl = 'https://zawspjereggsjcdfyqaa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdWJhc2UiLCJzZWIiOiJlZnl6Inphd3NwamVyZWdnczJjZGZ5cWFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3ODc1OTAsImV4cCI6MjA5NDM2MzU5MH0.dNvPVD3-LwDmmNKBy1hWcx-IXymMsJAjv-E2bLY6tDE';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Global category mapping
const categoryMap = {
    'single_tier': 'cake', '2_tier': 'cake', '3_tier': 'cake', '4_tier': 'cake', '5_tier': 'cake',
    'kids': 'cake', 'regular_cakes': 'cake', 'black_forest': 'cake', 'chocolate': 'cake', 
    'coconut': 'cake', 'fruit_nuts_&amp;_jaggery': 'cake', 'gulab_jamun': 'cake', 
    'lotus_biscoff': 'cake', 'mango': 'cake', 'marble': 'cake', 'oreo': 'cake', 
    'pineapple': 'cake', 'pistachio': 'cake', 'rasmalai': 'cake', 'red_velvet': 'cake', 
    'strawberry': 'cake', 'vanilla': 'cake',
    'cake_slice': 'cake_slice', 'cream_rolls': 'cream_rolls', 'cup_cakes': 'cup_cakes', 
    'cup_cake_clamshell': 'cup_cakes', 'pastries_in_clamshell': 'pastry', 'pudding_cups': 'pudding_cups',
    'round_biscuits': 'biscuits', 'rectangular_biscuits': 'biscuits',
    'biscuits_2.5lbs': 'biscuits', 'biscuits_340gms': 'biscuits', 'biscuits_5lbs': 'biscuits', 
    'biscuits_700g': 'biscuits',
    'sooji_milk_rusk': 'bread', 'tasty_tea_rusk': 'bread', 'whole_wheat_tea_rusk': 'bread',
    'pani_puri': 'pani_puri'
};

async function loadProducts() {
    try {
        const { data, error } = await _supabase
            .from('products')
            .select('*')
            .order('id', { ascending: true });

        if (error) throw error;

        // Populate the global products array (declared in global.js)
        if (typeof products !== 'undefined') {
            products = data.map(p => {
                const mappedCategory = categoryMap[p.category] || p.category;
                return {
                    ...p,
                    subCategory: p.sub_category !== mappedCategory ? p.sub_category : null,
                    category: mappedCategory
                };
            });
        }

        // Update the Varieties counter dynamically
        const varietyStat = document.querySelector('.stat-num[data-target="493"]');
        if (varietyStat) {
            varietyStat.setAttribute('data-target', products.length);
            varietyStat.textContent = products.length + '+';
        }

        // Trigger initial render
        if (typeof renderProducts === 'function') {
            renderProducts('all');
        }
        
    } catch (err) {
        console.error('Error loading products from Supabase:', err);
    }
}
