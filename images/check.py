import base64, os, sys

imgs = [
    "earbuds", "smartphone", "smartwatch", "keyboard", "speaker",
    "tv", "tshirt", "jeans", "backpack", "fastrack-watch",
    "mixer", "flask", "bulb", "cookware", "shoes",
    "bands", "yogamat", "cricket", "hikingbag", "scale"
]

src_dir = "/home/claude/imgs"
dst_dir = r"C:\Users\karti\OneDrive\Desktop\claude\Task-5-Final-Project\images"

print(f"Checking {src_dir}...")
for name in imgs:
    src = f"{src_dir}/{name}.jpg"
    if os.path.exists(src):
        size = os.path.getsize(src)
        print(f"  {name}.jpg: {size} bytes")
    else:
        print(f"  MISSING: {name}.jpg")
