function init(){
            var chartOptions = {
                chart: {
                    type: 'candlestick',
                    height: 350
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
            };

            var chart = new ApexCharts(document.querySelector("#chart"), chartOptions);
            chart.render();
}

addventListener('DOMContentLoaded',init);
