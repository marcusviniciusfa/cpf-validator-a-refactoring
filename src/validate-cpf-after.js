const maxValueGrowingStaircaseForFirstCalculation = 11
const limitSubSplitedCpfPerDigits = 10

function validateCpf (cpf) {
  const cpfIsEmpty = cpf === null || cpf === undefined
  if (cpfIsEmpty) throw new Error('O parâmetro CPF está vazio')

  if (typeof cpf !== 'string') throw new Error('O parâmetro CPF deve ser do tipo string')

  const cpfRegex = /(\d{3})(\.?)(\d{3})(\.?)(\d{3})(-?)(\d{2})/g
  if (!cpfRegex.test(cpf)) throw new Error('O parâmetro CPF não passou no padrão regex')

  const cleanCpf = cpf.replace(/\.|-/g, '')
  const splitedCpfPerDigits = cleanCpf.split('')
  const cpfWithEqualCharacters = splitedCpfPerDigits.every(digit => digit === cleanCpf[0])
  if (cpfWithEqualCharacters) return false

  const firstVerificationDigit = calculatesTheCpfFinalDigits(maxValueGrowingStaircaseForFirstCalculation - 1, splitedCpfPerDigits, limitSubSplitedCpfPerDigits - 1)
  const lastVerificationDigit = calculatesTheCpfFinalDigits(maxValueGrowingStaircaseForFirstCalculation, splitedCpfPerDigits, limitSubSplitedCpfPerDigits)
  return checksTheValidityOfTheCpf(cleanCpf, firstVerificationDigit, lastVerificationDigit)
}

function calculatesTheCpfFinalDigits (maxValueGrowingStaircaseForFirstCalculation, splitedCpfPerDigits, limitSubSplitedCpfPerDigits) {
  const subSplitedCpfPerDigits = splitedCpfPerDigits.slice(0, limitSubSplitedCpfPerDigits)
  const sumOfTheCalculationOfTheDigits = subSplitedCpfPerDigits.reduce((digitSum, currentDigit) => {
    return digitSum + parseInt(currentDigit) * maxValueGrowingStaircaseForFirstCalculation--
  }, 0)
  const restOfTheDivisionByEleven = sumOfTheCalculationOfTheDigits % 11
  return restOfTheDivisionByEleven < 2 ? 0 : 11 - restOfTheDivisionByEleven
}

function checksTheValidityOfTheCpf (cleanCpf, firstVerificationDigit, lastVerificationDigit) {
  const digitsVerifiersPassedInTheInputCpf = cleanCpf.substring(cleanCpf.length - 2, cleanCpf.length)
  const digitsVerifiersFromTheCalculationMadeInTheEntryCpf = `${firstVerificationDigit}${lastVerificationDigit}`
  return digitsVerifiersPassedInTheInputCpf === digitsVerifiersFromTheCalculationMadeInTheEntryCpf
}

module.exports = { validateCpf }
