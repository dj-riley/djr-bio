---
created: 2024-06-29 01:36:29 -04:00
updated: 2024-07-10 15:46:46 -04:00
---

%% MIT License<br>Copyright (c) 2024 Dylan Riley <https://djr.bio> %%

# Remove Branding From Obsidian Publish

## Introduction

**[Obsidian Publish](https://obsidian.md/publish)** is one of the easiest way to publish your wiki, knowledge base, documentation, or digital garden.[^1] There exists multiple [customization options](https://help.obsidian.md/Obsidian+Publish/Customize+your+site) that give you control over the look and feel of your site. However, every default Publish site contains multiple `Powered by Obsidian` branding statements that are baked-in with no native option to change or hide. This guide will explore how to leverage [static assets](https://help.obsidian.md/Obsidian+Publish/Customize+your+site#Static+assets) to remove all traces of branding in your Obsidian Publish site.

> [!tip]
> This site, [djr.bio](https://djr.bio), is built upon Obsidian Publish! The [Obsidian development team](https://obsidian.md/about) have a solid track record of pushing [new features](https://obsidian.md/roadmap/) to their multiple platforms and deserve your hard earned money.

### Prerequisites

- [ ] [Set up Obsidian Publish](https://help.obsidian.md/Obsidian+Publish/Set+up+Obsidian+Publish)
- [ ] Create the following [static assets](https://help.obsidian.md/Obsidian+Publish/Customize+your+site#Static+assets) at the root of your Publish vault, if not exists:
	- [ ] `publish.js`
	- [ ] `publish.css`

---

## Steps

1. Copy, paste, and save the code blocks below into each respective customization file.
2. Publish all changes to your site.
3. Verify changes by force refreshing the browser cache of your Publish homepage via: `Ctrl` + `Shift` + `R`.

---

### Graph View

|                         Before                         |                         After                         |
| :----------------------------------------------------: | :---------------------------------------------------: |
| ![[remove-obsidian-publish-branding-graph-before.png]] | ![[remove-obsidian-publish-branding-graph-after.png]] |

- **Description**: Remove `Powered by Obsidian` branding within the graph view
- **Location**: Bottom-right corner of graph view window
- **File**: `publish.js`

	```js
	// MIT License
	// Copyright (c) 2024 Dylan Riley <https://djr.bio>
	// publish.js - Remove 'Powered by Obsidian' from Publish graph view
	
	(async function setupGraph(retryCount = 0) {
		const maxRetries = 300;
		const retryDelay = 10;
		
		try {
			while (!app?.graph?.renderer && retryCount < maxRetries) {
				await new Promise(resolve => setTimeout(resolve, retryDelay));
				retryCount++;
			}
			
			if (app?.graph?.renderer) {
				app.graph.renderer.hidePowerTag = true;
				console.log('[setupGraph] Done');
			} else {
				console.error(`[setupGraph] Failed to setup graph after maximum (${maxRetries}) retries, no changes made`);
			}
		} catch (error) {
			console.error('[setupGraph] Error:', error);
		}
	})();
	```

- **Explanation**: #TODO

---

### Footer

|                         Before                          |                         After                          |
| :-----------------------------------------------------: | :----------------------------------------------------: |
| ![[remove-obsidian-publish-branding-footer-before.png]] | ![[remove-obsidian-publish-branding-footer-after.png]] |

- **Description**: Remove `Powered by Obsidian Publish` branding within the site's footer
- **Location**: Bottom-right corner of webpage
- **File**: `publish.css`

	```css
	/* MIT License
	Copyright (c) 2024 Dylan Riley <https://djr.bio>
	publish.css - Remove 'Powered by Obsidian Publish' from Publish site footer */
	
	.site-footer{
		display: none;
	}
	```

- **Explanation**: #TODO

---

# Conclusion

The static customization files `publish.js` and `publish.css` provide us with enough flexibility to accomplish most requirements that you may have for your Publish webpage; as shown by removing the default branding. I encourage you to explore additional customization options via [[#related articles]]. Additionally, there are multiple [[#resources]] to better understand all of your options for customizing your Obsidian Publish site.

> [!note]
> *Comments, corrections, and/or suggestions?* [[Contact]] me and I'll happily accredit your contribution.

## Related Articles

- **Mobile**
	- [[Mobile Obsidian Sync Visibility]]
- **Publish**
	- [[Setup Google Analytics and Tags for Obsidian Publish]]
	- [[Show Properties in Obsidian Publish]]

### Resources

- [Obsidian Help - Introduction to Obsidian Publish](https://help.obsidian.md/Obsidian+Publish/Introduction+to+Obsidian+Publish)
- [Obsidian Docs - About Obsidian Publish Themes](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes)
- [Obsidian Docs - Obsidian Publish CSS Variables](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish)

---

## Troubleshooting

### Debugging

To better assist with debugging our custom JavaScript, we may utilize `console.log()` and `console.error()` print statements with relevant context throughout our code. This information is then made accessible via your browser's developer console to assist in any [[#troubleshooting]]. The most common web browser keyboard shortcuts to open and view the developer console are:

- **Firefox**: `Ctrl` + `Shift` + `K`
- **Chrome**: `Ctrl` + `Shift` + `I`
- **Edge**: `Ctrl` + `Shift` + `I`

### Changes Not Showing

> [!help]
> It may take a few minutes for your newly published changes to propagate across Obsidian's Publish servers.
>
> If you are still not seeing the branding disappear after following the above guide, attempt another force refresh of your Publish homepage to bypass your browser's cache via `Ctrl` + `Shift` + `R` and you should see the most up-to-date version of your site.

[^1]: https://obsidian.md/publish
