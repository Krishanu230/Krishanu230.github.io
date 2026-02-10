#!/usr/bin/env python3
import os
import datetime
import sys

def get_ordinal_date_string():
    today = datetime.datetime.now()
    day = today.day
    if 11 <= day <= 13:
        suffix = 'th'
    else:
        suffix = {1: 'st', 2: 'nd', 3: 'rd'}.get(day % 10, 'th')
    
    # Format: "6th march 2024"
    return f"{day}{suffix} {today.strftime('%B').lower()} {today.year}"

def create_new_post():
    base_dir = "inspiration"
    
    # Ensure base directory exists
    if not os.path.exists(base_dir):
        print(f"Error: Directory '{base_dir}' not found.")
        return

    # Find the next available number
    existing_ids = []
    for entry in os.listdir(base_dir):
        if entry.isdigit() and os.path.isdir(os.path.join(base_dir, entry)):
            existing_ids.append(int(entry))
    
    next_id = max(existing_ids) + 1 if existing_ids else 1
    new_dir = os.path.join(base_dir, str(next_id))
    new_file = os.path.join(new_dir, "index.html")
    
    # Create directory
    os.makedirs(new_dir, exist_ok=True)
    
    current_date = get_ordinal_date_string()

    # Boilerplate content
    content = f"""<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PQF1D3X8K5"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {{ dataLayer.push(arguments); }}
        gtag('js', new Date());

        gtag('config', 'G-PQF1D3X8K5');
    </script>

    <title>Inspiration #{next_id}</title>
    <meta charset="iso-8859-1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/style.css">
</head>

<body>
    <!-- Top Image Placeholder -->
    <div class="text-center">
        <!-- Replace src with your GIF/Image URL -->
        <img src="https://www.cameronsworld.net/img/content/17/20.gif">
    </div>

    <!-- Preface or Intro -->
    <p class="text-center">
        <span class="text-lg c-neon-green-2 font-sans">Preface</span>
    </p>
    <p class="text-center">&nbsp;</p>
    <div class="text-center">
        <span class="c-yellow font-sans text-md">
            Write your intro here...
        </span>
    </div>

    <!-- Separator -->
    <p class="text-center">
        <span class="text-xl c-neon-green-2 font-sans">...</span>
    </p>

    <!-- Main Title -->
    <h1 class="text-center">
        <span class="font-sans">Title of Post #{next_id}</span>
    </h1>

    <!-- Main Content/Quote -->
    <p class="text-center">
        <span class="font-meta bold">
            <span class="c-neon-green-1 font-sans">
                Main content goes here...
            </span>
        </span>
    </p>

    <!-- Content Image Placeholder -->
    <div class="text-center">
        <!-- Optional Image -->
    </div>

    <p class="text-center">&nbsp;</p>
    <p class="text-center">&nbsp;</p>

    <!-- Footer Navigation -->
    <div class="text-center"> 
        <a href="../index.html">
            <span class="text-md font-sans c-yellow">back to inspiration list</span>
        </a> 
    </div>

    <!-- Timestamp (Auto-updated by Git Hook) -->
    <p class="text-center">
        <span id="post-timestamp" class="c-neon-green-2 font-sans">created on {current_date}, last modified on {current_date}</span>
    </p>

    <p>&nbsp;</p>
    <p>&nbsp; </p>

    <!-- Human Badge -->
    <div class="text-center">
        <img src="../../media/badges/English/Written By Human/SVG/Written-By-Human-Not-By-AI-Badge-white.svg">
    </div>
</body>

</html>
"""

    with open(new_file, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"Successfully created: {new_file}")
    print(f"Next step: Add <a href=\"./{next_id}/index.html\">Post {next_id}</a> to inspiration/index.html")

if __name__ == "__main__":
    create_new_post()
