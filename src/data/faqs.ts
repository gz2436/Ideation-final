export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: 'Billing' | 'Coverage' | 'Plans' | 'International';
}

export const faqs: FAQ[] = [
    {
        id: 'billing-1',
        question: 'Are there any hidden fees?',
        answer: 'Most prepaid plans we recommend (like Mint, Visible, Google Fi) include taxes and fees in their advertised price or clearly state them upfront. Postpaid plans from major carriers often add taxes and administrative fees on top of the monthly rate.',
        category: 'Billing'
    },
    {
        id: 'billing-2',
        question: 'How do I pay my bill?',
        answer: 'All carriers offer online payment portals and mobile apps. Most prepaid plans require AutoPay (credit/debit card) to get the best rates. You can usually set this up during activation.',
        category: 'Billing'
    },
    {
        id: 'coverage-1',
        question: 'Which network has the best coverage?',
        answer: 'Verizon generally has the widest rural coverage, while T-Mobile leads in 5G speed and availability in cities. AT&T offers a strong balance of both. Check the coverage map for your specific campus or city before choosing.',
        category: 'Coverage'
    },
    {
        id: 'coverage-2',
        question: 'What happens if I have no signal?',
        answer: 'If you have no cellular signal, most modern phones and plans support "Wi-Fi Calling," which allows you to make calls and send texts over a Wi-Fi connection. Make sure to enable this in your phone settings.',
        category: 'Coverage'
    },
    {
        id: 'plans-1',
        question: 'Can I keep my current phone number?',
        answer: 'Yes! Federal law allows you to port your number to a new carrier. You will need your current account number and a "Transfer PIN" (or Number Transfer PIN) from your old carrier to complete the switch.',
        category: 'Plans'
    },
    {
        id: 'plans-2',
        question: 'Do I need to sign a contract?',
        answer: 'No. All the plans featured on GoUS are "No Contract" or "Prepaid" plans. You can cancel or switch at any time without paying an early termination fee (though you may forfeit the remainder of the month you paid for).',
        category: 'Plans'
    },
    {
        id: 'intl-1',
        question: 'Can I use my phone abroad?',
        answer: 'It depends on the plan. Google Fi and T-Mobile (Magenta/Go5G) offer excellent free international data. Visible+ includes a Global Pass. For other prepaid plans, you may need to buy a separate international add-on or use a travel eSIM.',
        category: 'International'
    },
    {
        id: 'intl-2',
        question: 'Is calling Canada and Mexico included?',
        answer: 'Yes, almost all "Unlimited" plans from major carriers and MVNOs (like Visible, Mint, Cricket) include free talk and text to Mexico and Canada. Check the specific plan details to be sure.',
        category: 'International'
    }
];
