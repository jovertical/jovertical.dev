Cypress.Commands.add('mock', (factory, attributes = {}, times = null) => {
  let data = Array.from({ length: times || 1 }, () => ({
    ...factory.definition(),
    ...attributes,
  }))

  return cy
    .request('POST', 'api/mocks/' + factory.resourceName, data)
    .then(({ body }) => (times === null ? body[0] : body))
})
