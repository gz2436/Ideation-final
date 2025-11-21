export interface Guide {
    id: string
    title: string
    excerpt: string
    category: string
    readTime: string
    date: string
    image: string
    link: string
}

export const guides: Guide[] = [
    {
        id: 'intl-student-guide',
        title: 'The Complete Guide to US Phone Plans for International Students',
        excerpt: 'Everything you need to know before landing: prepaid vs. postpaid, credit checks, network coverage, and the best carriers for students without SSN.',
        category: 'Switching',
        readTime: '10 min read',
        date: 'Nov 15, 2024',
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80',
        link: 'https://medium.com/tag/international-students'
    },
    {
        id: 'save-money-data',
        title: 'How I Cut My Phone Bill by 70% Without Switching Carriers',
        excerpt: 'Simple tricks to cut your data usage in half. Learn about Wi-Fi assist, background refresh, offline maps, and the apps silently draining your wallet.',
        category: 'Savings',
        readTime: '6 min read',
        date: 'Nov 10, 2024',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
        link: 'https://medium.com/tag/money-saving'
    },
    {
        id: 'esim-travel-guide',
        title: 'eSIM for Travel: Your Complete International Roaming Guide',
        excerpt: 'How to activate eSIMs for international travel, the best providers (Airalo, Umi, Ubigi), and why you might still need that physical slot.',
        category: 'Travel',
        readTime: '8 min read',
        date: 'Nov 05, 2024',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        link: 'https://medium.com/tag/esim'
    },
    {
        id: '5g-explained',
        title: '5G Explained: Do Students Really Need It in 2024?',
        excerpt: 'Breaking down the hype: mmWave vs. Sub-6GHz, real-world speed tests, battery drain myths, and whether you should pay extra for 5G coverage.',
        category: 'Technology',
        readTime: '7 min read',
        date: 'Oct 28, 2024',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        link: 'https://medium.com/tag/5g'
    },
    {
        id: 'mint-vs-visible',
        title: 'Mint Mobile vs Visible: I Tested Both for 90 Days',
        excerpt: 'Speed tests, deprioritization reality checks, customer service nightmares, and the real cost when you factor in taxes and fees. The definitive comparison.',
        category: 'Reviews',
        readTime: '12 min read',
        date: 'Oct 15, 2024',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
        link: 'https://medium.com/tag/tech-review'
    },
    {
        id: 'contract-types',
        title: 'Prepaid vs Postpaid: Which Contract Type is Right for You?',
        excerpt: 'Understanding the trade-offs between flexibility and perks. When to choose prepaid, why postpaid might save you money, and the hidden costs of both.',
        category: 'Switching',
        readTime: '5 min read',
        date: 'Oct 08, 2024',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        link: 'https://medium.com/tag/mobile-plans'
    },
    {
        id: 'roaming-tips',
        title: '10 Roaming Tips That Will Save You Hundreds',
        excerpt: 'From turning off data roaming at the airport to using Google Voice for free calls, here are the veteran traveler secrets to avoid shock bills.',
        category: 'Travel',
        readTime: '6 min read',
        date: 'Sep 22, 2024',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
        link: 'https://medium.com/tag/travel-tips'
    },
    {
        id: 'network-comparison',
        title: 'T-Mobile vs Verizon vs AT&T: The Real Network Showdown',
        excerpt: 'We drove 5,000 miles across the US testing all three networks. Here is what we found about coverage, speed, and reliability in real-world conditions.',
        category: 'Technology',
        readTime: '14 min read',
        date: 'Sep 10, 2024',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
        link: 'https://medium.com/tag/carrier-comparison'
    },
    {
        id: 'hidden-fees',
        title: 'The Hidden Fees They Don\'t Talk About',
        excerpt: 'Activation fees, "free" phones that aren\'t free, deprioritization during peak hours, and the fine print that adds $20 to your "unlimited" plan.',
        category: 'Savings',
        readTime: '7 min read',
        date: 'Aug 28, 2024',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80',
        link: 'https://medium.com/tag/mobile-data'
    },
    {
        id: 'phone-unlocking',
        title: 'How to Unlock Your Phone (And Why You Should)',
        excerpt: 'Carrier locks explained, the legal right to unlock after 60 days, step-by-step instructions for iPhone and Android, and how to avoid getting scammed.',
        category: 'Technology',
        readTime: '8 min read',
        date: 'Aug 15, 2024',
        image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80',
        link: 'https://medium.com/tag/mobile-tech'
    }
]
