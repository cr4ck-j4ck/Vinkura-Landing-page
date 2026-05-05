#!/bin/bash

# Base directory for Next.js app router
APP_DIR="app"

# Function to create a page
create_page() {
  local route=$1
  local title=$2
  local dir="$APP_DIR/$route"
  
  mkdir -p "$dir"
  
  cat <<EOF > "$dir/page.tsx"
import React from 'react';

export default function Page() {
  return (
    <div className="section" style={{ paddingTop: '12rem', paddingBottom: '8rem', minHeight: '100vh', background: '#fff', color: '#000' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 500, letterSpacing: '-2px', marginBottom: '2rem', lineHeight: 1 }}>$title</h1>
        <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '700px', lineHeight: 1.6 }}>
          Vinkura AI is currently developing comprehensive documentation and insights for the <strong>$title</strong> ecosystem. This section will feature deep-dives into our operating systems and data integration capabilities.
        </p>
        <div style={{ marginTop: '4rem', height: '1px', background: '#eee', width: '100%' }}></div>
      </div>
    </div>
  );
}
EOF
  echo "Created: $dir/page.tsx"
}

# Products
create_page "products/ddms" "DDMS"
create_page "products/foundry" "Foundry"
create_page "products/gotham" "Gotham"
create_page "products/ontology" "Ontology"
create_page "products/apollo" "Apollo"

# Company
create_page "company/documentation" "Documentation"
create_page "company/careers" "Careers"
create_page "company/newsroom" "Newsroom"

# Other
create_page "about-us" "About Us"
create_page "impact-studies" "Impact Studies"

echo "All internal pages refreshed successfully."
