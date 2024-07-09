---
created: 2024-07-03 22:47:22 -04:00
updated: 2024-07-04 16:47:14 -04:00
---

# Mobile Obsidian Sync Visibility

## Introduction

**[Obsidian Sync](https://obsidian.md/sync)** is the simple and secure way to synchronize your Obsidian notes across any device and OS.[^1] Power users may benefit by configuring the Sync's icon visibility while on a mobile device or smartphone by utilizing a custom [CSS snippet](https://help.obsidian.md/Extending+Obsidian/CSS+snippets).

|                      Before                       |                      After                       |
| :-----------------------------------------------: | :----------------------------------------------: |
| ![[mobile-obsidian-sync-visibility-before-1.png]] | ![[mobile-obsidian-sync-visibility-after-1.png]] |
| ![[mobile-obsidian-sync-visibility-before-2.png]] | ![[mobile-obsidian-sync-visibility-after-2.png]] |

The [Obsidian app](https://obsidian.md/download) has designed the Sync icon anchored into the upper right corner of the app's right drawer with the following behavior:

- Accessible via left swipe
- Check mark (✅) on a successful sync status
- Circular arrows (🔄) on an active sync status
- Cross mark (❌) on an error or merge conflict status

This drawer is also designed to automatically right collapse any time you are actively accessing a document's main content. Therefore, moving the Sync icon into the visible workspace will allow for us to more easily access the Sync menu and current status while using the app.

### Prerequisites

- [ ] Knowledge of [Obsidian CSS snippets](https://help.obsidian.md/Extending+Obsidian/CSS+snippets)
- [ ] [Obsidian Sync](https://help.obsidian.md/Obsidian+Sync/Introduction+to+Obsidian+Sync) active subscription
	- [ ] [Configured remote vault](https://help.obsidian.md/Obsidian+Sync/Set+up+Obsidian+Sync)
- [ ] Mobile device
- [ ] [Obsidian mobile application](https://obsidian.md/download)
	- [iOS](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442)
	- [Android](https://play.google.com/store/apps/details?id=md.obsidian)
- [ ] Text editor

---

## Steps

> [!important]
> **Setup via Mobile** 📲
>
> Obsidian does *NOT* [natively support](https://help.obsidian.md/Files+and+folders/Accepted+file+formats) editing a `.css` file. Therefore this necessitates the [[#Prerequisites|prerequisite]] of your favorite text editor. If you are following the steps below 100% on your phone, you will need to first download a text editor app if you do not already have one installed.
>
> Below are my recommendations on text editors you may use depending on your platform:
>
> - **PC**: [Sublime Text](https://sublimetext.com/download)
> - **iOS**: [Runestone](https://apps.apple.com/us/app/runestone-editor/id1548193893)
> - **Android**: [QuickEdit Text Editor](https://play.google.com/store/apps/details?id=com.rhmsoft.edit)

1. Open your favorite text editor application
2. Create a new file, a [CSS snippet](https://help.obsidian.md/Extending+Obsidian/CSS+snippets) for your vault: `mobile-sync.css`
3. Copy, paste, and save the [[#CSS Snippet]] code block below into the newly created `mobile-sync.css` file; exit text editor

> [!done]
> **Verify Successful Changes**
>
> - [ ] Navigate to the *CSS snippets* section within your Obsidian application via: `Settings` → `Appearance` → `CSS Snippets`
> 	- [ ] Verify `mobile-sync.css` is listed and activated (Not listed? Try to [[#reload snippets]])
> - [ ] Navigate back to the main work space within the Obsidian application
> 	- [ ] Verify the Sync icon is displayed in the upper right corner and remains visible while editing a document
>
> ![[mobile-obsidian-sync-visibility-after-1.png|center|400]]

### CSS Snippet

```css
/* MIT License 
Copyright (c) 2024 Dylan Riley <https://djr.bio>
mobile-sync.css - Move Obsidian sync icon into viewspace on mobile & phone */

/* Move sync icon from right drawer into viewspace */
:is(.is-mobile, .is-phone) .workspace:not(:has(.workspace-drawer-backdrop)) .workspace-drawer.mod-right {
	display: flex !important;
	overflow: visible;
	left: 100%;
}
:is(.is-mobile, .is-phone) .workspace:not(:has(.workspace-drawer-backdrop)) .workspace-drawer.mod-right .workspace-drawer-inner {
	overflow: visible;
}
:is(.is-mobile) .workspace:not(:has(.workspace-drawer-backdrop)) .sync-status-icon {
	position: absolute;
	left: -45px;
	top: 195px;
}
:is(.is-phone) .workspace:not(:has(.workspace-drawer-backdrop)) .sync-status-icon {
	left: -40px;
	top: 45px;
}

/* Animate icon when syncing is active */
.sync-status-icon.mod-working{
	animation: linear 2s sync_working infinite;
}
@keyframes sync_working {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
```

---

# Conclusion

With a little knowledge of Obsidian's CSS variables, we can easily adjust any of the application's front-end features as shown by modifying the visibility of the Sync icon. I encourage you to explore the additional [[#related articles]] and [[#resources]] to better understand how you may fully extend Obsidian to your own liking as the options are virtually limitless.

> [!note]
> *Comments, corrections, and/or suggestions?* [[Contact]] me and I'll happily accredit your contribution.

## Related Articles

- **Publish**
	- [[Remove Branding From Obsidian Publish]]
	- [[Setup Google Analytics and Tags for Obsidian Publish]]
	- [[Show Properties in Obsidian Publish]]

### Resources

- [Obsidian Docs - About Styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
- [Obsidian Docs - CSS Variables](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)

---

## Troubleshooting

### Reload Snippets

If your newly created [[#CSS snippet]] is not listed automatically within Obsidian, click on the `Reload snippets` button to refresh the file list:

![[mobile-obsidian-sync-visibility-css-snippets-reload-button.png|center]]

### Poor Icon Alignment

If the Sync icon is misaligned or missing from your main workspace after activating the `mobile-sync.css` [[#CSS snippet]], then you may need to manually adjust the `top` and `left` values within the `.css` file to fit for your specific phone or mobile device model:

```css
:is(.is-mobile) .workspace:not(:has(.workspace-drawer-backdrop)) .sync-status-icon {
	position: absolute;
	left: -XXpx;
	top: XXXpx;
}
:is(.is-phone) .workspace:not(:has(.workspace-drawer-backdrop)) .sync-status-icon {
	left: -XXpx;
	top: XXpx;
}
```

[^1]: https://obsidian.md/sync
