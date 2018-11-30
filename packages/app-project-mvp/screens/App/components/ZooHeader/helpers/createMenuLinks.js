import counterpart from 'counterpart'

export default function createMenuLinks () {
  return [
    {
      href: '/',
      text: counterpart('ZooHeader.mainMenuLinks.projects')
    },
    {
      href: '/',
      text: counterpart('ZooHeader.mainMenuLinks.about')
    },
    {
      href: '/',
      text: counterpart('ZooHeader.mainMenuLinks.getInvolved')
    },
    {
      href: '/',
      text: counterpart('ZooHeader.mainMenuLinks.talk')
    },
    {
      href: '/',
      text: counterpart('ZooHeader.mainMenuLinks.build')
    }
  ]
}
