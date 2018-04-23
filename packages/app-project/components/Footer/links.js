import counterpart from 'counterpart'
import en from './locales/en'

counterpart.registerTranslations('en', en)

export default [
  {
    title: {
      text: counterpart('Footer.links.projects'),
      url: '#',
    },
  },
  {
    title: {
      text: counterpart('Footer.links.about'),
      url: '#',
    },
    links: [
      {
        text: counterpart('Footer.links.publications'),
        url: '#',
      },
      {
        text: counterpart('Footer.links.team'),
        url: '#',
      },
      {
        text: counterpart('Footer.links.acknowledgements'),
        url: '#',
      },
      {
        text: counterpart('Footer.links.contact'),
        url: '#',
      },
      {
        text: counterpart('Footer.links.faq'),
        url: '#',
      },
    ],
  },
  {
    title: {
      text: counterpart('Footer.links.getInvolved'),
      url: '#',
    },
    links: [
      {
        text: counterpart('Footer.links.volunteering'),
        link: '#',
      },
      {
        text: counterpart('Footer.links.education'),
        link: '#',
      },
      {
        text: counterpart('Footer.links.callForProjects'),
        link: '#',
      },
      {
        text: counterpart('Footer.links.collections'),
        link: '#',
      },
    ],
  },
  {
    title: {
      text: counterpart('Footer.links.talk'),
      url: '#',
    },
  },
  {
    title: {
      text: counterpart('Footer.links.buildAProject'),
      url: '#',
    },
    links: [
      {
        text: counterpart('Footer.links.tutorial'),
        url: '#',
      },
      {
        text: counterpart('Footer.links.glossary'),
        url: '#',
      },
      {
        text: counterpart('Footer.links.policies'),
        url: '#',
      },
      {
        text: counterpart('Footer.links.bestPractices'),
        url: '#',
      },
    ],
  },
  {
    title: {
      text: counterpart('Footer.links.news'),
      url: '#',
    },
    links: [
      {
        text: counterpart('Footer.links.dailyZooniverse'),
        url: '#',
      },
      {
        text: counterpart('Footer.links.blog'),
        url: '#',
      },
    ],
  },
]
