#!/usr/bin/env bash
set -euo pipefail

APP_PATH=${1:-scripts/resources/ClipKunda.app}
VOL_NAME=${2:-ClipKunda}
OUT_DMG=${3:-dist/${VOL_NAME}-Installer.dmg}

RW_DMG="dist/${VOL_NAME}-temp.dmg"
MOUNT_POINT="/Volumes/${VOL_NAME}"

mkdir -p dist

if [ ! -d "${APP_PATH}" ]; then
  if [ -d "assets/ClipKunda.app" ]; then
    echo "Warning: ${APP_PATH} not found; falling back to assets/ClipKunda.app"
    APP_PATH="assets/ClipKunda.app"
  else
    echo "Error: App bundle not found at ${APP_PATH}"
    exit 1
  fi
fi

if [ -d "${MOUNT_POINT}" ]; then hdiutil detach "${MOUNT_POINT}" || true; fi
rm -f "${RW_DMG}" "${OUT_DMG}"

hdiutil create -volname "${VOL_NAME}" -srcfolder "${APP_PATH}" -ov -fs HFS+ -format UDRW "${RW_DMG}"
hdiutil attach "${RW_DMG}" -mountpoint "${MOUNT_POINT}"

ln -sf /Applications "${MOUNT_POINT}/Applications"

ICON_PATH="${APP_PATH}/Contents/Resources/MacIcon.icns"
if [ -f "${ICON_PATH}" ]; then cp -f "${ICON_PATH}" "${MOUNT_POINT}/.VolumeIcon.icns"; fi

if command -v SetFile >/dev/null 2>&1; then
  SetFile -a V "${MOUNT_POINT}/.VolumeIcon.icns" || true
  SetFile -a C "${MOUNT_POINT}" || true
fi

osascript <<EOF
tell application "Finder"
  tell disk "${VOL_NAME}"
    open
    delay 0.6
    set theWindow to container window
    set current view of theWindow to icon view
    set toolbar visible of theWindow to false
    set statusbar visible of theWindow to false
    set bounds of theWindow to {100, 100, 700, 500}
    set opts to icon view options of theWindow
    set arrangement of opts to not arranged
    set icon size of opts to 128
    try
      set background picture of opts to missing value
      set background color of opts to {65535, 65535, 65535}
    end try
    try
      set position of item "${VOL_NAME}.app" of theWindow to {120, 220}
    end try
    try
      set position of item "Applications" of theWindow to {420, 220}
    end try
    update without registering applications
    delay 0.6
    close theWindow
  end tell
end tell
EOF

hdiutil detach "${MOUNT_POINT}" || true
hdiutil convert "${RW_DMG}" -format UDZO -o "${OUT_DMG}"
rm -f "${RW_DMG}"
hdiutil verify "${OUT_DMG}"
echo "Created ${OUT_DMG}"
