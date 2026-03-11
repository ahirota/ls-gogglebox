// Global Variables
const API_BASE = 'https://api.tvmaze.com';
const SCHEDULE_ENDPOINT = 'schedule';
const COUNTRY_CODE = 'US';

// Run On Document Ready
$(async function() {
    await main();
});

// Main Call
async function main() {
    const scheduleItems = await getScheduleItems();
    console.log(scheduleItems);
    let scheduleCards = '';
    for (const item of scheduleItems) {
        scheduleCards += parseScheduleItemToHTML(item);
    }
    $('#schedule-cards').append(scheduleCards);
}

// Helper Functions
// Get item data
async function getScheduleItems() {
    const tomorrowDate = formattedTomorrowDate();
    const apiScheduleURL = `${API_BASE}/${SCHEDULE_ENDPOINT}?country=${COUNTRY_CODE}&date=${tomorrowDate}`;

    try {
        const result = await $.ajax({
            url: apiScheduleURL,
            type: 'GET',
            dataType: 'json'
        });

        return result.slice(0,24);
    } catch (error) {
        console.log(error);
    }
}

// Parse item into usable HTML
function parseScheduleItemToHTML(scheduleItem) {
    const url = scheduleItem.url ? scheduleItem.url : "#";
    const img = scheduleItem.show.image?.original ? scheduleItem.show.image?.medium : "assets/no_image_placeholder.jpg";
    const alt = scheduleItem.show.name ? scheduleItem.show.name : "Unknown Show";

    // Card Template
    return `<li class="card">
    <div class="card-wrapper">
        <a href="${url}" class="card-link">
            <img src="${img}" alt="Poster for ${alt}" class="img-responsive">
        </a>
    </div>
</li>`;
}

// Format Tomorrow's Date to ISO 8601 for TV Maze API Consumption
function formattedTomorrowDate() {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().slice(0,10);
}