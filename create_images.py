#!/usr/bin/env python3
"""Generate product images for ShopNest"""

from PIL import Image, ImageDraw, ImageFont
import os

# Create images directory if not exists
os.makedirs('images', exist_ok=True)

# Product image definitions
products = {
    'earbuds.jpg': ('Earbuds', '#FF6B9D', '🎧'),
    'phone.jpg': ('Smartphone', '#4A90E2', '📱'),
    'smartwatch.jpg': ('Smartwatch', '#F5A623', '⌚'),
    'keyboard.jpg': ('Keyboard', '#7ED321', '⌨️'),
    'speaker.jpg': ('Speaker', '#BD10E0', '🔊'),
    'tv.jpg': ('Smart TV', '#50E3C2', '📺'),
    'tshirt.jpg': ('T-Shirt', '#F8E71C', '👕'),
    'jeans.jpg': ('Jeans', '#417FFF', '👖'),
    'backpack.jpg': ('Backpack', '#B8E986', '🎒'),
    'watch.jpg': ('Watch', '#D0021B', '🕐'),
    'mixer.jpg': ('Mixer Grinder', '#FF6B35', '🍶'),
    'flask.jpg': ('Flask', '#4ECDC4', '🧴'),
    'bulb.jpg': ('LED Bulb', '#FFE66D', '💡'),
    'cookware.jpg': ('Cookware', '#95E1D3', '🍳'),
    'shoes.jpg': ('Running Shoes', '#C1666B', '👟'),
    'resistance.jpg': ('Resistance Bands', '#F38181', '🏋️'),
    'yoga_mat.jpg': ('Yoga Mat', '#AA96DA', '🧘'),
    'cricket.jpg': ('Cricket Ball', '#FCBAD3', '🏏'),
    'backpack_hiking.jpg': ('Hiking Backpack', '#A8D8EA', '🏕️'),
    'scale.jpg': ('Kitchen Scale', '#E8D4F8', '⚖️'),
    'headphones.jpg': ('Headphones', '#6C5B7B', '🎧'),
    'camera.jpg': ('DSLR Camera', '#355C7D', '📷'),
    'dress.jpg': ('Midi Dress', '#F67280', '👗'),
    'blender.jpg': ('Hand Blender', '#C06C84', '🥣'),
    'shuttlecock.jpg': ('Shuttlecock', '#6C5B7B', '🏸'),
    'tawa.jpg': ('Non-Stick Tawa', '#C9ADA7', '🍳'),
    'skincare.jpg': ('Skincare', '#9A8C98', '🧴'),
    'lego.jpg': ('LEGO Bricks', '#F1FAEE', '🧩'),
    'dal.jpg': ('Toor Dal', '#A8DADC', '🫘'),
}

# Image size
WIDTH, HEIGHT = 300, 300

for filename, (name, color, emoji) in products.items():
    # Create image with gradient-like background
    img = Image.new('RGB', (WIDTH, HEIGHT), color=color)
    draw = ImageDraw.Draw(img)
    
    # Add a semi-transparent overlay for depth
    overlay_color = tuple(max(0, c - 30) for c in img.getpixel((0, 0)))
    
    # Add rounded corners effect with a rectangle
    draw.rectangle([(10, 10), (WIDTH-10, HEIGHT-10)], outline=overlay_color, width=2)
    
    # Try to use a nice font, fall back to default
    try:
        font = ImageFont.truetype("arial.ttf", 120)
    except:
        font = ImageFont.load_default()
    
    # Draw emoji in center
    bbox = draw.textbbox((0, 0), emoji, font=font)
    emoji_width = bbox[2] - bbox[0]
    emoji_height = bbox[3] - bbox[1]
    emoji_x = (WIDTH - emoji_width) // 2
    emoji_y = (HEIGHT - emoji_height) // 2 - 20
    
    draw.text((emoji_x, emoji_y), emoji, fill='white', font=font)
    
    # Add product name at bottom
    try:
        name_font = ImageFont.truetype("arial.ttf", 18)
    except:
        name_font = ImageFont.load_default()
    
    name_bbox = draw.textbbox((0, 0), name, font=name_font)
    name_width = name_bbox[2] - name_bbox[0]
    name_x = (WIDTH - name_width) // 2
    name_y = HEIGHT - 40
    
    draw.text((name_x, name_y), name, fill='white', font=name_font)
    
    # Save image
    img.save(f'images/{filename}')
    print(f'✓ Created {filename}')

print(f'\n✓ All {len(products)} product images created successfully!')
