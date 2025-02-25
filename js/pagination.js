//script.js 
const partsPerPage = 12; // Number of parts to show per page 
const dataContainer = document.getElementById('data-container'); 
const pagination = document.getElementById('pagination'); 
const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next'); 
const pageNumbers = document.getElementById('page-numbers'); 
const pageLinks = document.querySelectorAll('.page-link'); 

const parts = 
	Array.from(dataContainer.getElementsByClassName('part')); 

// Calculate the total number of pages 
const totalPages = Math.ceil(parts.length / partsPerPage); 
let currentPage = 1; 

// Function to display parts for a specific page 
function displayPage(page) { 
	const startIndex = (page - 1) * partsPerPage; 
	const endIndex = startIndex + partsPerPage; 
	parts.forEach((part, index) => { 
		if (index >= startIndex && index < endIndex) { 
			part.style.display = 'block'; 
		} else { 
			part.style.display = 'none'; 
		} 
	}); 
} 

// Function to update pagination buttons and page numbers 
function updatePagination() { 
	pageNumbers.textContent = 
		`Page ${currentPage} of ${totalPages}`; 
	prevButton.enabled = currentPage === 1; 
	nextButton.enabled = currentPage === totalPages; 
	pageLinks.forEach((link) => { 
		const page = parseInt(link.getAttribute('data-page')); 
		link.classList.toggle('active', page === currentPage); 
	}); 
} 

// Event listener for "Previous" button 
prevButton.addEventListener('click', () => { 
	if (currentPage > 1) { 
		currentPage--; 
		displayPage(currentPage); 
		updatePagination(); 
	} 
}); 

// Event listener for "Next" button 
nextButton.addEventListener('click', () => { 
	if (currentPage < totalPages) { 
		currentPage++; 
		displayPage(currentPage); 
		updatePagination(); 
	} 
}); 

// Event listener for page number buttons 
pageLinks.forEach((link) => { 
	link.addEventListener('click', (e) => { 
		e.preventDefault(); 
		const page = parseInt(link.getAttribute('data-page')); 
		if (page !== currentPage) { 
			currentPage = page; 
			displayPage(currentPage); 
			updatePagination(); 
		} 
	}); 
}); 

// Initial page load 
displayPage(currentPage); 
updatePagination();