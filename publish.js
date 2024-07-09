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
			// link.target = '_blank';
			link.textContent = 'djr.bio - Dylan Riley © 2024';

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








// // Function to detect page change in Obsidian Publish
// function detectPageChange(callback) {
// 	// Select the target node for observing
// 	const targetNode = document.querySelector('body'); // or any specific element that changes on page load

// 	// Options for the observer (which mutations to observe)
// 	const config = { childList: true, subtree: true };

// 	// Callback function to execute when mutations are observed
// 	const observerCallback = function(mutationsList, observer) {
// 		for(let mutation of mutationsList) {
// 			// if (mutation.type === 'childList') {
// 			//     // Call the callback function passed as argument
// 			//     callback();
// 			//     break;
// 			// }

// 			console.log(`addedNodes: ${mutation.addedNodes}`);
// 			console.log(`attributeName: ${mutation.attributeName}`);
// 			console.log(`attributeNamespace: ${mutation.attributeNamespace}`);
// 			console.log(`nextSibling: ${mutation.nextSibling}`);
// 			console.log(`oldValue: ${mutation.oldValue}`);
// 			console.log(`previousSibling: ${mutation.previousSibling}`);
// 			console.log(`removedNodes: ${mutation.removedNodes}`);
// 			console.log(`target: ${mutation.target}`);
// 			console.log(`type: ${mutation.type}`);

// 			console.log('----------------');

// 			callback();
// 			break;
// 		}
// 	};

// 	// Create an observer instance linked to the callback function
// 	const observer = new MutationObserver(observerCallback);

// 	// Start observing the target node for configured mutations
// 	observer.observe(targetNode, config);

// 	// Optionally: Return the observer instance to allow manual disconnection later
// 	return observer;
// }

// // Example usage
// detectPageChange(() => {
// 	console.log('Page changed detected!');
// 	// Add your custom code to handle the page change here
// });





// (async function getRender(retryCount = 0) {
// 	const maxRetries = 300;
// 	const retryDelay = 10;
	
// 	try {
// 		while (!this.publish.render && retryCount < maxRetries) {
// 			await new Promise(resolve => setTimeout(resolve, retryDelay));
// 			retryCount++;
// 		}
		
// 		if (this.publish.render) {
// 			// console.dir(this.publish.render);
// 			console.log('[getRender] Done');

// 		} else {
// 			console.error(`[getRender] Failed to get render`);
// 		}
// 	} catch (error) {
// 		console.error('[getRender] Error:', error);
// 	}
// })();


// // Function to start monitoring changes with MutationObserver
// function monitorChangesWithMutationObserver() {
//     // Ensure renderContainerEl is available
//     if (this.publish && this.publish.render && this.publish.render.renderContainerEl) {
//         const renderContainerEl = this.publish.render.renderContainerEl;

//         // Create a new MutationObserver instance
//         const observer = new MutationObserver((mutationsList, observer) => {
//             for (let mutation of mutationsList) {
//                 if (mutation.type === 'childList' || mutation.type === 'attributes') {
//                     console.log('Page change detected!', mutation);
//                     // Additional handling code can go here
//                 }
//             }
//         });

//         // Configuration for the observer
//         const config = {
//             childList: true, // Observe additions and removals of child nodes
//             attributes: true, // Observe changes to attributes
//             subtree: true // Observe the entire subtree of the renderContainerEl
//         };

//         // Start observing the renderContainerEl
//         observer.observe(renderContainerEl, config);

//         console.log('MutationObserver is now observing renderContainerEl for changes.');
//     } else {
//         console.error('Publish object or renderContainerEl not available.');
//     }
// }

// // Call the function to start monitoring changes
// monitorChangesWithMutationObserver.call(this);
