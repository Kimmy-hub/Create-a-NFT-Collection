let nfts = [];

function mintNFT(car, color, year) {
    const nft = {
        car: car,
        color: color,
        year: year
    };
    nfts.push(nft);
}

function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`NFT ${index + 1} Metadata:`);
        console.log(`Car: ${nft.car}`);
        console.log(`Color: ${nft.color}`);
        console.log(`Year: ${nft.year}`);
        console.log('-----------------------');
    });
}

function getTotalSupply() {
    return nfts.length;
}

mintNFT("Tesla Model X", "Red", 2022);
mintNFT("Porche 911", "Blue", 2023);
mintNFT("Mercedes AMG GT", "Black", 2020);

listNFTs();

console.log(`Total number of NFTs: ${getTotalSupply()}`);