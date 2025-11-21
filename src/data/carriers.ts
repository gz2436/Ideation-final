

export type NetworkType = 'AT&T' | 'Verizon' | 'T-Mobile' | 'Multi';

export interface Plan {
    name: string;
    price: number;
    data: string;
    features: string[];
    hotspot?: boolean;
    intlCalling?: boolean;
    contract?: boolean;
}

export interface CarrierData {
    id: string;
    name: string;
    logo: string;
    network: NetworkType;
    studentDiscount?: boolean;
    plans: Plan[];
}

export const carriers: CarrierData[] = [
    // --- Top Recommendations (Bento Grid) ---
    {
        id: 'verizon-top',
        name: 'Verizon',
        logo: '/images/960px-Verizon_2024.svg.png',
        network: 'Verizon',
        plans: [
            {
                name: 'Unlimited',
                price: 50,
                data: 'Unlimited',
                features: ['5G Nationwide', 'Loyalty discounts', 'Talk/text to MX/CA'],
                hotspot: true,
                intlCalling: true,
            },
            {
                name: '15GB Plan',
                price: 35,
                data: '15GB',
                features: ['Mobile hotspot', 'Carryover data', 'Loyalty discounts'],
                hotspot: true,
                intlCalling: true,
            }
        ]
    },
    {
        id: 'mint-mobile-top',
        name: 'Mint Mobile',
        logo: '/images/Mint_Mobile_Logo.svg',
        network: 'T-Mobile',
        plans: [
            {
                name: '5GB Plan',
                price: 15,
                data: '5GB',
                features: ['Unlimited talk & text', 'Free mobile hotspot', 'New customer offer'],
                hotspot: true,
                intlCalling: true,
            },
            {
                name: 'Unlimited',
                price: 30,
                data: 'Unlimited',
                features: ['40GB 5G/4G data', '10GB hotspot', 'Free intl calls to MX/CA'],
                hotspot: true,
                intlCalling: true,
            }
        ]
    },
    {
        id: 'att-prepaid-top',
        name: 'AT&T Prepaid',
        logo: '/images/960px-AT&T_logo_2016.svg.png',
        network: 'AT&T',
        plans: [
            {
                name: 'Unlimited MAX',
                price: 55,
                data: 'Unlimited',
                features: ['Unlimited high-speed data', '10GB hotspot', 'HD streaming'],
                hotspot: true,
                intlCalling: true,
            },
            {
                name: '5GB Plan',
                price: 30,
                data: '5GB',
                features: ['Rollover Data', '5G access', 'Fraud call blocking'],
                hotspot: true,
                intlCalling: true,
            }
        ]
    },

    // --- Major Carriers ---
    {
        id: 'verizon-prepaid',
        name: 'Verizon Prepaid',
        logo: '/images/960px-Verizon_2024.svg.png',
        network: 'Verizon',
        plans: [
            {
                name: 'Unlimited',
                price: 50,
                data: 'Unlimited',
                features: ['5G Nationwide', 'Loyalty discounts', 'Talk/text to MX/CA'],
                hotspot: true,
                intlCalling: true,
            },
            {
                name: '15GB Plan',
                price: 35,
                data: '15GB',
                features: ['Mobile hotspot', 'Carryover data', 'Loyalty discounts'],
                hotspot: true,
                intlCalling: true,
            }
        ]
    },
    {
        id: 't-mobile-prepaid',
        name: 'T-Mobile Prepaid',
        logo: '/images/T-Mobile_US_Logo_2020_RGB_Magenta_on_Transparent.svg',
        network: 'T-Mobile',
        plans: [
            {
                name: '10GB Connect',
                price: 35,
                data: '10GB',
                features: ['5G access included', 'Scam Shield', 'Annual upgrade'],
                hotspot: true,
                intlCalling: false,
            },
            {
                name: 'Unlimited',
                price: 50,
                data: 'Unlimited',
                features: ['Unlimited 5G data', '3G hotspot', 'Scam Shield'],
                hotspot: true,
                intlCalling: false,
            }
        ]
    },
    {
        id: 'att-prepaid',
        name: 'AT&T Prepaid',
        logo: '/images/960px-AT&T_logo_2016.svg.png',
        network: 'AT&T',
        plans: [
            {
                name: '5GB Plan',
                price: 30,
                data: '5GB',
                features: ['Rollover Data', '5G access', 'Fraud call blocking'],
                hotspot: true,
                intlCalling: true,
            },
            {
                name: 'Unlimited',
                price: 50,
                data: 'Unlimited',
                features: ['Unlimited data', '5G access', 'Text to 230+ countries'],
                hotspot: false,
                intlCalling: true,
            }
        ]
    },

    // --- Other MVNOs ---
    {
        id: 'google-fi',
        name: 'Google Fi',
        logo: '/images/Google_Fi_Wireless_-_Logo,_Text_(2023).svg',
        network: 'T-Mobile',
        plans: [
            {
                name: 'Simply Unlimited',
                price: 50,
                data: 'Unlimited',
                features: ['Unlimited data/calls/text', '5GB hotspot', 'Full connectivity for watches'],
                hotspot: true,
                intlCalling: true,
            },
            {
                name: 'Flexible',
                price: 20,
                data: '$10/GB',
                features: ['Pay for what you use', 'Bill protection', 'Free data SIMs'],
                hotspot: true,
                intlCalling: true,
            }
        ]
    },
    {
        id: 'cricket',
        name: 'Cricket Wireless',
        logo: '/images/640px-Cricket_Wireless_(2014).svg.png',
        network: 'AT&T',
        plans: [
            {
                name: '5GB Plan',
                price: 30,
                data: '5GB',
                features: ['Nationwide 5G', 'HD Voice', 'No annual contract'],
                hotspot: false,
                intlCalling: false,
            },
            {
                name: 'Unlimited',
                price: 55,
                data: 'Unlimited',
                features: ['Unlimited data', 'No data cap', 'Mexico & Canada included'],
                hotspot: false,
                intlCalling: true,
            }
        ]
    },
    {
        id: 'metro',
        name: 'Metro by T-Mobile',
        logo: '/images/640px-Metro_By_T-Mobile_2022.svg.png',
        network: 'T-Mobile',
        plans: [
            {
                name: 'Unlimited 5G',
                price: 40,
                data: 'Unlimited',
                features: ['Unlimited 5G data', 'T-Mobile Tuesdays', 'Scam Shield'],
                hotspot: false,
                intlCalling: false,
            },
            {
                name: 'Unlimited + Hotspot',
                price: 50,
                data: 'Unlimited',
                features: ['8GB Hotspot', '100GB Google One', 'Unlimited 5G'],
                hotspot: true,
                intlCalling: false,
            }
        ]
    },
    {
        id: 'boost',
        name: 'Boost Mobile',
        logo: '/images/960px-Boost_Mobile_(United_States)_logo.svg.png',
        network: 'T-Mobile',
        plans: [
            {
                name: 'Unlimited',
                price: 25,
                data: '30GB',
                features: ['New customer offer', '5G access', 'Mobile hotspot'],
                hotspot: true,
                intlCalling: false,
            },
            {
                name: '5GB Plan',
                price: 15,
                data: '5GB',
                features: ['New customer offer', '5G access', 'Mobile hotspot'],
                hotspot: true,
                intlCalling: false,
            }
        ]
    },
    {
        id: 'consumer-cellular',
        name: 'Consumer Cellular',
        logo: '/images/Consumer_Cellular_logo.svg',
        network: 'AT&T',
        plans: [
            {
                name: '1GB Plan',
                price: 20,
                data: '1GB',
                features: ['Unlimited talk & text', 'AARP discount available', 'Risk-free guarantee'],
                hotspot: true,
                intlCalling: false,
            },
            {
                name: '5GB Plan',
                price: 25,
                data: '5GB',
                features: ['Unlimited talk & text', 'Priority customer service', 'No contract'],
                hotspot: true,
                intlCalling: false,
            }
        ]
    }
];
