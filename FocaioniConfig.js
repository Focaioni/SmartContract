/*
Ganache CLI v6.1.0 (ganache-core: 2.1.0)

Available Accounts
==================
(0) 0x7c8702e22885dee1c8ada5dc5d5fd9d80849eb45
(1) 0x007309b3b4900579026697bf2a2680ff97eb009d
(2) 0x8b22bc528c12a2c43633ed3bf4bbc4797352076b
(3) 0x9ae403c0685fe755d323c8b6ef2a3b95e4b58c6a
(4) 0xf050f1d015ac36ea2dd40e7e5fed5494bc8cb77a
(5) 0x75d9e20312d86a8ec6563f14ed5049c21b2999ba
(6) 0x29c5f618a4d98d2ad239c4b1c120daefd9377948
(7) 0x04e979d06b4a01355c0712a1f33666f9101a68f1
(8) 0xe7825b9df8ba7d95533b5c4f13435be9f9150d92
(9) 0xa9368d01c44ae71b74785e5388767b8bce0f1979

Private Keys
==================
(0) 96ffb630be230a587584b983255fb05f35f2ee79a4aeb82f3b238156c5b6e2c6
(1) db0ac5b9db222b7747c778bb44a70ddcf53b8437af75830f6ff1e366fd4027a4
(2) ff4b130f339be4d4fdacf043c5baf73937acc96d6d7ae16d4b8ce30f729cce0e
(3) 203ba9708dc3acf20ec5e4c97fd4c06c7ca3084175e0900c19164c8600670c14
(4) 22b4e73affb9a8ecbbe62f90bb4340817a82fa54d7c9a49f0a3408c72251df12
(5) da60261a55394f98835a8c0ee8a5d0b023b4a260c04e23241ed653a67796f75d
(6) 28bfeedce9cfe6d308e02e09dc21e81085a6807e308b1a7570199f33d738f04c
(7) c105525c7ef866a1af0335c6a9c887ddc6b2212609b4a477e1fdb54d62fdd779
(8) ca19f07152976fe039934018b3d4a92349fc660478d04acde4b9f312f8d78342
(9) 834b3842d063a0d70d05951870089a27ba8b86c1c52b3b706b3918b07351fb78

HD Wallet
==================
Mnemonic:      submit rebuild begin used tumble submit more text offer surge proud suspect
Base HD Path:  m/44'/60'/0'/0/{account_index}

Listening on localhost:8545
*/

module.exports = {
	networks: {
		development: {
			operator: {
				address: '0x7c8702e22885dee1c8ada5dc5d5fd9d80849eb45',
				key: '96ffb630be230a587584b983255fb05f35f2ee79a4aeb82f3b238156c5b6e2c6'
			},
			
			admin: {
				address: '0x1bcC08bB283Be71884dCAfc3A766C415Fe3B30bA'
			},
			
			url: "http://localhost:8545"
		}
	}
};
