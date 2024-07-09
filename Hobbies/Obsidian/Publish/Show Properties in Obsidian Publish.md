---
created: 2024-06-29 12:04:44 -04:00
updated: 2024-07-04 15:06:13 -04:00
---

# Show Properties in Obsidian Publish

## Introduction

**[Obsidian Publish](https://obsidian.md/publish)** is one of the easiest way to publish your wiki, knowledge base, documentation, or digital garden.[^1] However, there are several [Publish limitations](https://help.obsidian.md/Obsidian+Publish/Publish+limitations) for end users who utilize the core [Obsidian](https://obsidian.md/download) application. One such limitation, as of the creation date of this article, is the [missing support](https://help.obsidian.md/Obsidian+Publish/Manage+sites#Site+Options) to display [properties](https://help.obsidian.md/Editing+and+formatting/Properties) on any Publish page.

> [!info]
> You may utilize file properties within your Obsidian application to help manage your Publish site with metadata that only *you* will see in your application. At it's core, properties are store in [YAML format](https://help.obsidian.md/Editing+and+formatting/Properties#Property+format), viewable via Obsidian application when in `Source mode`. This block of YAML is stored at the top of your document and is often referred to as the [Frontmatter](https://help.obsidian.md/Getting+started/Glossary#Frontmatter).

For Publish users who utilize a `publish.css` static asset to [customize your site](https://help.obsidian.md/Obsidian+Publish/Customize+your+site#Static+assets), there exists a `.frontmatter` CSS variable that is hidden by default. Modifying this variable can allow for us to display our frontmatter on Publish pages. **Since there is no official support for displaying properties on Publish pages, they are shown in YAML format only.** Below we will explore two different proposed solutions you may utilize to show your properties [[#Global|globally]] or [[#Selective|selectively]] for the Publish pages on your site.

### Prerequisites

- [ ] Active [Obsidian Publish](https://obsidian.md/publish) subscription
- [ ] [Configured Publish site](https://help.obsidian.md/Obsidian+Publish/Set+up+Obsidian+Publish)
- [ ] Text editor
- [ ] `publish.css` [static asset](https://help.obsidian.md/Obsidian+Publish/Customize+your+site#Static+assets)

---

## Steps

### Global

1. Open your vault's `publish.css` in your preferred text editor
2. Copy, paste, and save the code block below into `publish.css`

	```css
	/* MIT License
	Copyright (c) 2024 Dylan Riley <https://djr.bio>
	publish.css - Show frontmatter YAML in Obsidian Publish globally */
	
	.frontmatter {
		display: block !important;
		margin-top: 0.75em;
		font-size: 75%;
	}
	```

3. Publish `publish.css` changes to your site via Obsidian application
4. Verify changes by force refreshing the browser cache for your Publish site via: `Crtl` + `Shift` + `R`

> [!tip]
> The global solution is utilized on this site, [djr.bio](https://djr.bio), to provide the reader with context for the datetime of article creation and it's last update:
>
> ![[show-properties-in-obsidian-publish-example.png|center]]
>
> While I lose the option of [[#Selective|selectively]] showing the frontmatter on any one page, I do not have to also show a dedicated frontmatter element as described below.

---

### Selective

The selective solution is completed via the [default property](https://help.obsidian.md/Editing+and+formatting/Properties#Default+properties): `cssclasses`. For this example, we will title the custom CSS class `selective` for clarity.

1. Open your vault's `publish.css` in your preferred text editor
2. Copy, paste, and save the code block below into `publish.css`

	```css
	/* MIT License
	Copyright (c) 2024 Dylan Riley <https://djr.bio>
	publish.css - Show frontmatter YAML in Obsidian Publish by class */
	
	.selective .frontmatter {
		display: block !important;
		margin-top: 0.75em;
		font-size: 75%;
	}
	```

3. Add the [YAML](https://help.obsidian.md/Editing+and+formatting/Properties#Property+format) code block below to the frontmatter of any Publish page in which you want to display it's properties

	```yaml
	cssclasses:
	  - selective
	```

4. Publish all changes to your site via Obsidian application
5. Verify changes by force refreshing the browser cache for your Publish site via: `Crtl` + `Shift` + `R`

---

# Conclusion

CSS wizards can likely massage the Publish frontmatter elements enough to closer replicate the default properties feature within the core Obsidian application. For now, the utility of simply displaying it's raw YAML format can be utilized within Obsidian Publish with little effort.

> [!note]
> *Comments, corrections, and/or suggestions?* [[Contact]] me and I'll happily accredit your contribution.

## Related Articles

- **Mobile**
	- [[Mobile Obsidian Sync Visibility]]
- **Publish**
	- [[Remove Branding From Obsidian Publish]]
	- [[Setup Google Analytics and Tags for Obsidian Publish]]

### Resources

#TODO

---

## Troubleshooting

[^1]: https://obsidian.md/publish
