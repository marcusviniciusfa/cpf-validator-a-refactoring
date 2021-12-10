/* eslint-disable no-undef */
const { expect } = require('@jest/globals')
const { validateCpf } = require('./validate-cpf-after')

test('Deve retornar true para o CPF A válido', () => {
  const resultCpfTest = validateCpf('111.444.777-35')
  expect(resultCpfTest).toBeTruthy()
})

test('Deve retornar true para o CPF B válido', () => {
  const resultCpfTest = validateCpf('935.411.347-80')
  expect(resultCpfTest).toBeTruthy()
})

test('Deve retornar true para o CPF C válido', () => {
  const resultCpfTest = validateCpf('357.188.378-05')
  expect(resultCpfTest).toBeTruthy()
})

test('Deve retornar true para o CPF D válido', () => {
  const resultCpfTest = validateCpf('987.654.321-00')
  expect(resultCpfTest).toBeTruthy()
})

test('Deve retornar false para um CPF E inválido (todos os números iguais)', () => {
  const resultCpfTest = validateCpf('111.111.111-11')
  expect(resultCpfTest).toBeFalsy()
})

test('Deve retornar false para um CPF F inválido', () => {
  const resultCpfTest = validateCpf('123.456.789-00')
  expect(resultCpfTest).toBeFalsy()
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
