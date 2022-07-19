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
                    link: {type: 'doc', id: 'ssv.network/Learn/Introduction/index'},
                    items: [
                        'ssv.network/Learn/Introduction/tech_overview',
                        'ssv.network/Learn/Introduction/network_overview',
                        'ssv.network/Learn/Introduction/ssv_token',
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
                            link: {type: 'doc', id: 'ssv.network/Learn/Protocol/tokenomic/index'},
                            items: [
                                'ssv.network/Learn/Protocol/tokenomic/Fees',
                                'ssv.network/Learn/Protocol/tokenomic/Payments',
                                'ssv.network/Learn/Protocol/tokenomic/Liquidations',
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
                    link: {type: 'doc', id: 'ssv.network/Learn/Accounts/index'},
                    items: [
                        'ssv.network/Learn/Accounts/reactivation',
                    ]
                },
                {
                    type: 'category',
                    label: 'Операторы',
                    link: {type: 'doc', id: 'ssv.network/Learn/Operators/index'},
                    items: [
                        'ssv.network/Learn/Operators/update_fee',
                        'ssv.network/Learn/Operators/оffboarding',
                    ]
                },
                {
                    type: 'category',
                    label: 'Стейкеры',
                    link: {type: 'doc', id: 'ssv.network/Learn/Stakers/index'},
                    items: [
                        'ssv.network/Learn/Stakers/update_operator',
                        'ssv.network/Learn/Stakers/offboarding',
                    ]
                },
                {
                    type: 'category',
                    label: 'Глоссарий',
                    link: {type: 'doc', id: 'ssv.network/Learn/Glossary/index'},
                    items: []
                },
                {
                    type: 'category',
                    label: 'Разработчикам',
                    items: [
                        'ssv.network/Dev/introduction',
                        {
                            type: 'category',
                            label: 'Руководство по интеграции',
                            link: {type: 'generated-index'},
                            items: [
                                {
                                    type: 'category',
                                    label: 'Стейкинг пулы',
                                    link: {type: 'doc', id: 'ssv.network/Dev/Integration/StakingPools/index'},
                                    items: [
                                        'ssv.network/Dev/Integration/StakingPools/initializations_tage',
                                        'ssv.network/Dev/Integration/StakingPools/operation_stage',
                                        'ssv.network/Dev/Integration/StakingPools/maintenance_stage',
                                    ]
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Инструменты',
                            link: {type: 'generated-index'},
                            items: [
                                {
                                    type: 'category',
                                    label: 'Дистрибьютор ключей SSV',
                                    link: {type: 'doc', id: 'ssv.network/Dev/Tools/KeyDistributor/index'},
                                    items: [
                                        'ssv.network/Dev/Tools/KeyDistributor/cli_interface',
                                        'ssv.network/Dev/Tools/KeyDistributor/sdk'
                                    ]
                                },
                                {
                                    type: 'link',
                                    label: 'SSV API',
                                    href: 'https://ssv-api.ssv.network/documentation/#/',

                                }
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Смарт контракты',
                            link: {type: 'doc', id: 'ssv.network/Dev/SmartContracts/index'},
                            items: [
                                'ssv.network/Dev/SmartContracts/account_methods',
                                'ssv.network/Dev/SmartContracts/operator_methods',
                                'ssv.network/Dev/SmartContracts/validators_methods',
                                'ssv.network/Dev/SmartContracts/liquidators_methods',
                                'ssv.network/Dev/SmartContracts/governance_methods',
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Тестнет',
                            link: {type: 'doc', id: 'ssv.network/Dev/Testnet/index'},
                            items: []
                        }

                    ]
                },
                {
                    type: 'category',
                    label: 'Запуск ноды',
                    items: [
                        {
                            type: 'category',
                            label: 'Нода оператора',
                            link: {type: 'doc', id: 'ssv.network/Node/OperatorNode/index'},
                            items: [
                                'ssv.network/Node/OperatorNode/installation',
                                'ssv.network/Node/OperatorNode/registration',
                                {
                                    type: 'category',
                                    label: 'Эксплуатация',
                                    link: {type: 'generated-index', slug:'/ssv.network/node/operatornode/maintenance'},
                                    items: [
                                        'ssv.network/Node/OperatorNode/Maintenance/configuration',
                                        'ssv.network/Node/OperatorNode/Maintenance/grafana',
                                        'ssv.network/Node/OperatorNode/Maintenance/troubleshooting',

                                    ]
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Нода ликвидатора',
                            link: {type: 'doc', id: 'ssv.network/Node/LiquidatorNode/index'},
                            items: [
                                'ssv.network/Node/LiquidatorNode/installation'
                            ]
                        },
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
