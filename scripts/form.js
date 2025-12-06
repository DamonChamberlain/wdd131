// Data source for product options
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

/**
 * Dynamically populates the product select dropdown using the products array.
 * Runs on form.html.
 * @param {Array<Object>} productList - The array of product objects.
 */
function populateProductSelect(productList) {
    const selectElement = document.getElementById('product-name');
    
    // Check if the select element exists (only runs on form.html)
    if (!selectElement) return;

    productList.forEach(product => {
        const option = document.createElement('option');
        // Display product name (capitalized)
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
        // Use the product ID for the option value
        option.value = product.id; 
        selectElement.appendChild(option);
    });
}

/**
 * Sets the current year in the footer span with id="currentyear".
 * Runs on both form.html and review.html.
 */
function setFooterYear() {
    const yearElement = document.getElementById('currentyear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Handles the review counter logic using localStorage.
 * Runs only on the review.html confirmation page.
 */
function handleReviewCounter() {
    const counterElement = document.getElementById('review-count');
    
    // Only execute this logic if the counter element is present (i.e., on review.html)
    if (!counterElement) return;

    // 1. Get the current count from localStorage, defaulting to 0
    let reviewCount = Number(localStorage.getItem('review-counter')) || 0;
    
    // 2. Increment the counter
    reviewCount += 1;
    
    // 3. Store the new count back in localStorage
    localStorage.setItem('review-counter', reviewCount);
    
    // 4. Update the display on the confirmation page
    counterElement.textContent = reviewCount;
}


// --- Execution ---

// Run functions when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProductSelect(products); // Populates the form dropdown
    setFooterYear(); // Sets the footer year on both pages
    handleReviewCounter(); // Manages the review count on the confirmation page
});