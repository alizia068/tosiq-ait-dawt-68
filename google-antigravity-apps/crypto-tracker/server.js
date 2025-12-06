const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

// CoinGecko API URL
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

let fetchInterval;

const fetchCryptoData = async () => {
    try {
        const response = await axios.get(API_URL);
        const data = response.data; // CoinGecko returns array directly
        io.emit('crypto-update', data);
        console.log('Emitted crypto data update from CoinGecko');
    } catch (error) {
        console.warn('Error fetching crypto data (using mock data):', error.message);

        // Generate mock data (CoinGecko structure)
        const mockData = [
            { id: 'bitcoin', market_cap_rank: 1, symbol: 'btc', name: 'Bitcoin', current_price: 65000 + Math.random() * 100, price_change_percentage_24h: Math.random() * 2 - 1, market_cap: 1200000000000, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png' },
            { id: 'ethereum', market_cap_rank: 2, symbol: 'eth', name: 'Ethereum', current_price: 3500 + Math.random() * 50, price_change_percentage_24h: Math.random() * 2 - 1, market_cap: 400000000000, image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' },
            { id: 'solana', market_cap_rank: 3, symbol: 'sol', name: 'Solana', current_price: 145 + Math.random() * 5, price_change_percentage_24h: Math.random() * 5 - 2, market_cap: 65000000000, image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png' },
            { id: 'binancecoin', market_cap_rank: 4, symbol: 'bnb', name: 'BNB', current_price: 580 + Math.random() * 2, price_change_percentage_24h: Math.random() * 1, market_cap: 89000000000, image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png' },
            { id: 'cardano', market_cap_rank: 5, symbol: 'ada', name: 'Cardano', current_price: 0.45 + Math.random() * 0.01, price_change_percentage_24h: Math.random() * 3 - 1, market_cap: 16000000000, image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png' },
            { id: 'ripple', market_cap_rank: 6, symbol: 'xrp', name: 'XRP', current_price: 0.60 + Math.random() * 0.01, price_change_percentage_24h: Math.random() * 2 - 1, market_cap: 33000000000, image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png' },
        ];
        io.emit('crypto-update', mockData);
        console.log('Emitted mock crypto data');
    }
};

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Send immediate data on connection
    fetchCryptoData();

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// Fetch data every 10 seconds (CoinGecko rate limit safe)
if (!fetchInterval) {
    fetchInterval = setInterval(fetchCryptoData, 10000);
}

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
