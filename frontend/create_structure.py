import os

folders = [
    "src/api",
    "src/assets/images",
    "src/assets/icons",
    "src/assets/fonts",
    "src/components/common",
    "src/components/layout",
    "src/context",
    "src/hooks",
    "src/layouts",
    "src/pages/Home",
    "src/pages/Login",
    "src/pages/Dashboard",
    "src/routes",
    "src/services",
    "src/store",
    "src/styles",
    "src/utils"
]

files = [
    "src/App.jsx",
    "src/main.jsx",
    "src/index.css",
    "src/routes/AppRoutes.jsx",
    "src/api/axiosClient.js",
    "src/store/index.js",
    "src/utils/constants.js",
    "src/styles/globals.css"
]

for folder in folders:
    os.makedirs(folder, exist_ok=True)

for file in files:
    open(file, 'a').close()

print("✅ React folder structure created successfully!")
