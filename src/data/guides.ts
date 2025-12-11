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
        id: 'best-plans-2025',
        title: '9 Best Cell Phone Plans of 2025',
        excerpt: 'We tested over 50 plans to find the absolute best value carriers for students, families, and light users. Featuring US Mobile, Mint Mobile, and Visible.',
        category: 'Ranking',
        readTime: '15 min read',
        date: 'Oct 14, 2024',
        image: '/imgs/9 Best Cell Phone Plans of 2025.jpg',
        link: 'https://www.bestphoneplans.net/news/best-cell-phone-plans'
    },
    {
        id: 'students-plans',
        title: '7 Best Cell Phone Plans for Students in 2025',
        excerpt: 'The best budget-friendly plans that don\'t require a credit check or SSN. Perfect for international students in the US.',
        category: 'Best Picks',
        readTime: '10 min read',
        date: 'Feb 1, 2025',
        image: '/imgs/7 Best Cell Phone Plans for Students in 2025.jpg',
        link: 'https://www.bestphoneplans.net/news/best-cell-phone-plans-for-students'
    },
    {
        id: 'unlimited-plans',
        title: '11 Best Unlimited Data Plans of 2025',
        excerpt: 'We ranked the best unlimited plans from Verizon, AT&T, T-Mobile, and MVNOs based on priority data, hotspot allowance, and price.',
        category: 'Ranking',
        readTime: '12 min read',
        date: 'July 9, 2024',
        image: '/imgs/11 Best Unlimited Data Plans of 2025.webp',
        link: 'https://www.bestphoneplans.net/news/best-unlimited-data-plans'
    },
    {
        id: 'lower-bill',
        title: 'How To Lower Your Cell Phone Bill (And Save Hundreds)',
        excerpt: 'Stop overpaying for "Unlimited" data you don\'t use. We show you how to analyze your usage and switch to a plan that fits your needs.',
        category: 'Guides',
        readTime: '8 min read',
        date: 'Jan 31, 2025',
        image: '/imgs/How To Lower Your Cell Phone Bill and Save Hundreds of Dollars Per Year.webp',
        link: 'https://www.bestphoneplans.net/news/how-to-lower-your-cell-phone-bill'
    },
    {
        id: 'cheap-plans',
        title: 'Best Cheap Cell Phone Plans of 2025',
        excerpt: 'You can get reliable coverage for under $20/month. We review Helium Mobile ($0/mo), US Mobile ($10/mo), and other hidden gems.',
        category: 'Savings',
        readTime: '6 min read',
        date: 'Oct 15, 2025',
        image: '/imgs/Best Cheap Cell Phone Plans of 2025.webp',
        link: 'https://www.bestphoneplans.net/news/best-cheap-cell-phone-plans'
    },
    {
        id: 'one-line',
        title: '5 Best Cell Phone Plans for One Line',
        excerpt: 'Family plans aren\'t the only way to save. These single-line plans offer multi-line pricing without the need for a group.',
        category: 'Reviews',
        readTime: '7 min read',
        date: 'Feb 1, 2025',
        image: '/imgs/5 Best Cell Phone Plans for One Line in 2025.webp',
        link: 'https://www.bestphoneplans.net/news/best-cell-phone-plans-for-one-line'
    },
    {
        id: 'pick-plan',
        title: 'How To Pick A Cell Phone Plan in 2025',
        excerpt: 'Confused by data caps and throttled speeds? We break down exactly how to choose the right plan for your usage patterns.',
        category: 'Guide',
        readTime: '10 min read',
        date: 'Feb 1, 2025',
        image: '/imgs/How To Pick A Cell Phone Plan in 2025.jpg',
        link: 'https://www.bestphoneplans.net/news/pick-a-cell-phone-plan'
    },
    {
        id: 'dont-get-mint',
        title: '7 Reasons Why Not To Get Mint Mobile',
        excerpt: 'Mint Mobile is popular, but it isn\'t for everyone. Read this before you commit to their 3-month bulk pricing model.',
        category: 'Opinion',
        readTime: '8 min read',
        date: 'Jan 2, 2024',
        image: '/imgs/7 Reasons Why Not To Get Mint Mobile.jpg',
        link: 'https://www.bestphoneplans.net/news/dont-get-mint-mobile'
    },
    {
        id: 'att-hotspot',
        title: 'AT&T\'s Tablet and Hotspot Data Plans: Explained',
        excerpt: 'AT&T offers 7 categories of hotspot and data plans. Here are all the different features, benefits, and prices explained.',
        category: 'Guides',
        readTime: '10 min read',
        date: 'Dec 11, 2024', // Approximated date based on "News" context or today's date if not found
        image: '/imgs/ATTs Tablet and Hotspot Data Plans Explained.jpeg',
        link: 'https://www.bestphoneplans.net/news/att-tablet-hotspot-plans-explained'
    },
    {
        id: 'cheaper-plans',
        title: 'How Can Some Cell Phone Plans Cost So Much Less?',
        excerpt: 'The math behind $15/month plans vs $80/month plans. Are you paying for brand name or actual network quality?',
        category: 'Education',
        readTime: '6 min read',
        date: 'June 18, 2024',
        image: '/imgs/Which One Is Actually Cheaper.jpg',
        link: 'https://www.bestphoneplans.net/news/how-some-cell-phone-plans-can-be-cheaper-than-others'
    },
    {
        id: 'tmobile-transfer',
        title: 'How To Get Your T-Mobile Transfer PIN',
        excerpt: 'Moving your number to a cheaper carrier? Here is the step-by-step guide to generating your Port-Out PIN from the T-Mobile app.',
        category: 'Guides',
        readTime: '3 min read',
        date: 'Dec 7, 2024',
        image: '/imgs/How To Get Your T-Mobile Transfer PIN.webp',
        link: 'https://www.bestphoneplans.net/news/t-mobile-transfer-pin'
    },
    {
        id: 'att-transfer',
        title: 'How To Get Your AT&T Transfer PIN',
        excerpt: 'Don\'t let AT&T hold your number hostage. Learn how to request your Number Transfer PIN and account number in minutes.',
        category: 'Guides',
        readTime: '3 min read',
        date: 'Dec 7, 2024',
        image: '/imgs/How To Get Your ATT Transfer PIN.webp',
        link: 'https://www.bestphoneplans.net/news/att-transfer-pin'
    },
    {
        id: 'verizon-transfer',
        title: 'How To Get Your Verizon Transfer PIN',
        excerpt: 'Switching away from Big Red? Follow these simple steps to get your transfer PIN and keep your phone number.',
        category: 'Guides',
        readTime: '3 min read',
        date: 'Dec 6, 2024',
        image: '/imgs/How To Get Your Verizon Number Transfer PIN.webp',
        link: 'https://www.bestphoneplans.net/news/verizon-transfer-pin'
    }
]