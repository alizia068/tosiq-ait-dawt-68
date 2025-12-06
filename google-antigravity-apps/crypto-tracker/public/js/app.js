const socket = io();
const gridContainer = document.getElementById('crypto-grid');
const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');
const searchInput = document.getElementById('search-input');

let allCoins = [];
let previousPrices = {};

socket.on('connect', () => {
    statusDot.classList.remove('bg-red-500');
    statusDot.classList.add('bg-accent-green');
    statusText.textContent = 'Live';
    statusText.className = 'text-xs font-medium text-accent-green trigger-flash';
});

socket.on('disconnect', () => {
    statusDot.classList.remove('bg-accent-green');
    statusDot.classList.add('bg-red-500');
    statusText.textContent = 'Disconnected';
    statusText.className = 'text-xs font-medium text-red-500';
});

socket.on('crypto-update', (data) => {
    allCoins = data;
    renderCards(filterCoins(searchInput.value));
});

searchInput.addEventListener('input', (e) => {
    renderCards(filterCoins(e.target.value));
});

function filterCoins(searchTerm) {
    if (!searchTerm) return allCoins;
    const lowerTerm = searchTerm.toLowerCase();
    return allCoins.filter(coin =>
        coin.name.toLowerCase().includes(lowerTerm) ||
        coin.symbol.toLowerCase().includes(lowerTerm)
    );
}

function formatCurrency(value) {
    const num = parseFloat(value);
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: num < 1 ? 4 : 2,
        maximumFractionDigits: num < 1 ? 4 : 2
    }).format(num);
}

function formatLargeNumber(value) {
    const num = parseFloat(value);
    if (!num) return 'N/A';
    if (num >= 1.0e+9) {
        return (num / 1.0e+9).toFixed(2) + ' B';
    } else if (num >= 1.0e+6) {
        return (num / 1.0e+6).toFixed(2) + ' M';
    } else {
        return num.toFixed(2);
    }
}

function renderCards(coins) {
    if (coins.length === 0) {
        gridContainer.innerHTML = `
            <div class="col-span-full text-center text-gray-500 py-20">
                No coins found matching "${searchInput.value}"
            </div>
        `;
        return;
    }

    // Sort by market cap (rank) - CoinGecko usually provides them sorted, but good to ensure
    coins.sort((a, b) => (a.market_cap_rank || 9999) - (b.market_cap_rank || 9999));

    let html = '';
    coins.forEach(coin => {
        // CoinGecko fields: current_price, price_change_percentage_24h, image, symbol, name, market_cap
        const price = parseFloat(coin.current_price);
        const change = parseFloat(coin.price_change_percentage_24h);
        const prevPrice = previousPrices[coin.id];

        // Determine flash animation
        let cardClass = 'bg-dark-800 rounded-xl p-6 border border-dark-700 shadow-lg hover:shadow-2xl hover:border-dark-600 transition-all duration-300';
        if (prevPrice) {
            if (price > prevPrice) {
                cardClass += ' animate-flash-green';
            } else if (price < prevPrice) {
                cardClass += ' animate-flash-red';
            }
        }
        previousPrices[coin.id] = price;

        html += `
            <div class="${cardClass}">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                        <img src="${coin.image}" alt="${coin.name}" class="w-10 h-10 rounded-full">
                        <div>
                            <h3 class="font-bold text-white text-lg leading-tight">${coin.name}</h3>
                            <span class="text-xs text-gray-400 font-mono uppercase">${coin.symbol}</span>
                        </div>
                    </div>
                    <span class="text-xs font-mono text-gray-600">#${coin.market_cap_rank}</span>
                </div>
                
                <div class="space-y-1">
                    <div class="text-2xl font-mono font-medium tracking-tight text-white">
                        ${formatCurrency(price)}
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="${change >= 0 ? 'text-accent-green' : 'text-accent-red'} font-medium text-sm flex items-center gap-1">
                            ${change >= 0 ? '▲' : '▼'} ${Math.abs(change).toFixed(2)}%
                        </span>
                        <span class="text-xs text-gray-500 font-mono">
                            MCap: $${formatLargeNumber(coin.market_cap)}
                        </span>
                    </div>
                </div>
            </div>
        `;
    });

    gridContainer.innerHTML = html;
}
