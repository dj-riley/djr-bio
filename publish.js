// MIT License
// Copyright (c) 2024 Dylan Riley <https://djr.bio>
// Obsidian Publish static asset for djr.bio


(async function setupGtag() {
	const trackingId = 'G-3QS2RH7EQD';

	function loadScript() {
		return new Promise((resolve, reject) => {
			var script = document.createElement('script');
			script.async = true;
			script.src = 'https://www.googletagmanager.com/gtag/js?id=' + trackingId;
			script.onload = function() {
				window.dataLayer = window.dataLayer || [];
				window.gtag = function() { dataLayer.push(arguments); };
				gtag('js', new Date());
				gtag('config', trackingId);
				resolve();
			};
			script.onerror = function(error) {
				reject(error);
			};
			document.head.appendChild(script);
		});
	}

	try {
		await loadScript();
		console.log('[setupGtag] Done');
	} catch (error) {
		console.error('[setupGtag] Error loading remote Gtag script:', error);
	}
})();


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


(async function setupFooter() {
	async function onDOMLoaded() {
		var siteFooter = document.querySelector('.site-footer');
		if (siteFooter) {
			var link = document.createElement('a');
			link.href = 'https://djr.bio/license';

			var currentYear = new Date().getFullYear();
			var yearText = currentYear > 2024 ? `2024-${currentYear}` : '2024';

			link.textContent = `djr.bio - Dylan Riley © ${yearText}`;

			siteFooter.innerHTML = '';
			siteFooter.appendChild(link);
			console.log('[setupFooter] Done');
		} else {
			console.error('[setupFooter] Footer element not found, no changes made');
		}
	}

	if (document.readyState === 'loading') {
		await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
	}

	await onDOMLoaded();
})();


// (async function setupDLlinks() {
// 	async function onDOMLoaded() {
// 		// Download File
// 		var dlFile = document.querySelector('.dl-file');
// 		if (dlFile) {
// 			dlFile.addEventListener('click', function(event) {
// 				event.preventDefault(); // Prevent default link behavior
// 				window.print();			// Open print (save to PDF) prompt
// 			});
// 			console.log('[setupDLlinks] Done (file)');
// 		} else {
// 			console.error('[setupDLlinks] DL file element not found, no changes made');
// 		}

// 		// Download Source
// 		var dlSource = document.querySelector('.dl-source');
// 		if (dlSource) {
// 			dlSource.addEventListener('click', function(event) {
// 				let currentFilepath = this.app.render.currentFilepath;
// 				let repoURL = `https://github.com/dj-riley/djr-bio/blob/main/${currentFilepath}`;
// 				dlSource.href = repoURL;
// 			});
// 			console.log('[setupDLlinks] Done (source)');
// 		} else {
// 			console.error('[setupDLlinks] DL source element not found, no changes made');
// 		}

// 		// Download Archive
// 		var dlArchive = document.querySelector('.dl-archive');
// 		if (dlArchive) {
// 			dlArchive.href = 'https://github.com/dj-riley/djr-bio/releases';
// 			console.log('[setupDLlinks] Done (archive)');
// 		} else {
// 			console.error('[setupDLlinks] DL archive element not found, no changes made');
// 		}
// 	}

// 	if (document.readyState === 'loading') {
// 		await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
// 	}

// 	await onDOMLoaded();
// })();
