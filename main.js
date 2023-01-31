function CoinGecko() {
    let link = "https://api.coingecko.com/api/v3/search/trending";

    $.ajax({
        method: 'get',
        url: link,

        success: function(data) {
            data.coins.forEach(coin => {
                $("#container").append(`
                            <div class="card">
                                <div class="image">
                                    <img src="${coin.item.small}" alt="" id="img1">
                                </div>
                                <div class="dets">
                                    <h1 id="name">Name:${coin.item.name}</h1>
                                    <h2 id="symbol">Symbol:${coin.item.symbol}</h2>
                                    <h1 id="name">Price in BTC:${coin.item.price_btc}</h1>
                                </div>
                            </div>
                        `);
            });
        }
    });
};

CoinGecko();