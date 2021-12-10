/* eslint-disable no-undef */
const { expect } = require('@jest/globals')
const { validateCpf } = require('./validate-cpf-after')

test('Deve retornar true para um CPF válido', () => {
  const resultCpfTest = validateCpf('111.444.777-35')
  expect(resultCpfTest).toBe(true)
})

test('Deve retornar false para um CPF inválido', () => {
  const resultCpfTest = validateCpf('111.111.111-11')
  expect(resultCpfTest).toBe(false)
})

test('Deve retornar uma exception caso não seja passado um CPF no parâmetro', () => {
  expect(() => validateCpf()).toThrow(new Error('O parâmetro CPF está vazio'))
})

test('Deve retornar uma exception caso a entrada do parâmetro CPF seja diferente do tipo string', () => {
  expect(() => validateCpf(11144477735)).toThrow(new Error('O parâmetro CPF deve ser do tipo string'))
})

test('Deve retornar uma exception caso não seja passado um CPF que esteja dentro do padrão regex', () => {
  expect(() => validateCpf('111;444.777-35')).toThrow(new Error('O parâmetro CPF não passou no padrão regex'))
})
