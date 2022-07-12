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
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
 
 tutorialSidebar: [
    'intro',
    {
      type: 'doc', 
      label: 'ssv.network',
      
      items: [
       {
        type: 'category',
        label: 'Введение',
        dirName: 'ssv.network/Introduction',
        //link: {type: 'doc', id: 'ssv.network/Introduction/overview'},
        items: ['ssv.network/Introduction/tech_overview', 'ssv.network/Introduction/ssv_toke'],
       },
      ]
    }
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
