// import { account } from "../../DB.js";
import { models } from "../../DB.js";

const account = models.account;

//************eliminar Usuario************************ */
const deleteAccount = async (req, res) => {
    try {
      const { id } = req.params;
  
      const account = await account.findByPk(id);
  
      if (!account) {
        return res.status(404).json({ error: "account no encontrado" });
      }
  
      //await account.destroy();
      await account.update({ Delete: true });
  
      res.status(200).send("Acción eliminada exitosamente");
    } catch (error) {
      console.error("Error al eliminar la acción:", error);
      res.status(500).json({ error: "Error al eliminar cuenta" });
    }
   
  };
  
  //*******deshacer Delete */
  const deshacerDeleteAccount = async (req, res) => {
    try {
      const { id } = req.params;
  
      const account = await account.findByPk(id);
  
      if (!account) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
  
      //await account.destroy();
      await account.update({ Delete: false });
  
      res.status(200).send(" Cuenta recuperada exitosamente");
    } catch (error) {
      console.error("Error al recuperar cuenta:", error);
      res.status(500).json({ error: "Error al recuperar cuenta" });
    }
   
  };

  export {deleteAccount , deshacerDeleteAccount}