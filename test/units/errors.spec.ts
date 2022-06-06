import { ClientRequestError } from "../../src/utils/errors/cliente-error"
import { InternalError } from "../../src/utils/errors/internal-error"

describe('Teste Unit class error internal', () => {
    it('should returns message errors', () => {
        const errors = new InternalError("Error message")
        expect(errors.message).toBe("Error message")
    })

    it('should returns message ClientErrors', () => {
        const errors = new ClientRequestError("Error message")
        expect(errors.message).toBe("Unexpected error when trying to communicate to API GitHub: Error message")
    })
})