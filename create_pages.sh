#!/bash

# Define the base app directory
APP_DIR="app"

# Array of product paths and titles
products=(
    "sentinel:Vinkura Sentinel"
    "forge:Vinkura Forge"
    "orbit:Vinkura Orbit"
    "voice:Vinkura Voice"
    "ddms:Vinkura DDMS"
)

# Array of company paths and titles
company=(
    "about:About Vinkura"
    "case-studies:Case Studies"
    "security:Security & Sovereignty"
    "careers:Careers"
    "newsroom:Newsroom"
)

# Function to create a boilerplate page
create_page() {
    local path=$1
    local title=$2
    
    mkdir -p "$APP_DIR/$path"
    
    cat > "$APP_DIR/$path/page.tsx" <<EOF
'use client';

import React from 'react';

const Page = () => {
  return (
    <main style={{ padding: '120px 2rem', minHeight: '80vh', backgroundColor: '#fff', color: '#000' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <span style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem', fontWeight: 700, color: '#999' }}>Vinkura AI</span>
        <h1 style={{ fontSize: '4rem', fontWeight: 500, letterSpacing: '-2px', marginTop: '2rem' }}>$title</h1>
        <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '800px', lineHeight: 1.6, marginTop: '2rem' }}>
          This section is currently under development. We are building the operational backbone for India's public systems.
        </p>
      </div>
    </main>
  );
};

export default Page;
EOF
    echo "Created: $APP_DIR/$path/page.tsx"
}

echo "Generating placeholders for Vinkura Landing..."

# Create Products
for item in "${products[@]}"; do
    path="${item%%:*}"
    title="${item#*:}"
    if [ ! -d "$APP_DIR/products/$path" ]; then
        create_page "products/$path" "$title"
    else
        echo "Skipping products/$path (already exists)"
    fi
done

# Create Company
for item in "${company[@]}"; do
    path="${item%%:*}"
    title="${item#*:}"
    if [ ! -d "$APP_DIR/company/$path" ]; then
        create_page "company/$path" "$title"
    else
        echo "Skipping company/$path (already exists)"
    fi
done

# Create Static Pages
create_page "impact-studies" "Impact Studies"
create_page "about-us" "About Us"

echo "Done! All pages and directories have been initialized."
