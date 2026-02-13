#!/usr/bin/env python3
"""
Script to build the modular HTML components into a single index.html file
This allows the website to work on static hosting platforms that don't support XMLHttpRequest
"""

import os
import re

def read_file(filepath):
    """Read a file and return its contents"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    """Write content to a file"""
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def build_index():
    """Build the complete index.html from components"""
    
    # Read the main index.html template
    index_content = read_file('index.html')
    
    # Component mappings
    components = {
        'components/header.html': '<!-- Navigation Component -->',
        'components/hero.html': '<!-- Hero Component -->',
        'components/about.html': '<!-- About Component -->',
        'components/experience.html': '<!-- Experience Component -->',
        'components/projects.html': '<!-- Projects Component -->',
        'components/contact.html': '<!-- Contact Component -->',
        'components/footer.html': '<!-- Footer Component -->'
    }
    
    # Replace component placeholders with actual content
    for component_file, placeholder in components.items():
        if os.path.exists(component_file):
            component_content = read_file(component_file)
            # Create the replacement pattern
            pattern = f'<div w3-include-html="{component_file}">{re.escape(placeholder)}</div>'
            replacement = f'<div>{component_content}</div>'
            index_content = re.sub(pattern, replacement, index_content)
    
    # Remove the component loader script since components are now inline
    # Find and remove the script block
    script_start = index_content.find('<!-- Component Loader (w3-include-html approach) -->')
    script_end = index_content.find('</script>', script_start) + len('</script>')
    if script_start != -1 and script_end != -1:
        index_content = index_content[:script_start] + index_content[script_end:]
    
    # Add initialization script that runs after DOM is loaded
    init_script = '''
    <!-- Initialization -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize all functionality
            initializeLanguage();
            
            // Initialize CV selector
            const cvButton = document.getElementById("cv-button");
            const cvMenu = document.getElementById("cv-menu");
            if (cvButton && cvMenu) {
                cvButton.addEventListener("click", () => {
                    cvMenu.classList.toggle("hidden");
                });

                document.addEventListener("click", (e) => {
                    if (!e.target.closest("#cv-button") && !e.target.closest("#cv-menu")) {
                        cvMenu.classList.add("hidden");
                    }
                });
            }
        });
    </script>
    '''
    
    # Add the init script before closing body tag
    index_content = index_content.replace('</body>', init_script + '\n</body>')
    
    # Write the built index.html
    write_file('index-built.html', index_content)
    print("✅ Built index-built.html successfully!")
    print("📁 All components have been combined into a single HTML file")
    print("🌐 This file will work on any static hosting platform")

if __name__ == '__main__':
    build_index()
