
describe('Beach gitHub Api functional tets', () => {
    it('should success return api gitHub', async () => {
        const { body } = await global.testRequest.get(`/WilkRhu/ApiNode`)
        console.log(body)
    })
})