const cpfRegex = /(\d{3})(\.?)(\d{3})(\.?)(\d{3})(-?)(\d{2})/g

function validateCpf (rawCpf) {
  if (!rawCpf) throw new Error('O parâmetro CPF está vazio')
  if (typeof rawCpf !== 'string') throw new Error('O parâmetro CPF deve ser do tipo string')
  if (!cpfRegex.test(rawCpf)) throw new Error('O parâmetro CPF não passou no padrão regex')
  const cleanCpf = clearCpf(rawCpf)
  if (checkBlockedCpf(cleanCpf)) return false
  const firstDigit = calculateDigits(cleanCpf, 10, 9)
  const lastDigit = calculateDigits(cleanCpf, 11, 10)
  return checkCpfValidity(cleanCpf, firstDigit, lastDigit)
}

function clearCpf (cpf) {
  return cpf.replace(/\D/g, '')
}

function checkBlockedCpf (cpf) {
  const firstDigit = cpf[0]
  return [...cpf].every(currentDigit => currentDigit === firstDigit)
}

function calculateDigits (cpf, factor, limitSeparateDigits) {
  const separateDigits = Array.from(cpf).slice(0, limitSeparateDigits)
  const sumCalculationOfDigits = separateDigits.reduce((digitSum, currentDigit) => {
    return digitSum + parseInt(currentDigit) * factor--
  }, 0)
  const restDivisionByEleven = sumCalculationOfDigits % 11
  return restDivisionByEleven < 2 ? 0 : 11 - restDivisionByEleven
}

function checkCpfValidity (cpf, firstDigit, lastDigit) {
  const enteredDigits = cpf.slice(9)
  const calculatedDigits = `${firstDigit}${lastDigit}`
  return enteredDigits === calculatedDigits
}

module.exports = { validateCpf }
