import { mount } from '@cypress/vue'
import Link from './Link'

describe('Link', () => {
  it('renders a nuxt-link component when the prop to is available', () => {
    mount(Link, {
      propsData: {
        to: 'somewhere',
      },
      slots: {
        default: 'Some nuxt link',
      },
    })

    cy.get('nuxt-link').contains('Some nuxt link')
  })

  it('renders an anchor when the prop href is available', () => {
    mount(Link, {
      propsData: {
        href: 'https://example.org',
      },
      slots: {
        default: 'Some anchor',
      },
    })

    cy.get('a')
      .should('have.attr', 'href', 'https://example.org')
      .contains('Some anchor')
  })

  it('renders a span when neither to nor href are available', () => {
    mount(Link, {
      propsData: {},
      slots: {
        default: 'Some span',
      },
    })
    cy.get('span').contains('Some span')
  })
})
