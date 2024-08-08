import { envs } from '../config/enviroments/enviroments.js';
import recoveryPasswordController from '../controllers/postPasswordRecoveryController.js'
import { recoveryPasswordSchema } from '../validates/recoveryPasswordValidates.js';


const recoveryPasswordHandler = async(req, res) => {
    try {
        const { Username, NewPassword, phoneNumber } = req.body

        const validatedInformation = recoveryPasswordSchema.parse({Username, NewPassword, phoneNumber})

        const payload = {
            BrandId : envs.BRANDID,
            APIKey : envs.APIKEY,
            Username: validatedInformation.Username,
            NewPassword : validatedInformation.NewPassword,
            phoneNumber : validatedInformation.phoneNumber
        };
        
        const passwordRecovered = await recoveryPasswordController(payload)

        if (!passwordRecovered.data.Success) {
            throw new Error(passwordRecovered.data.Message)
        }

        return res.status(200).json(passwordRecovered.data)
    } catch (error) {
        if (error.name === 'ZodError') {
            // Extraer solo los mensajes de los errores de Zod
            const messages = error.errors.map(err => err.message);
            return res.status(500).json({ error: messages.join(', ') });
        }

        return res.status(500).json({ error: error.message })
    }
}

export default recoveryPasswordHandler