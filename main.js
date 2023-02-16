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
                                    <h1 class="name">Name: ${coin.item.name}</h1>
                                    <h2 class="symbol">Symbol: ${coin.item.symbol}</h2>
                                    <h1 class="name">Price in BTC: ${coin.item.price_btc}</h1>
                                </div>
                            </div>
                        `);

            });
        }
    });
};

CoinGecko();

function NFT() {
    let link = "https://api.coingecko.com/api/v3/nfts/list";

    $.ajax({
        method: 'get',
        url: link,

        success: function(data) {
            data.forEach(item => {
                $("#container2").append(`
                            <div class="card">
                                <div class="image">
                                    <p id="img2">${item.symbol}</p>
                                </div>
                                <div class="dets">
                                <h1>ID: ${item.id}</h1>
                                    <h1 class="name">Name: ${item.name}</h1>
                                    <h2 class="symbol">contract_address: ${item.contract_address}</h2>
                                    <h1 class="name">platform_id: ${item.asset_platform_id}</h1>
                                </div>
                            </div>
                        `);

            });
        }
    });
};
NFT();