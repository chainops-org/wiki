/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

module.exports = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    docs: [
        'intro',
        {
            type: 'category',
            label: 'ssv.network',
            items: [
                {
                    type: 'category',
                    label: 'Введение',
                    link: {type: 'doc', id: 'ssv.network/Introduction/index'},
                    items: [
                        'ssv.network/Introduction/tech_overview',
                        'ssv.network/Introduction/network_overview',
                        'ssv.network/Introduction/ssv_token',
                    ]
                },
                {
                    type: 'category',
                    label: 'Обзор протокола',
                    link: {type: 'generated-index'},
                    items: [
                        {
                            type: 'category',
                            label: 'Токеномика',
                            link: {type: 'doc', id: 'ssv.network/Protocol/tokenomic/index'},
                            items: [
                                'ssv.network/Protocol/tokenomic/Fees',
                                'ssv.network/Protocol/tokenomic/Payments',
                                'ssv.network/Protocol/tokenomic/Liquidations',
                            ]
                        },
                        {
                            type: 'link',
                            label: 'SSV Spec',
                            href: 'https://github.com/bloxapp/ssv-spec',
                        },
                        {
                            type: 'link',
                            label: 'P2P Spec',
                            href: 'https://github.com/bloxapp/ssv-spec/tree/main/p2p',
                        },
                    ]
                },
                {
                    type: 'category',
                    label: 'Учетные записи',
                    link: {type: 'doc', id: 'ssv.network/Accounts/index'},
                    items: [
                        'ssv.network/Accounts/reactivation',
                    ]
                },
                {
                    type: 'category',
                    label: 'Операторы',
                    link: {type: 'doc', id: 'ssv.network/Operators/index'},
                    items: [
                        'ssv.network/Operators/update_fee',
                        'ssv.network/Operators/оffboarding',
                    ]
                },
                {
                    type: 'category',
                    label: 'Стейкеры',
                    link: {type: 'doc', id: 'ssv.network/Stakers/index'},
                    items: [
                        'ssv.network/Stakers/update_operator',
                        'ssv.network/Stakers/offboarding',
                    ]
                },
            ]

        },
        {
            type: 'link',
            label: 'Learn more',
            href: 'https://example.com',
        },
    ],

    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */
};
