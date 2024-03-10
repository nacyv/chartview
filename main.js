const axios = require('axios');

async function getBinanceCandlestickData(symbol, interval, limit) {
    try {
        const response = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null;
    }
}

function parseBinanceCandlestickData(data) {
    const parsedData = data.map(candlestick => ({
        timestamp: new Date(candlestick[0]).toISOString(),
        open: parseFloat(candlestick[1]),
        high: parseFloat(candlestick[2]),
        low: parseFloat(candlestick[3]),
        close: parseFloat(candlestick[4]),
        volume: parseFloat(candlestick[5])
    }));
    return parsedData;
}

async function main() {
    const symbol = 'BTCUSDT';
    const interval = '5m';
    const limit = 120;

    const candlestickData = await getBinanceCandlestickData(symbol, interval, limit);
    if (candlestickData) {
        const parsedCandlestickData = parseBinanceCandlestickData(candlestickData);
        parsedCandlestickData.forEach(candlestick => {
            console.log(candlestick);
        });
    } else {
        console.log('No data available');
    }
}

main();

function init(){
            var chart = new ApexCharts(document.querySelector("#chart"), {
                chart: {
                    type: 'candlestick',
                    height: 350
                },
                plotOptions: {
    candlestick: {
      colors: {
        upward: '#3C90EB',
        downward: '#DF7D46'
      }
    }
                        },
                series: [{
                    data: [
                        // Contoh data. Anda perlu mengganti data ini dengan data sebenarnya dari Binance API
                        {
                            x: new Date('2024-03-09T00:00:00'),
                            y: [66254, 66500, 66123, 66345]
                        },
                        {
                            x: new Date('2024-03-09T00:05:00'),
                            y: [66345, 66450, 66234, 66389]
                        },
                        // Data lainnya...
                    ]
                }],
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    tooltip: {
                        enabled: true
                    }
                }
            });

            
            chart.render();
}

addEventListener('DOMContentLoaded',init);
