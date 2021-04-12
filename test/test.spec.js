import { render } from '@testing-library/vue'
import Hero from '@/components/Hero'

describe('Hero', () => {
  test('is a Vue instance', () => {
    render(Hero)
  })
})
